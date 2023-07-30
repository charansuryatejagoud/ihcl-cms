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
      `*[_type == "page" && path == "/hotels/taj-samudra-colomba/dining"]{
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
        let diningDetails = []

        data?.items?.map((item, index) => {
          if (item?._type == "banner") {
            title = item?.title?.desktopTitle.toString()
            bannerMediaObj.imageAsset.image = item?.imageAsset?.image
            bannerMediaObj.imageAsset.largeImage = item?.imageAsset?.largeImage
            bannerArr.push({_key: `${index}`, ...bannerMediaObj})
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.highlighted-2-card-carousel") {
            sectionTitle = item?.title
            description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  basicInfo : {
                    title: "",
                    description: "",
                    media: [],
                    specifications: []
                  }
                }
                let mediaObj = {
                  _key: `${index}`,
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
                  card?.parameterMap?.map((subItem) => {
                    let specObj = {
                    _key: '',
                    keyType:'string',
                    key: '',
                    value: ''
                  }
                  // specObj.keyType = subItem?.keyType == 'string' ?  'string' : 'image'
                  specObj._key = subItem?._key
                  specObj.key = subItem?.key
                  specObj.value = subItem?.value
                  cardObj?.basicInfo.specifications.push(specObj)
                })
                  // console.log("cardObj.images", cardObj.images)
                  diningDetails.push(cardObj)
                }
              })
            }
          }
        })
        let newDining = {
          _type: "signatureDining",
          title: title,
          sectionTitle: sectionTitle,
          description: description,
          bannerImage: bannerArr,
          diningRooms: diningDetails
        }
        client
          .create(newDining)
          .then((newDining) => {
            console.log("Created new Dining ", newDining?.title);
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
