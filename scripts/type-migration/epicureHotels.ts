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
  let epicureData;
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let storeData;

  let hotelsList = []

  await client
    .fetch(`*[_type == "hotel" && identifier != null
    && (brandName match "Taj" 
        || brandName match "Seleqtions" 
        || brandName match "Vivanta")
   ] {
         _id,
         hotelName
        }`)
    .then((response) => {
      // console.log(response)
      hotelsList = response;
    })
    .catch((error) => {
      console.log("error", error);
    });

  await client
    .fetch(`*[_type == "epicure"][0]{...}`)
    .then((response) => {
      epicureData = response
    })
    .catch((error) => {
      console.log("error", error);
    });
 let applicableBenefits = []
  const cards = hotelsList?.map((item) => {
    let card = {
        _key:nanoid(),
        _type:"rowData",
        applicableVouchers:{
            bestAvailableRate20:true,
            celebrationCake:true,
            mealForTwo:true,
            oneHourSpaTreatment:true,
            oneNightStay:true,
            bestAvailableRateTajPalaces20:false,
            bestAvailableRateTajSafaris20:false
        },
        membershipBenefit:{
            discountsOnFoodAndBeverage:true,
            discountsOnSpa:true,
        },
        participatingHotel:{
            _ref: item?._id,
            _type:"reference",
        },
        partipatingHotelName: item?.hotelName
    }
    applicableBenefits.push(card)
  });
  epicureData.tabularData = []
  epicureData?.tabularData?.push(...applicableBenefits)
  console.log(epicureData?.tabularData.length)
  client
    .createOrReplace(epicureData)
    .then((res) => {
      console.log(res?.path + " Updated!");
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        epicureData.title,
        "Error : ",
        err.message,
      );
    });
}
