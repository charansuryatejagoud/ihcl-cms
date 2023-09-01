import { client } from "./client";
import { customAlphabet } from "nanoid";
import { BulletPointsType, FacilityInfoType } from "./types";
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
} from "./constants";

async function Update({ id, data }) {
  try {
    const updateRes = await client.patch(id).set(data).commit();
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
};
