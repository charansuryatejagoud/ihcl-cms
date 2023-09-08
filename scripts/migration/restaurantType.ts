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
      `*[_type == "rooms"
      && _id == "JHBctTLkFjmsOG75Hb8rFM"
        ]
      {
        ...
      }[0]`,
    )
    .then((data) => {
      if (data === null) {
        //Skipping
        console.log("No doc found")
      } else {
        // console.log(data)
        let roomsDetails = []
        data.roomsList.map((item)=>{
          let roomData={
            _type: "roomInfo",
            _key: "",
            basicInfo: {}
          }
          roomData._key = item._key
          roomData.basicInfo = item.basicInfo
          roomsDetails.push(roomData)
        })

        let newRooms = {
          _type: "restaurants",
          title: data.title,
          bannerTitle: data.bannerTitle,
          bannerImage: data.bannerArr,
          hotelDetailDiningPage: {
            bannerSubTitle:data.hotelDetailDiningPage.bannerSubTitle,
            bannerDiningInfo: data.hotelDetailDiningPage.bannerContent,
            privateDiningInfo: data.hotelDetailDiningPage.privateDining,
            restaurantAvailability: data.hotelDetailDiningPage.restaurantAvailability,
            restaurantInfo: data.hotelDetailDiningPage.restaurantInfo,
            locationBasedRestaurants: data.hotelDetailDiningPage.locationBasedRestaurants
          }
        }
        client
          .create(newRooms)
          .then((newRooms) => {
            console.log("Created new Rooms ", newRooms?.title);
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
