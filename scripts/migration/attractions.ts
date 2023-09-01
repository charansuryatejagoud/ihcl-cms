import sanityClient from "@sanity/client";
import fetch from "node-fetch";

/*
 Steps to run this script:
 1. Open cmd.
 2. Check out to scripts\gift-cards in cmd.
 3. Run sanity exec giftCards.ts
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

  await client
    .fetch(
      `*[_type == "page" && path == "/hotels/taj-mahal-palace-mumbai/experiences"]{
          items
         }[0]`,
    )
    .then((data) => {
      if (data === null) {
        //Skipping
        console.log("No doc found")
      } else {
        //Creating a new attractions component
        // console.log(data)
        let title = ''
        let mediaType = ''
        let imageAsset = {}
        let sectionTitle = {}
        let description = ''
        let experienceDetails = []

        data?.items?.map((item) => {
          if (item?._type == "banner") {
            title = item?.title
            mediaType = item?.mediaType
            imageAsset = item?.imageAsset
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.highlighted-2-card-carousel") {
            sectionTitle = item?.title
            description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card) => {
                let cardObj = {
                  _key: '',
                  title: "",
                  description: "",
                  images: [],
                  specifications: []
                }
                // let specArr = []
                if (card?._type == 'card') {
                  cardObj._key = card?._key
                  cardObj.title = card?.title
                  cardObj.description = card?.description
                  cardObj.images = [card?.largeImage]
                  card?.richText?.map((subItem) => {
                    let specObj = {
                      _key: '',
                      key: '',
                      value: ''
                    }
                    specObj._key = subItem?._key
                    specObj.key = subItem?.richTextKey
                    specObj.value = subItem?.richTextValue
                    cardObj?.specifications.push(specObj)
                  })
                  // console.log("cardObj.images", cardObj.images)
                  experienceDetails.push(cardObj)
                }
              })
            }
          }
        })
        // console.log("Migrated Data",attractionDetails)
        let newAttractions = {
          _type: "attractions",
          title: title,
          sectionTitle: sectionTitle,
          description: description,
          bannerImage: {
            mediaType: mediaType,
            imageAsset: imageAsset
          },
          experienceDetails: experienceDetails
        }
        client
          .create(newAttractions)
          .then((newAttractions) => {
            console.log("Created new Attractions ", newAttractions?.title);
          })
          .catch((err) => {
            console.log("failed to update");
            console.log("err ", err);
          });
      }
    })
    .catch((err) => console.log(err));
  console.log("End");
}
