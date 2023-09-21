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
      item?.largeVariant === "details.group.group-with-2-column-cards-grid"
    ) {
    //   console.log("res", item);
      let count = 0;
      let pageCard = item?.items[0];
      //console.log(pageCard)
      hotelsList?.map((hotelCard) => {
  //console.log(nanoid())
        let address = hotelCard?.hotelAddress?.addressLine1 +','+ hotelCard?.hotelAddress?.city +','+  hotelCard?.hotelAddress?.state
        +'-'+ hotelCard?.hotelAddress?.pincode
        let code = "<head>\r\n  <style>\r\n    @media (max-width: 1920px) {\r\n      p {\r\n        margin-block-start: 0px;\r\n        margin-block-end: 0px;\r\n      }\r\n\r\n      .main-div {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap:0.703vw;\r\n        /* align-items: center; */\r\n      }\r\n\r\n      .address-div {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 0.7031vw !important;\r\n      }\r\n\r\n      .hotel-information {\r\n        display: flex;\r\n        gap: 2.0833vw !important;\r\n        align-items: center;\r\n        /* margin-top: 13.5px; */\r\n      }\r\n\r\n      .phone-number-field {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 0.625vw !important;\r\n      }\r\n\r\n      .address-styles {\r\n        font-family: Helvetica;\r\n        font-size: 0.9375vw !important;\r\n        font-style: normal;\r\n        font-weight: 300;\r\n        line-height: 140%;\r\n        color: #45443f;\r\n      }\r\n\r\n      .phone-number-styles {\r\n        font-family: Helvetica;\r\n        font-size: 0.9375vw !important;\r\n        font-style: normal;\r\n        font-weight: 300;\r\n        line-height: 140%;\r\n        color: #45443f;\r\n      }\r\n\r\n      .email-filed-styles {\r\n        color: #ad8b3a;\r\n\r\n        font-family: Helvetica;\r\n        font-size: 0.9375vw !important;\r\n        font-style: normal;\r\n        font-weight: 300;\r\n        line-height: 140%;\r\n      }\r\n      .location-icon {\r\n        width: 0.724vw;\r\n        height: 1.0417vw;\r\n      }\r\n      .phone-icon {\r\n        width: 0.9896vw;\r\n        height: 0.9896vw;\r\n      }\r\n      .email-icon {\r\n        width: 0.8854vw;\r\n        height: 0.6927vw;\r\n      }\r\n    }\r\n\r\n    @media (max-width: 640px) {\r\n      .address-main-div {\r\n        max-width: 69vw !important;\r\n        overflow: hidden !important;\r\n        \r\n      }\r\n      .main-div{\r\n        gap:2.109vw;\r\n      }\r\n\r\n      .address-styles {\r\n        white-space: nowrap !important;\r\n        overflow: hidden !important;\r\n        text-overflow: ellipsis !important;\r\n      }\r\n\r\n      .email-filed-styles {\r\n        max-width: 31vw;\r\n        white-space: nowrap !important;\r\n        overflow: hidden !important;\r\n        text-overflow: ellipsis !important;\r\n      }\r\n      .address-div {\r\n        gap: 1.9531vw !important;\r\n      }\r\n      .hotel-information {\r\n        gap: 6.25 !important;\r\n      } \r\n      .address-styles {\r\n        font-size: 2.8125vw !important;\r\n      }\r\n      .phone-number-styles {\r\n        font-size: 2.8125vw !important;\r\n      }\r\n      .email-filed-styles {\r\n        font-size: 2.8125vw !important;\r\n      }\r\n      .location-icon {\r\n        width: 2.1719vw;\r\n        height: 3.1250vw;\r\n      }\r\n      .phone-icon {\r\n        width: 2.9688vw;\r\n        height: 2.9688vw;\r\n      }\r\n      .email-icon {\r\n        width: 2.6563vw;\r\n        height: 2.0781vw;\r\n      }\r\n    }\r\n  </style>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"main-div\">\r\n    <div class=\"address-div\">\r\n      <img\r\n      class=\"location-icon\"\r\n       \r\n        src=\"https://cdn.sanity.io/images/ocl5w36p/production/e417be521de93d569bf75b60e1b76ff2c48cabbd-14x21.png\"\r\n        alt=\"\" />\r\n      <div class=\"address-main-div\">\r\n        <p class=\"address-styles\">\r\n         "+ address +"\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"hotel-information\">\r\n      <div class=\"phone-number-field\">\r\n        <img\r\n        class=\"phone-icon\"\r\n     \r\n          src=\"https://cdn.sanity.io/images/ocl5w36p/production/458a236e8838a9d09a0fc4725e34cd0b272f656d-19x19.png\"\r\n          alt=\"\" />\r\n        <p class=\"phone-number-styles\">"+ hotelCard?.contact?.phone +"</p>\r\n      </div>\r\n\r\n      <div class=\"phone-number-field\">\r\n        <img\r\n        class=\"email-icon\"\r\n          \r\n          src=\"https://cdn.sanity.io/images/ocl5w36p/production/42dc03ca57de5cbdf4087aade080eb3364d12bef-16x13.png\"\r\n          alt=\"\" />\r\n        <p class=\"email-filed-styles\">"+hotelCard?.contact.email+"</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n"
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
