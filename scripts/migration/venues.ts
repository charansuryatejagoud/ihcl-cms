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
      `*[_type == "page" && path == "/hotels/taj-lands-end-mumbai/venues"]{
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
        let venueDetails = []
        let perfectEvent = []
        let timelessWeddings = []

        data?.items?.map((item) => {
          if (item?._type == "banner") {
            title = item?.title
            mediaType = item?.mediaType
            imageAsset = item?.imageAsset
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.group-with-3-column-cards-grid") {
            sectionTitle = item?.title
            description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card) => {
                let cardObj = {
                  _key: '',
                  basicInfo: {
                    title: "",
                    subTitle: "",
                    description: "",
                    specifications: [{
                      keyType: "",
                      key: "",
                      value: ""
                    }],
                    media: [],
                  },
                  highlights: []
                }
                let mediaArr = []
                let mediaObj = {
                  imageAsset: {
                    largeImage: []
                  }
                }
                let highlightsArr = []
                if (card?._type == 'card') {
                  cardObj._key = card?._key
                  cardObj.basicInfo.title = card?.title
                  cardObj.basicInfo.subTitle = card?.subTitle
                  cardObj.basicInfo.description = card?.description

                  highlightsArr.push(card?.highLights)

                  mediaObj.imageAsset.largeImage = card?.largeImage
                  mediaArr.push(mediaObj)

                  cardObj.basicInfo.media = mediaArr
                  cardObj.highlights = highlightsArr
                  // console.log("cardObj.images", cardObj.images)
                  venueDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.highlighted-2-card-carousel") {
            sectionTitle = item?.title
            description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card) => {
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
                if (card?._type == 'card') {
                  cardObj._key = card?._key
                  cardObj.basicInfo.title = card?.title
                  cardObj.basicInfo.description = card?.description

                  mediaObj.imageAsset.largeImage = card?.largeImage
                  mediaArr.push(mediaObj)

                  cardObj.basicInfo.media = mediaArr
                  // console.log("cardObj.images", cardObj.images)
                  perfectEvent.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.carousel-with-back-ground-image") {
            sectionTitle = item?.title
            description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card) => {
                let cardObj = {
                  _key: '',
                  basicInfo: {
                    title: "",
                    description: "",
                    media: [],
                    backgroundImage: {
                      largeImage: []
                    }
                  }
                }
                let mediaArr = []
                let mediaObj = {
                  imageAsset: {
                    largeImage: []
                  }
                }
                if (card?._type == 'card') {
                  cardObj._key = card?._key
                  cardObj.basicInfo.title = card?.title
                  cardObj.basicInfo.description = card?.description

                  mediaObj.imageAsset.largeImage = card?.largeImage
                  mediaArr.push(mediaObj)

                  cardObj.basicInfo.backgroundImage.largeImage = card?.backgroundImage

                  cardObj.basicInfo.media = mediaArr
                  // console.log("cardObj.images", cardObj.images)
                  timelessWeddings.push(cardObj)
                }
              })
            }
          }
        })

        let newVenues = {
          _type: "venues",
          title: title,
          sectionTitle: sectionTitle,
          description: description,
          bannerImage: {
            mediaType: mediaType,
            imageAsset: imageAsset
          },
          venueDetails: venueDetails,
          perfectEvent: perfectEvent,
          timelessWeddings: timelessWeddings
        }
        client
          .create(newVenues)
          .then((newVenues) => {
            console.log("Created new Venues ", newVenues?.title);
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
