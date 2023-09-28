import sanityClient from "@sanity/client";
import { customAlphabet } from "nanoid";

run();
async function run() {
  const client = sanityClient({
    projectId: "ocl5w36p",
    dataset: "production",
    apiVersion: "v2021-10-21",
    token:
      "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
    useCdn: false,
  });
  console.log("script starts");
  let pageResponse, itemResponse;
  let value, doc;
  const nanoid = customAlphabet("1234567890abcdef", 12);

  await client
    .fetch(
      `
      *[_type == "facilities" ]{
        ...,
     
         }
      `,
    )
    .then((response) => {
      //   console.log(response);
      pageResponse = response;
    })
    .catch((error) => {
      console.log("error", error);
    });

  let f = pageResponse?.map((response) => {
    itemResponse = response;
    value = response.facilityDetails?.map((i) => {
      //   console.log("r ", i.title);
      let item = i?.title?.toLowerCase();
      if (item == "hotels" || item == "hotel") {
        let v = {
          ...i,
          title: "HOTELS",
        };
        return v;
      } else {
        let va = {
          ...i,
        };
        return va;
      }
    });
    doc = {
      ...response,
      facilityDetails: value,
    };

    client
      .createOrReplace(doc)
      .then((res) => {
        console.log(res?.title + " Updated!");
      })
      .catch((err) => {
        console.error(
          "Oh no, the update failed: ",
          response.title,
          "Error : ",
          err.message,
        );
      });
  });
}
