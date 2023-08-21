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
      `*[_type == "page" && path == "/hotels/taj-deccan/wellness"]{
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
        // let sectionTitle = {}
        // let description = ''
        let wellnessFacilities = {
          sectionTitle: {},
          description: '',
          wellnessFacilities: []
        }
        let spaDetails = {
          sectionTitle: {},
          description: '',
          basicInfo: {}
        }
        let signatureTreatments = {
          sectionTitle: {},
          description: '',
          signatureTreatmentDetails: []
        }
        let indianTherapies = {
          sectionTitle: {},
          description: '',
          signatureTreatmentDetails: []
        }
        let indianAromaTherapies = {
          sectionTitle: {},
          description: '',
          signatureTreatmentDetails: []
        }
        let spaIndulgences = {
          sectionTitle: {},
          description: '',
          signatureTreatmentDetails: []
        }
        let bodyScrubsAndWraps = {
          sectionTitle: {},
          description: '',
          signatureTreatmentDetails: []
        }
        let yogaAndMeditation = {
          sectionTitle: {},
          description: '',
          signatureTreatmentDetails: []
        }
        let ayurvedaTherapies = {
          sectionTitle: {},
          description: '',
          signatureTreatmentDetails: []
        }
        let beauty = {
          sectionTitle: {},
          description: '',
          signatureTreatmentDetails: []
        }
        let dividerImage = []

        data?.items?.map((item, index) => {
          if (item?._type == "banner") {
            title = item?.title?.desktopTitle.toString()
            bannerMediaObj.imageAsset.image = item?.imageAsset?.image
            bannerMediaObj.imageAsset.largeImage = item?.imageAsset?.largeImage
            bannerArr.push({_key: `${index}`, ...bannerMediaObj})
          }
          else if (index < 5 && item?._type == "group" && item?.largeVariant == "details.group.group-with-card-left-media-right-content-aspect-ratio-2:4") {
            spaDetails.sectionTitle = item?.title
            spaDetails.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card) => {
                let cardObj = {
                  _key: '',
                  // _type: 'spaInfo',
                  basicInfo : {
                    _type:'basicDetails',
                    title: "",
                    description: "",
                    media: [],
                    specifications: []
                  },
                  // highlights: []
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

                  // cardObj.highlights.push(card?.highLights)

                  // console.log("cardObj.images", cardObj.images)
                  spaDetails.basicInfo = cardObj.basicInfo
                }
              })
            }
          }
          else if (index < 6 && item?._type == "group" && item?.largeVariant == "details.group.3-card-carousel"
          && item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("signature")) {
            signatureTreatments.sectionTitle = item?.title
            signatureTreatments.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  signatureTreatments.signatureTreatmentDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "details.group.3-card-carousel"
          && (!item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("aroma")) && 
          (item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("indian"))) {
            indianTherapies.sectionTitle = item?.title
            indianTherapies.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  indianTherapies.signatureTreatmentDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && (item?.largeVariant == "ihcl.core.group.group-with-3-column-cards-grid"
          || item?.largeVariant == "details.group.3-card-carousel")
          && (item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("aroma"))) {
            indianAromaTherapies.sectionTitle = item?.title
            indianAromaTherapies.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  indianAromaTherapies.signatureTreatmentDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "details.group.3-card-carousel"
          && (!item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("offers"))
          && (item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("spa"))) {
            spaIndulgences.sectionTitle = item?.title
            spaIndulgences.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  spaIndulgences.signatureTreatmentDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && (item?.largeVariant == "ihcl.core.group.group-with-3-column-cards-grid"
          || item?.largeVariant == "details.group.3-card-carousel")
          && (item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("body"))) {
            bodyScrubsAndWraps.sectionTitle = item?.title
            bodyScrubsAndWraps.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  bodyScrubsAndWraps.signatureTreatmentDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "details.group.3-card-carousel"
          && (item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("yoga"))) {
            yogaAndMeditation.sectionTitle = item?.title
            yogaAndMeditation.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  yogaAndMeditation.signatureTreatmentDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "details.group.3-card-carousel"
          && (item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("ayurveda"))) {
            ayurvedaTherapies.sectionTitle = item?.title
            ayurvedaTherapies.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  ayurvedaTherapies.signatureTreatmentDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "group" && item?.largeVariant == "details.group.3-card-carousel"
          && (item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("beauty"))) {
            beauty.sectionTitle = item?.title
            beauty.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  beauty.signatureTreatmentDetails.push(cardObj)
                }
              })
            }
          }
          else if (item?._type == "card" && item?.largeVariant == "ihcl.core.card.image-or-video-with-full-width") {
            // wellnessFacilities.sectionTitle = item?.title
            // wellnessFacilities.description = item?.subTitle
            // if (item?.items) {
            //   item?.items?.map((card, index) => {
                // let cardObj = {
                //   _key: '',
                //   _type: 'object',
                //   basicInfo: {
                //     title: "",
                //     description: "",
                //     media: [],
                //   }
                // }
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
                if (item?._type == 'card') {
                  // cardObj._key = item?._key
                  images.push({_key: `${index}`, ...item?.image})
                  largeImages.push({_key: `${index}`, ...item?.largeImage})
                  mediaObj.imageAsset.image = images
                  mediaObj.imageAsset.largeImage = largeImages
                  dividerImage.push({_key: `${item?._key}`, ...mediaObj})
                  // console.log("cardObj.images", cardObj.images)
                  // dividerImage.push(cardObj)
                }
            //   })
            // }
          }
          else if (item?._type == "group" && (item?.largeVariant == "details.group.group-with-card-right-media-left-content-aspect-ratio-2:4"
          || item?.largeVariant == "details.group.3-card-carousel")
          && (item?.title?.desktopTitle?.[0]?.toLowerCase()?.includes("wellness"))) {
            wellnessFacilities.sectionTitle = item?.title
            wellnessFacilities.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: '',
                  _type: 'object',
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
                  wellnessFacilities.wellnessFacilities.push(cardObj)
                }
              })
            }
          }
        })

        let newWellness = {
          _type: "wellness",
          title: title,
          // sectionTitle: sectionTitle,
          // description: description,
          bannerImage: bannerArr,
          signatureTreatments: signatureTreatments,
          indianTherapies: indianTherapies,
          indianAromaTherapies: indianAromaTherapies,
          spaIndulgences: spaIndulgences,
          bodyScrubsAndWraps: bodyScrubsAndWraps,
          yogaAndMeditation: yogaAndMeditation,
          ayurvedaTherapies: ayurvedaTherapies,
          beauty: beauty,
          wellnessDetails: wellnessFacilities,
          spaDetails: spaDetails,
          dividerImage: dividerImage
        }
        client
          .create(newWellness)
          .then((newWellness) => {
            console.log("Created new Wellness ", newWellness?.title);
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
