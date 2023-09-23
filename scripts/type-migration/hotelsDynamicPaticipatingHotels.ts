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
  let hotelList;
  let pageItems;
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let storeData;

  await client
    // .fetch(`*[_type == "hotel" && brandName match "Taj"][0..49]{...}`)
    // .fetch(`*[_type == "hotel" && brandName match "Taj"][50..99]{...}`)
    // .fetch(`*[_type == "hotel" && brandName match "Vivanta"]{...}`)
    .fetch(`*[_type == "hotel" && brandName match "Seleqtions"]{...}`)
    .then((response) => {
      // console.log(response)
      hotelList = response;
    })
    .catch((error) => {
      console.log("error", error);
    });

  const cards = hotelList?.map((item) => {
    let hotel = {...item, programs : []}
        hotel.programs.push("signatureAirlines")
        hotel.programs.push("clubVistara")
      
        client
          .createOrReplace(hotel)
          .then((res) => {
            console.log(res?.hotelName + " Updated!");
          })
          .catch((err) => {
            console.error(
              "Oh no, the update failed: ",
              item.hotelName,
              "Error : ",
              err.message,
            );
          });
  });
}
