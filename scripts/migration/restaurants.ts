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
      `*[_type == "page" && path == "/hotels/taj-mahal-lucknow/dining/alfresco"]{
          items
         }[0]`,
    )
    .then((data) => {
      if (data === null) {
        //Skipping
        console.log("No doc found");
      } else {
        // console.log(data)
        let title = "";
        let bannerTitle = {};
        let bannerSubTitle = '';
        let bannerContent = {};
        let bannerMediaObj = {
          _type:'mediaInput',
          mediaType: "image",
          imageAsset: {
            largeImage: [],
            image: [],
          },
        };
        let bannerArr = [];
        let restaurantInfo = {
          _type:'restaurantDetails',
          sectionTitle: {},
          description: "",
          basicInfo: {},
        };
        let restaurantAvailability = [];

        let privateDining = {};
        let locationBasedRestaurants = {
          _type:'restaurantDetails',
          sectionTitle: {},
          description: "",
          basicInfo: {},
        };

        data?.items?.map((item, index) => {
          if (item?._type == "banner") {
            title = item?.title?.desktopTitle.toString() + ' - ' + item?.subTitle;
            bannerTitle = item?.title;
            bannerSubTitle = item?.subTitle;
            bannerContent = item?.singleContent;
            bannerMediaObj.imageAsset.image = item?.imageAsset?.image;
            bannerMediaObj.imageAsset.largeImage = item?.imageAsset?.largeImage;
            bannerArr.push({ _key: `${index}`, ...bannerMediaObj });
          } else if (
            index < 5 &&
            item?._type == "group" &&
            item?.largeVariant ==
              "details.group.group-with-card-left-media-right-content-aspect-ratio-2:4"
          ) {
            restaurantInfo.sectionTitle = item?.title,
            restaurantInfo.description = item?.subTitle
            if (item?.items) {
              item?.items?.map((card) => {
                let cardObj = {
                  _key: "",
                  basicInfo: {
                    _type: "basicDetails",
                    title: "",
                    description: "",
                    media: [],
                    specifications: [],
                  },
                };
                let mediaObj = {
                  _key: `${index}`,
                  _type: "mediaInput",
                  mediaType: "image",
                  imageAsset: {
                    largeImage: [],
                    image: [],
                  },
                };
                let images = [];
                let largeImages = [];
                if (card?._type == "card") {
                  cardObj._key = card?._key;
                  cardObj.basicInfo.title = card?.title;
                  cardObj.basicInfo.description = card?.description;
                  images.push({ _key: `${index}`, ...card?.image });
                  largeImages.push({ _key: `${index}`, ...card?.largeImage });
                  mediaObj.imageAsset.image = images;
                  mediaObj.imageAsset.largeImage = largeImages;
                  cardObj.basicInfo.media.push({
                    _key: `${index}`,
                    ...mediaObj,
                  });
                  restaurantInfo.basicInfo = cardObj.basicInfo;
                }
              });
            }
          } else if (
            index < 6 &&
            item?._type == "group" &&
            item?.largeVariant == "details.group.hotel-dine-in-details"
          ) {
            if (item?.items) {
              item?.items?.map((richText, index) => {
                let facilityInfoObj = {
                  _key: "",
                  _type: "facilityInfo",
                  title: "",
                  icon: "",
                  list: [],
                };
                if (richText?._type == "richText") {
                  let listObj = {
                    _key: `${index}`,
                    _type: "object",
                    mobileIcon: {},
                    item: "",
                  };
                  facilityInfoObj._key = richText?._key;
                  facilityInfoObj.title = richText?.title;
                  richText?.menuItems?.[0]?.blockContent?.map((item, index) => {
                    if (item._type == "image") {
                      facilityInfoObj.icon = item;
                    } else if (index > 1 && item._type == "block") {
                      listObj.item = item?.children?.[0]?.text;
                    }
                  });
                  facilityInfoObj.list.push(listObj);
                  restaurantAvailability.push(facilityInfoObj);
                }
              });
            }
          } else if (
            item?._type == "group" &&
            item?.largeVariant ==
              "details.group.group-with-card-left-media-right-content-aspect-ratio-2:4"
          ) {
            if (item?.items) {
              item?.items?.map((card, index) => {
                let cardObj = {
                  _key: "",
                  _type: "object",
                  diningInfo: {
                    _type: "basicDetails",
                    title: "",
                    description: "",
                    media: [],
                  },
                  contactInfo: {},
                };
                let mediaObj = {
                  _key: `${index}`,
                  _type: "mediaInput",
                  mediaType: "image",
                  imageAsset: {
                    largeImage: [],
                    image: [],
                  },
                };
                let images = [];
                let largeImages = [];
                if (card?._type == "card") {
                  cardObj._key = card?._key;
                  cardObj.diningInfo.title = card?.title;
                  cardObj.diningInfo.description = card?.description;
                  images.push({ _key: `${index}`, ...card?.image });
                  largeImages.push({ _key: `${index}`, ...card?.largeImage });
                  mediaObj.imageAsset.image = images;
                  mediaObj.imageAsset.largeImage = largeImages;
                  cardObj.diningInfo.media.push({
                    _key: `${index}`,
                    ...mediaObj,
                  });
                  cardObj.contactInfo = card?.content?.[0]?.content;
                  privateDining = cardObj;
                }
              });
            }
          } else if (
            item?._type == "group" &&
            item?.largeVariant ==
              "ihcl.core.group.highlighted-2-card-carousel"
          ) {
            locationBasedRestaurants.sectionTitle = item?.title
            locationBasedRestaurants.description = item?.subTitle
          }
        });

        let newWellness = {
          _type: "restaurants",
          title: title,
          bannerTitle: bannerTitle,
          bannerImage: bannerArr,
          hotelDetailDiningPage: {
            bannerSubTitle:bannerSubTitle,
            bannerDiningInfo: bannerContent,
            privateDiningInfo: privateDining,
            restaurantAvailability: restaurantAvailability,
            restaurantInfo: restaurantInfo,
            locationBasedRestaurants: locationBasedRestaurants
          }
        };
        client
          .create(newWellness)
          .then((newWellness) => {
            console.log("Created new Restaurant ", newWellness?.title);
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
