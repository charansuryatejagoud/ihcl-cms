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
    .fetch(`*[_type == "hotel" && isNewOpening == true && brandName match "Taj"] {

        hotelName,
      identifier,
      hotelId,
      "thumbnail":hotelOverview->basicInfo.media[0].imageAsset,
      "description":hotelOverview->basicInfo.description,
      
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
    .fetch(`*[_type == "page" && path == "/about-us"][0]{...}`)
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
        let address = hotelCard?.hotelAddress?.addressLine1 +','+ hotelCard?.hotelAddress?.city +','+  hotelCard?.hotelAddress?.state
        +'-'+ hotelCard?.hotelAddress?.pincode
        let code = "<head> <style> @media (max-width: 1920px) { p { margin-block-start: 0px; margin-block-end: 0px; } .main-div { display: flex; flex-direction: column; gap:0.703vw; /* align-items: center; */ } .address-div { display: flex; align-items: center; gap: 0.7031vw !important; } .hotel-information { display: flex; gap: 2.0833vw !important; align-items: center; /* margin-top: 13.5px; */ } .phone-number-field { display: flex; align-items: center; gap: 0.625vw !important; } .address-styles { font-family: Helvetica; font-size: 0.9375vw !important; font-style: normal; font-weight: 300; line-height: 140%; color: #45443f; } .phone-number-styles { font-family: Helvetica; font-size: 0.9375vw !important; font-style: normal; font-weight: 300; line-height: 140%; color: #45443f; } .email-filed-styles { color: #ad8b3a; font-family: Helvetica; font-size: 0.9375vw !important; font-style: normal; font-weight: 300; line-height: 140%; } .location-icon { width: 0.724vw; height: 1.0417vw; } .phone-icon { width: 0.9896vw; height: 0.9896vw; } .email-icon { width: 0.8854vw; height: 0.6927vw; } } @media (max-width: 640px) { .address-main-div { max-width: 69vw !important; overflow: hidden !important; } .main-div{ gap:2.109vw; } .address-styles { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; } .email-filed-styles { max-width: 31vw; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; } .address-div { gap: 1.9531vw !important; } .hotel-information { gap: 6.25 !important; } .address-styles { font-size: 2.8125vw !important; } .phone-number-styles { font-size: 2.8125vw !important; } .email-filed-styles { font-size: 2.8125vw !important; } .location-icon { width: 2.1719vw; height: 3.1250vw; } .phone-icon { width: 2.9688vw; height: 2.9688vw; } .email-icon { width: 2.6563vw; height: 2.0781vw; } } </style> </head> <body> <div class=\"main-div\"> <div class=\"hotel-information\"> <div class=\"phone-number-field\"> <img class=\"phone-icon\" src=\"https://cdn.sanity.io/images/ocl5w36p/production/458a236e8838a9d09a0fc4725e34cd0b272f656d-19x19.png\" alt=\"\" /> <p class=\"phone-number-styles\">"+ hotelCard?.contact?.phone +"</p> </div> <div class=\"phone-number-field\"> <img class=\"email-icon\" src=\"https://cdn.sanity.io/images/ocl5w36p/production/42dc03ca57de5cbdf4087aade080eb3364d12bef-16x13.png\" alt=\"\" /> <p class=\"email-filed-styles\">"+hotelCard?.contact.email+"</p> </div> </div> <div class=\"address-div\"> <img class=\"location-icon\" src=\"https://cdn.sanity.io/images/ocl5w36p/production/e417be521de93d569bf75b60e1b76ff2c48cabbd-14x21.png\" alt=\"\" /> <div class=\"address-main-div\"> <p class=\"address-styles\"> "+ address +" </p> </div> </div> </div> </body>"
        let contentArray = []
        let contentObj = {...pageCard?.content?.[0]?.content?.[1], _key : nanoid()}
        contentObj.code = code
        contentArray = [pageCard?.content?.[0]?.content?.[0],contentObj,pageCard?.content?.[0]?.content?.[2]]
        let contentMain = {content:[], _key : nanoid(),...pageCard?.content?.[0]}
        contentMain.content = contentArray
        let hotelCardURL = "/bookings/landing-page?hotelId=" + hotelCard?.hotelId
        let identifierURL = "/hotels/" + hotelCard?.identifier
        let newCard = {
          _type: "card",
          _key : nanoid(),
          title: hotelCard?.hotelName,
          description: hotelCard?.description,
          primaryAction: {
            url: hotelCardURL,
            ...pageCard.primaryAction
          },
          largeImage:{_type:"image",asset:hotelCard?.thumbnail.largeImage[0].asset},
          image:{_type:"image",asset:hotelCard?.thumbnail.image[0].asset},
          urlType: 'internal',
          url:identifierURL,
          content:[contentMain],
          largeVariant:"details.card.contact-details-with-single-cta",
          variant:"details.card.contact-details-with-single-cta",
          ctaLabel:"MORE",
          isMultiBlockContent: true,
          charactersLimit:100,
        };
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
