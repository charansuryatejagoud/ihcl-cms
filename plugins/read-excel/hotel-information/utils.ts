import { customAlphabet } from "nanoid";
import { BulletPointsType, FacilityInfoType } from "../types";
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
} from "../constants";

export const generateFacilityInfo = (props: FacilityInfoType) => {
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
};

const generateBulletPoints = (props: BulletPointsType) => {
  // debugger
  const bulletPoints = props?.data?.map((item) => {
    return {
      _type: TYPE_BULLET_POINTS,
      _key: props?._key,
      item: item.trim(),
      //   item: data.trim().replace("\r\n", "")
    };
  });
  return bulletPoints?.length > 0 ? bulletPoints : [];
};

export const createOrReplaceDoc = (hotelData, type) => {
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
};
