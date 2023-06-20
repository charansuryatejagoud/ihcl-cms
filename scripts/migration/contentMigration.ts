import sanityClient from "@sanity/client";
import fetch from "node-fetch";

/*
 Steps to run this script:
 1. Open cmd.
 2. Check out to scripts\gift-cards in cmd.
 3. Run sanity exec giftCards.ts
*/

// run(); 

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

  const response = await fetch("http://20.219.150.172:8085/hudini/getHotelAvailabilityWithRates", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json;charset=UTF-8",
      USERNAME: username,
      PASSWORD: password,
    }),
    body: JSON.stringify({
    hotelId: "60e4bedc-9bdf-43b3-8f8e-5e1363f0a146",
    childCount: 2,
    adultCount: 1,
    roomCount: 1,
    rateCodes: "TO5",
    startDate: "2023-04-29",
    endDate: "2023-04-30"
}),
  });
  const res = await response.json();
  const hotelId = res?.RoomAvailability?.Hotel?.Id
  res?.RoomAvailability?.RommTypes?.map(async (roomType) => {
    const { Products } = roomType;
    let newRoomType = {
      _type: "hotel",
      hoteId: hotelId,
      roomCode: Products?.Room?.Code,
      rateCode: Products?.Rate?.Code
    };

    await client
      .fetch(
        `*[_type == "hotel" && hotelId == "${hotelId}"]{
        ...
       }[0]`,
      )
      .then((data) => {
        if (data === null) {
          //Creating a new document
          client
            .create(newRoomType)
            .then((res) => {
              console.log(`Rooms, document ID is ${res._id}`);
            })
            .catch((err) => console.log("Failed to create new document ", err));
        } else {
          //updating the existing document
          console.log("roomType ", hotelId, data);
          client
            .patch(`${data._id}`)
            .set({
                hoteId: hotelId,
                roomCode: Products?.Room?.Code,
                rateCode: Products?.Rate?.Code
            })
            .commit()
            .then((updatedData) => {
              console.log("updated successfully");
              console.log("updated data ", updatedData);
            })
            .catch((err) => {
              console.log("failed to update");
              console.log("err ", err);
            });
        }
      })
      .catch((err) => console.log(err));
  });
  console.log("End");
}
