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
      `*[_type == "venues"
      && _id == "yVtK81NbbqTTUsUfKuD60t"
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
        let venueDetails = []
        data.eventVenues.eventVenueDetails.map((item)=>{
          let eventVenue={
            _type:"venueAndOccasionInfo",
            _key: "",
            basicInfo: {}
          }
          eventVenue._key = item._key
          eventVenue.basicInfo = {_type:"basicDetails", ...item.basicInfo}
          venueDetails.push(eventVenue)
        })

        let updateVenues = {
          _type: "venues",
          title: data.title,
          bannerImage: data.bannerImage,
          eventVenues: {...data.eventVenues,_type:"venuesAndOccasions",eventVenueDetails: venueDetails},
          perfectEventSection: data.perfectEventSection,
          timelessWeddings: data.timelessWeddings,
          seoDescription: data.seoDescription,
          pageTitle: data.pageTitle,
          seoKeywords: data.seoKeywords
        }
        client
          .create(updateVenues)
          .then((updateVenues) => {
            console.log("Created new Venues ", updateVenues?.title);
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
