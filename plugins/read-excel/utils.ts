import { client } from "./client";
import { customAlphabet } from "nanoid";
import { BulletPointsType, FacilityInfoType, ContentSpecificationType } from "./types";
import {
  CHECK_IN_CHECK_OUT,
  CONTACT,
  DEV_CHECK_IN_CHECK_OUT_IMAGE,
  DEV_CONTACT_IMAGE,
  DEV_DINING_IMAGE,
  DEV_E_MAIL_IMAGE,
  DEV_QUERIES_IMAGE,
  DEV_ROOMS_SUITES_IMAGE,
  DEV_TEMPERATURE_IMAGE,
  DEV_WELLNESS_IMAGE,
  DINING,
  E_MAIL,
  HOTEL_ESSENTIALS,
  PHONE,
  PROD_CHECK_IN_CHECK_OUT_IMAGE,
  PROD_CONTACT_IMAGE,
  PROD_DINING_IMAGE,
  PROD_E_MAIL_IMAGE,
  PROD_QUERIES_IMAGE,
  PROD_ROOMS_SUITES_IMAGE,
  PROD_TEMPERATURE_IMAGE,
  PROD_WELLNESS_IMAGE,
  ROOMS_SUITES,
  TEMPERATURE,
  TYPE_AVAILABILITY,
  TYPE_BULLET_POINTS,
  TYPE_FACILITY_INFO,
  TYPE_IMAGE,
  TYPE_REFERENCE,
  WELLNESS,
  availabilitySectionTitle,
  facilitiesSectionTitle,
  TYPE_FACILITIES,
  ACTIVITIES,
  HOTEL,
  J_WELLNESS_CIRCLE,
  ROOMS,
  TYPE_CONTENT_SPECIFICATION,
  CITY_TOURS,
  POLO_MATCHES,
  KITE_FLYING,
  WIFI,
  CAR_RENTAL_SERVICES,
  FITNESS_CENTRE,
  OUTDOOR_INDOOR_POOLS,
  JIVA_SPA,
  PROD_CITY_TOUR_IMAGE,
  PROD_POLO_MATCHES_IMAGE,
  PROD_KITE_FLYING_IMAGE,
  PROD_WIFI_IMAGE,
  PROD_CAR_RENTAL_SERVICES_IMAGE,
  PROD_FITNESS_CENTER_IMAGE,
  PROD_OUTDOOR_AND_INDOOR_POOLS_IMAGE,
  PROD_JIVA_SPA_IMAGE, 
  DEV_ACTIVITIES_IMAGE,
  DEV_HOTEL_IMAGE,
  PROD_ACTIVITIES_IMAGE,
  PROD_HOTEL_IMAGE,
  DEV_POLO_MATCHES_IMAGE,
  DEV_KITE_FLYING_IMAGE,
  DEV_WIFI_IMAGE,
  DEV_CAR_RENTAL_SERVICES_IMAGE,
  DEV_FITNESS_CENTER_IMAGE,
  DEV_OUTDOOR_AND_INDOOR_POOLS_IMAGE,
  DEV_JIVA_SPA_IMAGE,
} from "./constants";

async function Update({ id, diningRooms }) {
  try {
    const updateRes = await client.patch(id).set(diningRooms).commit();
    return updateRes;
  } catch (err) {
    console.error(err);
  }
}

async function Create({ doc }) {
  try {
    const createRes = await client.create(doc);
    return createRes;
  } catch (err) {
    console.error(err);
  }
}

async function fetchByType({ title, type }) {
  try {
    const res = await client.fetch(
      `*[_type == "${type}" && title == "${title}"][0]{...}`,
    );

    return res;
  } catch (err) {
    console.error(err);
  }
}

function generateFacilityInfo(props: FacilityInfoType) {
  const data = {
    title: props?.title,
    icon: {
      _type: TYPE_IMAGE,
      asset: {
        _ref: props?._imageRef,
        _type: TYPE_REFERENCE,
      },
    },
    list: props?.list && props.list,
    _type: TYPE_FACILITY_INFO,
    _key: props?._key,
  };
  return data;
}

function generateMobileFacilities({ value, images }: ContentSpecificationType) {
  const nanoid = customAlphabet("1234567890abcdef", 12);
  const data = {
    _key: nanoid(),
    _type: TYPE_CONTENT_SPECIFICATION,
    keyType: "image",
    value: value,
    imageAsset: {
      _type: "imageAsset",
      image: images?.map((image, index) => {
        return {
          _key: nanoid(),
          _type: "image",
          asset: {
            _ref: image,
            _type: "reference"
          }
        }
      })
    },
  }
  return data;
}

function generateBulletPoints(props: BulletPointsType) {
  const bulletPoints = props?.data?.map((item) => {
    return {
      _type: TYPE_BULLET_POINTS,
      _key: props?._key,
      item: item.trim(),
      //   item: data.trim().replace("\r\n", "")
    };
  });
  return bulletPoints?.length > 0 ? bulletPoints : [];
}

function createOrReplaceDoc(hotelData, type) {
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let hotelInfoData = [];
  hotelInfoData.push(
    generateFacilityInfo({
      title: CHECK_IN_CHECK_OUT,
      _imageRef:
        type == "dev"
          ? DEV_CHECK_IN_CHECK_OUT_IMAGE
          : PROD_CHECK_IN_CHECK_OUT_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({
        data: hotelData?.checkInAndCheckOut,
        _key: nanoid(),
      }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: DINING,
      _imageRef: type == "dev" ? DEV_DINING_IMAGE : PROD_DINING_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.dining, _key: nanoid() }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: ROOMS_SUITES,
      _imageRef:
        type == "dev" ? DEV_ROOMS_SUITES_IMAGE : PROD_ROOMS_SUITES_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({
        data: hotelData?.roomsAndSuites,
        _key: nanoid(),
      }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: WELLNESS,
      _imageRef: type == "dev" ? DEV_WELLNESS_IMAGE : PROD_WELLNESS_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.wellness, _key: nanoid() }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: TEMPERATURE,
      _imageRef: type == "dev" ? DEV_TEMPERATURE_IMAGE : PROD_TEMPERATURE_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({
        data: hotelData?.temperature,
        _key: nanoid(),
      }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: HOTEL_ESSENTIALS,
      _key: nanoid(),
      list: generateBulletPoints({
        data: hotelData?.essentials,
        _key: nanoid(),
      }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: E_MAIL,
      _imageRef: type == "dev" ? DEV_E_MAIL_IMAGE : PROD_E_MAIL_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.email, _key: nanoid() }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: CONTACT,
      _imageRef: type == "dev" ? DEV_CONTACT_IMAGE : PROD_CONTACT_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.contact, _key: nanoid() }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: PHONE,
      _imageRef: type == "dev" ? DEV_QUERIES_IMAGE : PROD_QUERIES_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.phone, _key: nanoid() }),
    }),
  );
  return {
    _type: TYPE_AVAILABILITY,
    sectionTitle: { ...availabilitySectionTitle },
    hotelInfo: [...hotelInfoData],
    title: hotelData?.title,
  };
}

function createOrReplaceFacilitiesDoc(hotelData, type) {
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let hotelFacilitiesData = [];
  let mobileFacilitiesData = [];
  hotelFacilitiesData.push(
    generateFacilityInfo({
      title: ACTIVITIES,
      _imageRef:
        type == "dev"
          ? DEV_ACTIVITIES_IMAGE
          : PROD_ACTIVITIES_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({
        data: hotelData?.activities,
        _key: nanoid(),
      }),
    }),
  );
  hotelFacilitiesData.push(
    generateFacilityInfo({
      title: HOTEL,
      _imageRef: type == "dev" ? DEV_HOTEL_IMAGE : PROD_HOTEL_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({
        data: hotelData?.hotel,
        _key: nanoid(),
      }),
    }),
  );
  hotelFacilitiesData.push(
    generateFacilityInfo({
      title: DINING,
      _imageRef: type == "dev" ? DEV_DINING_IMAGE : PROD_DINING_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.dining, _key: nanoid() }),
    }),
  );
  hotelFacilitiesData.push(
    generateFacilityInfo({
      title: J_WELLNESS_CIRCLE,
      _imageRef: type == "dev" ? DEV_WELLNESS_IMAGE : PROD_WELLNESS_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.wellness, _key: nanoid() }),
    }),
  );
  hotelFacilitiesData.push(
    generateFacilityInfo({
      title: ROOMS,
      _imageRef:
        type == "dev" ? DEV_ROOMS_SUITES_IMAGE : PROD_ROOMS_SUITES_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({
        data: hotelData?.rooms, _key: nanoid(),
      }),
    }),
  );
  hotelFacilitiesData.push(
    generateFacilityInfo({
      title: CONTACT,
      _imageRef: type == "dev" ? DEV_CONTACT_IMAGE : PROD_CONTACT_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.location, _key: nanoid() }),
    }),
  );
  mobileFacilitiesData.push(
    generateMobileFacilities({
      value: CITY_TOURS,
      images: [type == "dev" ? PROD_CITY_TOUR_IMAGE : PROD_CITY_TOUR_IMAGE],
    }),
    generateMobileFacilities({
      value: POLO_MATCHES,
      images: [type == "dev" ? DEV_POLO_MATCHES_IMAGE : PROD_POLO_MATCHES_IMAGE],
    }),
    generateMobileFacilities({
      value: KITE_FLYING,
      images: [type == "dev" ? DEV_KITE_FLYING_IMAGE : PROD_KITE_FLYING_IMAGE],
    }),
    generateMobileFacilities({
      value: WIFI,
      images: [type == "dev" ? DEV_WIFI_IMAGE : PROD_WIFI_IMAGE],
    }),
    generateMobileFacilities({
      value: CAR_RENTAL_SERVICES,
      images: [type == "dev" ? DEV_CAR_RENTAL_SERVICES_IMAGE : PROD_CAR_RENTAL_SERVICES_IMAGE],
    }),
    generateMobileFacilities({
      value: FITNESS_CENTRE,
      images: [type == "dev" ? DEV_FITNESS_CENTER_IMAGE : PROD_FITNESS_CENTER_IMAGE],
    }),
    generateMobileFacilities({
      value: OUTDOOR_INDOOR_POOLS,
      images: [type == "dev" ? DEV_OUTDOOR_AND_INDOOR_POOLS_IMAGE : PROD_OUTDOOR_AND_INDOOR_POOLS_IMAGE],
    }),
    generateMobileFacilities({
      value: JIVA_SPA,
      images: [type == "dev" ? DEV_JIVA_SPA_IMAGE : PROD_JIVA_SPA_IMAGE],
    }),
  );
  console.log("mobileFacilitiesData", mobileFacilitiesData)

  return {
    _type: TYPE_FACILITIES,
    sectionTitle: { ...facilitiesSectionTitle },
    facilityDetails: [...hotelFacilitiesData],
    mobileFacilities: [...mobileFacilitiesData],
    title: hotelData?.title,
  };
}


function extractTaxonomyData(data: any) {
  let finalData: any = {};
  data?.title && (finalData.title = data?.title?.trim());
  data?.brandKey && (finalData.brandKey = data?.brandKey);
  data?.ihclHotelKey &&
    (finalData.ihclHotelKey = String(data?.ihclHotelKey)?.trim());
  data?.hotelCode && (finalData.hotelCode = String(data?.hotelCode)?.trim());
  data?.hospitalityTitle &&
    (finalData.hospitalityTitle = data?.hospitalityTitle?.trim());
  data?.propertyCategory &&
    (finalData.propertyCategory = data?.propertyCategory?.trim());
  data?.hotelType && (finalData.hotelType = data?.hotelType?.trim());
  data?.holidayExperience &&
    (finalData.holidayExperience = data?.holidayExperience?.trim());
  data?.holidayTheme && (finalData.holidayTheme = data?.holidayTheme?.trim());
  data?.posTypes && (finalData.posTypes = data?.posTypes?.trim());
  data?.hotelPmsCode && (finalData.hotelPmsCode = data?.hotelPmsCode?.trim());
  data?.orionCode && (finalData.orionCode = data?.orionCode?.trim());
  data?.siebelCode && (finalData.siebelCode = String(data?.siebelCode)?.trim());
  data?.status && (finalData.status = data?.status?.trim());
  data?.legalEntity && (finalData.legalEntity = data?.legalEntity?.trim());
  data?.currency && (finalData.currency = data?.currency?.trim());
  data?.pmsName && (finalData.pmsName = data?.pmsName?.trim());
  data?.nonOrionFlag && (finalData.nonOrionFlag = data?.nonOrionFlag?.trim());
  data?.ticFlag && (finalData.ticFlag = data?.ticFlag?.trim());
  data?.epicureFlag && (finalData.epicureFlag = data?.epicureFlag?.trim());
  data?.updatedDate && (finalData.updatedDate = data?.updatedDate);
  data?.createdDate && (finalData.createdDate = data?.createdDate);
  String(data?.activeInd) && (finalData.activeInd = data?.activeInd);
  data?.synxisHotelId &&
    (finalData.synxisHotelId = String(data?.synxisHotelId)?.trim());
  data?.rating && (finalData.rating = data?.rating);
  data?.aminities && (finalData.aminities = data?.aminities?.trim());
  data?.propertyCategory &&
    (finalData.propertyCategory = data?.propertyCategory);
  data?.shortDescription &&
    (finalData.shortDescription = data?.shortDescription);
  data?.images && (finalData.images = data?.images);
  data?.highlights && (finalData.highlights = data?.highlights?.trim());
  data?.restaurantTypes && (finalData.restaurantTypes = data?.restaurantTypes);
  data?.dressCodes && (finalData.dressCodes = data?.dressCodes);
  data?.cuisines && (finalData.cuisines = data?.cuisines);
  data?.therapies && (finalData.therapies = data?.therapies);
  data?.searchCategory && (finalData.searchCategory = data?.searchCategory);
  data?.hotelFeature && (finalData.hotelFeature = data?.hotelFeature);
  data?.restaurantName && (finalData.restaurantName = data?.restaurantName);
  data?.menuLink && (finalData.menuLink = data?.menuLink);
  data?.timings && (finalData.timings = data?.timings);
  data?.diningPath && (finalData.diningPath = data?.diningPath);
  data?.lunch && (finalData.lunch = data?.lunch);
  data?.dinner && (finalData.dinner = data?.dinner);
  data?.destinationPath && (finalData.destinationPath = data?.destinationPath);
  console.log(finalData);
  return finalData;
}

export {
  Update,
  Create,
  fetchByType,
  createOrReplaceDoc,
  generateFacilityInfo,
  extractTaxonomyData,
  createOrReplaceFacilitiesDoc,
};
