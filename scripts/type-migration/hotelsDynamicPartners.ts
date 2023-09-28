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
    .fetch(`*[_type == "hotel" && "clubVistara" in programs && brandName match "Vivanta"
  ] {
         hotelName,
       identifier,
       hotelId,
       "thumbnail":hotelOverview->basicInfo.media[0].imageAsset,
       "description":hotelOverview->basicInfo.description,
       "hotelType": searchTaxonomies->hotelType,
         "contact":hotelContact->{"email":email[0].email,"phone":phone[0].mobile},
        hotelAddress->
     
       }`)
    .then((response) => {
      // console.log(response)
      hotelsList = response;
    })
    .catch((error) => {
      console.log("error", error);
    });

  await client
    .fetch(`*[_type == "page" && path == "/partners-and-alliances/airlines/singapore-airlines"][0]{...}`)
    // .fetch(`*[_type == "page" && path == "/partners-and-alliances/airlines/club-vistara"][0]{...}`)
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
      item?.largeVariant === "ihcl.core.group.group-with-3-column-cards-grid"
    ) {
      let pageCard = item?.items[0];
      hotelsList?.map((hotelCard) => {
        let hotelCardURL = "https://www.vivantahotels.com/en-in/" + hotelCard?.identifier
        let identifierURL = "/hotels/" + hotelCard?.identifier
        let finalFilter = []
        let filterObj = {
          _key : nanoid(),
          term: ''
        }
        filterObj.term = hotelCard?.hotelType
        finalFilter.push(filterObj)
        let newCard = {
          _type: "card",
          _key : nanoid(),
          title: hotelCard?.hotelName,
          description: hotelCard?.description,
          primaryAction: {
            url: hotelCardURL,
            ...pageCard.primaryAction
          },
          largeImage:{_type:"image",asset:hotelCard?.thumbnail?.largeImage?.[0]?.asset},
          image:{_type:"image",asset:hotelCard?.thumbnail?.image?.[0]?.asset},
          urlType: 'internal',
          url:identifierURL,
          largeVariant:"ihcl.core.card.card-with-focused-title",
          variant:"ihcl.core.card.card-with-focused-title",
          alignmentVariant:"preceding-hyphen-title",
          ctaLabel:"MORE",
          isMultiBlockContent: false,
          charactersLimit:100,
          filterTerm:finalFilter
        };
        newArrayCard.push(newCard);
      });
      storeData = item;
      // storeData.items = [];
      console.log("stored",storeData.items.length)
      storeData.items = [...storeData.items,...newArrayCard];
      console.log("stored",storeData.items.length)
      finalDocument.push(storeData);
    } else {
      finalDocument.push(item);
    }
  });

  pageItems = finalDocument;
  pageResponse.items = pageItems;

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
