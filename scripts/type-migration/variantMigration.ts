import sanityClient from "@sanity/client";

/*

 This script is used to replace a existing key with any new key with at page items level.
 Eg: variants to mobileVariant.

 Steps to run this script:
 1. Open cmd.
 2. Check out to scripts\type-migration in cmd.
 3. Run sanity exec variantMigration.ts
*/

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
  console.log("Type migration starts");
  let pageResponse;
  let pageItems;
  await client
    .fetch(`*[_type == "page" && path == "/test-script"][0]{...}`)
    .then((response) => {
      pageResponse = response;
      pageItems = response.items;
    })
    .catch((error) => {
      console.log("error", error);
    });

  /*
    console.dir(JSON.parse(JSON.stringify(pageItems)), {
        depth: null,
        colors: true,
    });
  */

  const updatedItems = pageItems?.map((item) => {
    const newItem = extractItems(item, "highLights", "highLights");
    return newItem;
  });

  /*
    console.dir(JSON.parse(JSON.stringify(updatedItems)), {
        depth: null,
        colors: true,
    });
  */

  client
    .patch(pageResponse._id)
    .set({ items: updatedItems })
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

function extractItems(item, existingKey, newKey) {
  item?.items?.map((nestedItem) => {
    extractItems(nestedItem, existingKey, newKey);
  });
  // replaceKey(item, existingKey, newKey);
  convertStringToArrayInCard(item, existingKey);

  return item;
}

function replaceKey(item, existingKey, newKey) {
  if (item[existingKey]) {
    item[newKey] = item[existingKey];
    delete item[existingKey];
  }
  return item;
}

function convertStringToArrayInCard(item, existingKey) {
  if (item[existingKey] && item._type === "card") {
    item[existingKey] = [item[existingKey]];
  }
  return item;
}
