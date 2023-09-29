import sanityClient from "@sanity/client";
import { customAlphabet } from "nanoid";

run();
async function run() {
  const client = sanityClient({
    projectId: "ocl5w36p",
    dataset: "production",
    apiVersion: "v2021-10-21",
    token:
      "skvGpRkarezyqvYPJox5bHspP0Ww1iQvpzQ4TnAdNIuxMZwBgLi5K8OlA0QeDDgVexDRAM67T7Og0iCTxuFjWYKtmkMh0ZL0hhwhJwOlUc8nDEfQOBnE44HNa4FqIQgIrrtQr6xzrTQWA720n2ion1qWLPvYlPF8Hg74pJf0vxnky6XSJb60",
    useCdn: false,
  });
  console.log("script starts");
  let pageResponse, itemResponse;
  let value, doc;
  const nanoid = customAlphabet("1234567890abcdef", 12);

  await client
    .fetch(
      `
      *[_type == "facilities" ][301...322]{
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
