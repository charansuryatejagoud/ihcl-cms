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
    .fetch(`*[_type == "hotel" && isNewOpening == true && brandName != "Taj"] {

        hotelName,
        brandName,
      identifier,
      "thumbnail":hotelOverview->basicInfo.media[0].imageAsset,
      "description":hotelOverview->basicInfo.description,
      }`)
    .then((response) => {
      // console.log(response)
      hotelsList = response;
    })
    .catch((error) => {
      console.log("error", error);
    });

  await client
    .fetch(`*[_type == "page" && path == "/taj-happenings"][0]{...}`)
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
      item?.largeVariant === "ihcl.core.group.highlighted-2-card-carousel"
    ) {
    //   console.log("res", item);
      let count = 0;
      let pageCard = item?.items[0];
      //console.log(pageCard)
      hotelsList?.map((hotelCard) => {
  //console.log(nanoid())
        let hotelCardURL = hotelCard?.brandName == "Vivanta" 
        ? "https://www.vivantahotels.com/en-in/" + hotelCard?.identifier + '/rooms-and-suites'
        : "https://www.seleqtionshotels.com/en-in/" + hotelCard?.identifier + '/rooms-and-suites'
        let newCard = {
          _type: "card",
          _key : nanoid(),
          title: hotelCard?.hotelName,
          description: hotelCard?.description,
          primaryAction: {
            ...pageCard.primaryAction,
            url: hotelCardURL,
            type: "externalApplication",
          },
          largeImage:{_type:"image",asset:hotelCard?.thumbnail.largeImage[0].asset},
          image:{_type:"image",asset:hotelCard?.thumbnail.image[0].asset},
          urlType: '',
          url:'',
          // content:[contentMain],
          largeVariant:"details.card.contact-details-with-single-cta",
          variant:"ihcl.core.card.card-with-focused-title",
          ctaLabel:"MORE",
          isMultiBlockContent: false,
          charactersLimit:100,
        };
        // console.log(newCard.primaryAction)
        newArrayCard.push(newCard);
        count++;
      });
      storeData = item;
      storeData.items = [];
      console.log("scfewvw",storeData.items)
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
