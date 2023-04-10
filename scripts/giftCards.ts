import sanityClient from "@sanity/client";
import fetch from "node-fetch";
// import { encode } from "js-base64";
// import { Axios } from "axios";

run();
async function run() {
  console.log("Running Product Data");
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
  //   const response = await fetch("http://20.219.150.172:8084/gc/getCategories")
  //     .then((res) => res.json())
  //     .then((json) => {
  //     //   console.log('api data ',json);
  //       return json;
  //     });
  // console.log('arr ', response);
  console.log("hi");

  const response = await fetch("http://20.219.150.172:8084/gc/getProducts", {
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
  // console.log(res);

  // .then((res) => {
  //   res.json();
  //   console.log("res", res);
  // })
  // .catch((err) => console.error(err));

  // const giftCard = response?.products?.map((p) => {
  //   const doc = { _type: "product", ...p };
  //   client.create(doc).then((res) => {
  //     console.log(`Gift Card was created with document ID ${res._id}`);
  //   });
  // });

  // console.log(response.headers.get('content-type'))
  // console.log("Running Product Data", response);
  let c = 0;
  for (let i = 0; i < 1; i++) {
    const doc = { _type: "giftCardsDetails", ...res?.products[i] };
    // console.log('doc ', doc);

    const storedGiftCards = await client
      .fetch(
        `*[_type == "giftCardsDetails"]{
      sku
     }`,
      )
      // .then((res) =>  res.json())
      .then((data) => {
        console.log("gc ", data);

        return data;
      })
      .catch((err) => console.log(err));

    const findDuplicateGiftCards = storedGiftCards.map((gc) => {
      console.log("i ", gc.sku + " " + doc?.sku);

      if (gc?.sku === doc?.sku) {
        console.log(`duplicate card was created ${c++}`);
      } else {
        console.log("exec else");

        client.create(doc).then((res) => {
          console.log(
            `giftcard was created, document ID is ${res._id} with ${res.sku}`,
          );
        });
      }
    });

    // client.create(doc).then((res) => {
    //   console.log(`giftcard was created, document ID is ${res._id}`);
    // });
    // }
    console.log("end");
  }
}
