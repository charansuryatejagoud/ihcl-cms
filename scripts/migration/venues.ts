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
      `*[_type == "page" && path == "/hotels/taj-coromandel-chennai/venues"]{
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
        let venuesAndOccasions = {
          type: 'venuesAndOccasions',
          sectionTitle: [],
          description: '',
          eventVenueDetails: []
        }
        let perfectEventSection = {
          type:'object',
          sectionTitle: [],
          description: '',
          perfectEvent: []
        }
        let timelessWeddings = {
          type:'object',
          sectionTitle: [],
          description: '',
          weddingEvents: []
        }

        data?.items?.map((item, index) => {
          if (item?._type == "banner") {
            title = item?.title?.desktopTitle.toString()
            bannerMediaObj.imageAsset.image = item?.imageAsset?.image
            bannerMediaObj.imageAsset.largeImage = item?.imageAsset?.largeImage
            bannerArr.push({_key: `${index}`, ...bannerMediaObj})
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.group-with-3-column-cards-grid") {
            venuesAndOccasions.sectionTitle = item?.title
            venuesAndOccasions.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'venueAndOccasionInfo',
                  basicInfo : {
                    _type:'basicDetails',
                    title: "",
                    description: "",
                    media: [],
                  },
                  highlights: []
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
                if (card?._type == 'card') {
                  cardObj._key = card?._key
                  cardObj.basicInfo.title = card?.title
                  cardObj.basicInfo.description = card?.description
                  images.push({_key: `${index}`, ...card?.image})
                  largeImages.push({_key: `${index}`, ...card?.largeImage})
                  mediaObj.imageAsset.image = images
                  mediaObj.imageAsset.largeImage = largeImages
                  cardObj.basicInfo.media.push({_key: `${index}`, ...mediaObj})
                  
                  cardObj.highlights.push(card?.highLights)
                  // console.log("cardObj.images", cardObj.images)
                  venuesAndOccasions.eventVenueDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.highlighted-2-card-carousel") {
            perfectEventSection.sectionTitle = item?.title
            perfectEventSection.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  basicInfo: {
                    title: "",
                    description: "",
                    media: [],
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
                if (card?._type == 'card') {
                  cardObj._key = card?._key
                  cardObj.basicInfo.title = card?.title
                  cardObj.basicInfo.description = card?.description
                  images.push({_key: `${index}`, ...card?.image})
                  largeImages.push({_key: `${index}`, ...card?.largeImage})
                  mediaObj.imageAsset.image = images
                  mediaObj.imageAsset.largeImage = largeImages
                  cardObj.basicInfo.media.push({_key: `${index}`, ...mediaObj})
                  // console.log("cardObj.images", cardObj.images)
                  perfectEventSection.perfectEvent.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "ihcl.core.group.carousel-with-back-ground-image") {
            timelessWeddings.sectionTitle = item?.title
            timelessWeddings.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card) => {
                let cardObj = {
                  _key: '',
                  basicInfo: {
                    title: "",
                    description: "",
                    media: [],
                  },
                  backgroundImage: {
                    largeImage: []
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
                if (card?._type == 'card') {
                  cardObj._key = card?._key
                  cardObj.basicInfo.title = card?.title
                  cardObj.basicInfo.description = card?.description

                  images.push({_key: `${index}`, ...card?.image})
                  largeImages.push({_key: `${index}`, ...card?.largeImage})
                  mediaObj.imageAsset.image = images
                  mediaObj.imageAsset.largeImage = largeImages
                  cardObj.basicInfo.media.push({_key: `${index}`, ...mediaObj})

                  cardObj.backgroundImage.largeImage.push({_key: `${index}`, ...card?.backgroundImage})
                  // console.log("cardObj.images", cardObj.images)
                  timelessWeddings.weddingEvents.push(cardObj)
                }
              })
            }
          }
        })

        let newVenues = {
          _type: "venues",
          title: title,
          // sectionTitle: sectionTitle,
          // description: description,
          bannerImage: bannerArr,
          eventVenues: venuesAndOccasions,
          perfectEventSection: perfectEventSection,
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
