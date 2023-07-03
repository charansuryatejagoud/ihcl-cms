import sanityClient from "@sanity/client";
import fetch from "node-fetch";

/*
 Steps to run this script:
 1. Open cmd.
 2. Check out to scripts\gift-cards in cmd.
 3. Run sanity exec giftCards.ts
 4.npm exec giftCards.ts
 5.delete command:-
 sanity documents delete <document-id>
 * if you want to update the script monthly basis you need to install
 npm install node-cron
 6.use this code
 import cron from 'node-cron';

// Schedule the task to run on the 1st of every month at 8:00 AM
cron.schedule('0 8 1 * *', () => {
  updateCatalog();
});
*/

run();

async function run() {
  console.log("Start");
  const args = process;
  const username = "ihcl";
  const password = "ihcl@123";

  const client = sanityClient({
    projectId: "ocl5w36p",
    dataset: "production",
    apiVersion: "v2021-10-21",
    token:
      "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
    useCdn: false,
  });

  const response = await fetch("https://api-devv2.tajhotels.com/loyaltyService/v1/qc/fetch-products", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json;charset=UTF-8",
      USERNAME: username,
      PASSWORD: password,
    }),
    body: JSON.stringify({
      categoryId: "122",
    }),
  });
  const res = await response.json();

  res?.products?.map(async (gc) => {
    const { sku, name, currency, url, minPrice, maxPrice, price } = gc;
    let newGc = {
      _type: "giftCardsDetails",
      sku: sku,
      name: name,
      currency: currency,
      url: url,
      minPrice: minPrice,
      maxPrice: maxPrice,
      price: price,
    };

    await client
      .fetch(
        `*[_type == "giftCardsDetails" && sku == "${sku}"]{
        ...
       }[0]`,
      )
      .then((data) => {
        if (data === null) {
          //Creating a new document
          client
            .create(newGc)
            .then((res) => {
              console.log(`giftcard was created, document ID is ${res._id}`);
            })
            .catch((err) => console.log("Failed to create new document ", err));
        } else {
          //updating the existing document
          console.log("gc ", sku, data);
          client
            .patch(`${data._id}`)
            .set({
              name: name,
              currency: currency,
              url: url,
              minPrice: minPrice,
              maxPrice: maxPrice,
              price: price,
            })
            .commit()
            .then((updatedData) => {
              console.log("updated successfully");
              console.log("updated data ", updatedData);
            })
            .catch((err) => {
              console.log("failed to update");
              console.log("err ", err);
            });
        }
      })
      .catch((err) => console.log(err));
  });
  console.log("End");
}
