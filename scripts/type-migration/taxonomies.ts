import sanityClient from "@sanity/client";
import { customAlphabet } from "nanoid";

const newArrayCard = [];
const finalDocument = [];

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
  let taxoList;
  let pageItems;
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let storeData;

  await client
    // .fetch(`*[_type == "taxonomyInfo"][0..49]{...}`)
    // .fetch(`*[_type == "taxonomyInfo"][50..99]{...}`)
    // .fetch(`*[_type == "taxonomyInfo"][100..149]{...}`)
    // .fetch(`*[_type == "taxonomyInfo"][150..199]{...}`)
    // .fetch(`*[_type == "taxonomyInfo"][200..249]{...}`)
    .fetch(`*[_type == "taxonomyInfo"][250..299]{...}`)
    .then((response) => {
      // console.log(response)
      taxoList = response;
    })
    .catch((error) => {
      console.log("error", error);
    });

  const cards = taxoList?.map((item) => {
    let taxo = { ...item };
    // console.log(taxo.searchCategory)
    if (taxo != null) {
        taxo.searchCategory = "Holiday-Restaurant-Hotel";
    }
// console.log(taxo)
      client
        .createOrReplace(taxo)
        .then((res) => {
          console.log(res?.title + " Updated!");
        })
        .catch((err) => {
          console.error(
            "Oh no, the update failed: ",
            item.title,
            "Error : ",
            err.message,
          );
        });
  });
}
