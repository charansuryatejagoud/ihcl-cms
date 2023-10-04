import sanityClient from "@sanity/client";

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
  let pageResponse, pageItems;
  let value,
    doc = [];

  await client
    .fetch(
      `
      *[_type == "page" && path == "/restaurants" ]{
        ...,
         }
      `,
    )
    .then((response) => {
    //   console.log(response);
      pageResponse = response;
     pageItems = response[0].items;

    })
    .catch((error) => {
      console.log("error", error);
    });

  const updatedItems = pageItems?.map((item) => {
    // console.log("hi")
    if (item?._type == "banner" && item?.searchFieldVariant == "ihcl.banner.global-search-field" ) {
      value = {
        ...item,
        searchData: {
          _type: "reference",
          _ref: "29693de5-dbea-449c-9866-43a18e466e3d",
        },
      };
      doc.push(value);
    } else {
        // value = {
        //     ...item
        // }
      doc.push(item);
    }
      return doc;
  });
  
//   let schema = doc?.map(item => console.log("i ",item))

  client
    .patch(pageResponse[0]._id)
    .set({ items: doc })
    .commit()
    .then((res) => {
      console.log(res?.path + " Updated!");
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        pageResponse.path,
        "Error : ",
        err.message,
      );
    });
}
