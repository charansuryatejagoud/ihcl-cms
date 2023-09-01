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
      `*[_type == "page" && path == "/hotels/taj-lands-end-mumbai/overview"]{
          items
         }[0]`,
    )
    .then((data) => {
      if (data === null) {
        //Skipping
        console.log("No doc found")
      } else {
        // console.log(data)
        let title = ''
        let mediaType = ''
        let imageAsset = {}
        let sectionTitle = {}
        let description = ''
        let basicInfo = {}

        data?.items?.map((item) => {
          if (item?._type == "banner") {
            title = item?.title
            mediaType = item?.mediaType
            imageAsset = item?.imageAsset
          }
          else if (item?._type == "card" && item?.largeVariant == "details.card.card-with-right-media-left-content-aspect-ratio-2:4") {
            // sectionTitle = item?.title
            // description = item?.subTitle
            let cardObj = {
              _key: '',
              basicInfo: {
                title: "",
                description: "",
                media: [],
              }
            }
            let mediaArr = []
            let mediaObj = {
              imageAsset: {
                largeImage: []
              }
            }
            cardObj.basicInfo.title = item?.title
            cardObj.basicInfo.description = item?.description

            mediaObj.imageAsset.largeImage = item?.largeImage
            mediaArr.push(mediaObj)

            cardObj.basicInfo.media = mediaArr
            // console.log("cardObj.images", cardObj.images)
            basicInfo = cardObj?.basicInfo
          }
        })

        let newOverview = {
          _type: "hotelOverview",
          title: title,
          sectionTitle: sectionTitle,
          description: description,
          bannerImage: {
            mediaType: mediaType,
            imageAsset: imageAsset
          },
          basicInfo: basicInfo
        }
        client
          .create(newOverview)
          .then((newOverview) => {
            console.log("Created new Wellness ", newOverview?.title);
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
