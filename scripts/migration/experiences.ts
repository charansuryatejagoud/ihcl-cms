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
      `*[_type == "page" && path == "/hotels/taj-samudra-colomba/experiences"]{
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
        let bannerMediaObj = {
          mediaType: 'image',
          imageAsset: {
            largeImage: [],
            image:[]
          }
        }
        let bannerArr = []
        let sectionTitle = {}
        let description = ''
        let signatureExp = {}
        let experienceDetails = []

        data?.items?.map((item, index) => {
          if (item?._type == "banner") {
            title = item?.title?.desktopTitle.toString()
            bannerMediaObj.imageAsset.image = item?.imageAsset?.image
            bannerMediaObj.imageAsset.largeImage = item?.imageAsset?.largeImage
            bannerArr.push({_key: `${index}`, ...bannerMediaObj})
          }
          else if (item?._type == "group" && item?.largeVariant == "details.group.group-with-card-left-media-right-content-aspect-ratio-2:4") {
            sectionTitle = item?.title
            description = item?.subTitle
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.group-with-3-column-cards-grid") {
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  basicInfo : {
                    title: "",
                    description: "",
                    media: [],
                  }
                }
                let mediaObj = {
                  _type:'mediaInput',
                  mediaType: 'image',
                  imageAsset: {
                    largeImage: [],
                    image:[]
                  }
                }
                let images = []
                let largeImages = []
                // let specArr = []
                if (card?._type == 'card') {
                  cardObj._key = card?._key
                  cardObj.basicInfo.title = card?.title
                  cardObj.basicInfo.description = card?.description
                  images.push({_key: `${index}`, ...card?.image})
                  largeImages.push({_key: `${index}`, ...card?.largeImage})
                  mediaObj.imageAsset.image = images
                  mediaObj.imageAsset.largeImage = largeImages
                  cardObj.basicInfo.media.push({_key: `${index}`, ...mediaObj})
                  experienceDetails.push(cardObj)
                }
              })
            }
          }
        })
        // console.log("Migrated Data",attractionDetails)
        let newExperiences = {
          _type: "experiences",
          title: title,
          sectionTitle: sectionTitle,
          description: description,
          bannerImage: bannerArr,
          experienceDetails: experienceDetails
        }
        client
          .create(newExperiences)
          .then((newExperiences) => {
            console.log("Created new Experiences ", newExperiences?.title);
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
