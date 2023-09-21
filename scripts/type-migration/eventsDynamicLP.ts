import sanityClient from "@sanity/client";
import { customAlphabet } from "nanoid";

const newArrayCard = [];
const finalDocument = [];

run();

async function run() {
  const client = sanityClient({
    projectId: "ocl5w36p",
    dataset: "production",
    apiVersion: "v2021-10-21",
    token:
      "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
    useCdn: false,
  });
  console.log("script starts");
  let pageResponse;
  let pageItems;
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let storeData;

  let hotelsList = []

  await client
    .fetch(`*[_type == "hotel" && hotelEventVenues!= null]
    {
      "hotelName":hotelName,
      "identifier":identifier,
      "venues":hotelEventVenues->eventVenues.eventVenueDetails
    }`)
    .then((response) => {
      // console.log(response)
      hotelsList = response;
    })
    .catch((error) => {
      console.log("error", error);
    });

  await client
    .fetch(`*[_type == "page" && path == "/meetings"][0]{...}`)
    .then((response) => {
      // console.log(response)
      pageResponse = response;
      pageItems = response.items;
    })
    .catch((error) => {
      console.log("error", error);
    });

  const cards = pageItems?.map((item) => {
    if (
      item?._type === "group" &&
      item?.variant === "ihcl.core.group.group-with-3-column-cards-grid"
    ) {
    //   console.log("res", item);
      let pageCard = item?.items[0];
      //console.log(pageCard)
      hotelsList?.map((hotelCard) => {
        if(hotelCard?.venues){
        hotelCard?.venues?.map((venueCard)=> {
          let newCard = {
          _type: "card",
          _key : nanoid(),
          subTitle: hotelCard?.hotelName,
          title: venueCard?.basicInfo.title,
          description: venueCard?.basicInfo.description,
          primaryAction: {
            ...pageCard.primaryAction
          },
          largeImage:{_type:"image",asset:venueCard?.basicInfo?.media?.[0]?.imageAsset?.largeImage?.[0].asset},
          image:{_type:"image",asset:venueCard?.basicInfo?.media?.[0]?.imageAsset?.image?.[0].asset},
          urlType: 'internal',
          url:"/hotels/" + hotelCard?.identifier,
          showDividerForTitle: true,
          alignmentVariant: "preceding-hyphen-title",
          largeVariant:"ihcl.core.card.card-with-focused-title",
          variant:"ihcl.core.card.card-with-focused-title",
          ctaLabel:"MORE",
          // isMultiBlockContent: false,
          charactersLimit:200,
        };
        // console.log(newCard.primaryAction)
        newArrayCard.push(newCard);
      })
    }
      });
      storeData = item;
      storeData.items = [];
      // console.log("scfewvw",storeData.items)
      storeData.items = newArrayCard;
      console.log("stored",storeData.items.length)
      finalDocument.push(storeData);
    } else {
      finalDocument.push(item);
    }
  });

  pageItems = finalDocument;
  pageResponse.items = pageItems;

//   console.log("end ", pageResponse.items[4]);
  client
    .createOrReplace(pageResponse)
    .then((res) => {
      console.log(res?.path + " Updated!");
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        pageResponse.path,
        "Error : ",
        err.message,
      );
    });
}
