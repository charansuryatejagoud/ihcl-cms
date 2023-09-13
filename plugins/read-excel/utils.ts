import { client } from "./client";
import { customAlphabet } from "nanoid";
import {
  BulletPointsType,
  FacilityInfoType,
  ContentSpecificationType,
  SplitMediaType,
  SplitStringType,
} from "./types";
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
  DEV_ACTIVITIES_IMAGE,
  DEV_HOTEL_IMAGE,
  PROD_ACTIVITIES_IMAGE,
  PROD_HOTEL_IMAGE,
  TYPE_AVAILABILITY,
  TYPE_BULLET_POINTS,
  TYPE_FACILITY_INFO,
  TYPE_HOTEL,
  TYPE_IMAGE,
  TYPE_REFERENCE,
  TYPE_TITLE,
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
  DEV_POLO_MATCHES_IMAGE,
  DEV_KITE_FLYING_IMAGE,
  DEV_WIFI_IMAGE,
  DEV_CAR_RENTAL_SERVICES_IMAGE,
  DEV_FITNESS_CENTER_IMAGE,
  DEV_OUTDOOR_AND_INDOOR_POOLS_IMAGE,
  DEV_JIVA_SPA_IMAGE,
} from "./constants";

function splitString({ data, character }: SplitStringType) {
  if (data != null && data != "" && character != null && character != "") {
    return data.split(character)?.map((value) => value?.trim());
  }
  return null;
}
function splitMediaInput({ data, character }: SplitMediaType) {
  if (
    data != null &&
    data?.length > 0 &&
    character != null &&
    character != ""
  ) {
    return data?.map((item) => {
      const mediaData = item?.split(character);
      return {
        mediaType: mediaData?.[0],
        largeImage: mediaData?.[1],
        image: mediaData?.[2],
      };
    });
  }
  return null;
}

function isEmptyString(data) {
  if (data != null && data != "" && data != undefined) {
    return true;
  }
  return false;
}

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
    icon: props?._imageRef &&
      props?._imageRef != "" && {
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
            _type: "reference",
          },
        };
      }),
    },
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

function createOrReplaceDoc(hotelData, type, document = null) {
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let hotelInfoData = [];
  hotelInfoData.push(
    generateFacilityInfo({
      title: CHECK_IN_CHECK_OUT,
      _imageRef: document
        ? document?.hotelInfo.filter(
            (info) => info.title == CHECK_IN_CHECK_OUT,
          )?.[0].icon?.asset?._ref
        : type == "dev"
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
      _imageRef: document
        ? document?.hotelInfo.filter((info) => info.title == DINING)?.[0].icon
            ?.asset?._ref
        : type == "dev"
        ? DEV_DINING_IMAGE
        : PROD_DINING_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.dining, _key: nanoid() }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: ROOMS_SUITES,
      _imageRef: document
        ? document?.hotelInfo.filter((info) => info.title == ROOMS_SUITES)?.[0]
            .icon?.asset?._ref
        : type == "dev"
        ? DEV_ROOMS_SUITES_IMAGE
        : PROD_ROOMS_SUITES_IMAGE,
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
      _imageRef: document
        ? document?.hotelInfo.filter((info) => info.title == WELLNESS)?.[0].icon
            ?.asset?._ref
        : type == "dev"
        ? DEV_WELLNESS_IMAGE
        : PROD_WELLNESS_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.wellness, _key: nanoid() }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: TEMPERATURE,
      _imageRef: document
        ? document?.hotelInfo.filter((info) => info.title == TEMPERATURE)?.[0]
            .icon?.asset?._ref
        : type == "dev"
        ? DEV_TEMPERATURE_IMAGE
        : PROD_TEMPERATURE_IMAGE,
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
      _imageRef: document
        ? document?.hotelInfo.filter((info) => info.title == E_MAIL)?.[0].icon
            ?.asset?._ref
        : type == "dev"
        ? DEV_E_MAIL_IMAGE
        : PROD_E_MAIL_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.email, _key: nanoid() }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: CONTACT,
      _imageRef: document
        ? document?.hotelInfo.filter((info) => info.title == CONTACT)?.[0].icon
            ?.asset?._ref
        : type == "dev"
        ? DEV_CONTACT_IMAGE
        : PROD_CONTACT_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.contact, _key: nanoid() }),
    }),
  );
  hotelInfoData.push(
    generateFacilityInfo({
      title: PHONE,
      _imageRef: document
        ? document?.hotelInfo.filter((info) => info.title == PHONE)?.[0].icon
            ?.asset?._ref
        : type == "dev"
        ? DEV_QUERIES_IMAGE
        : PROD_QUERIES_IMAGE,
      _key: nanoid(),
      list: generateBulletPoints({ data: hotelData?.phone, _key: nanoid() }),
    }),
  );
  return {
    _type: TYPE_AVAILABILITY,
    sectionTitle: { ...availabilitySectionTitle },
    hotelInfo: [...hotelInfoData],
    title: hotelData?.title?.trim(),
  };
}

function createOrReplaceFacilitiesDoc(hotelData, type) {
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let hotelFacilitiesData = [];
  let mobileFacilitiesData = [];
  hotelFacilitiesData.push(
    generateFacilityInfo({
      title: ACTIVITIES,
      _imageRef: type == "dev" ? DEV_ACTIVITIES_IMAGE : PROD_ACTIVITIES_IMAGE,
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
        data: hotelData?.rooms,
        _key: nanoid(),
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
      images: [
        type == "dev" ? DEV_POLO_MATCHES_IMAGE : PROD_POLO_MATCHES_IMAGE,
      ],
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
      images: [
        type == "dev"
          ? DEV_CAR_RENTAL_SERVICES_IMAGE
          : PROD_CAR_RENTAL_SERVICES_IMAGE,
      ],
    }),
    generateMobileFacilities({
      value: FITNESS_CENTRE,
      images: [
        type == "dev" ? DEV_FITNESS_CENTER_IMAGE : PROD_FITNESS_CENTER_IMAGE,
      ],
    }),
    generateMobileFacilities({
      value: OUTDOOR_INDOOR_POOLS,
      images: [
        type == "dev"
          ? DEV_OUTDOOR_AND_INDOOR_POOLS_IMAGE
          : PROD_OUTDOOR_AND_INDOOR_POOLS_IMAGE,
      ],
    }),
    generateMobileFacilities({
      value: JIVA_SPA,
      images: [type == "dev" ? DEV_JIVA_SPA_IMAGE : PROD_JIVA_SPA_IMAGE],
    }),
  );
  console.log("mobileFacilitiesData", mobileFacilitiesData);

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
  data?.longDescription && (finalData.longDescription = data?.longDescription);
  return finalData;
}

function ConvertJSONValuesToString(obj: object) {
  if (typeof obj !== "object") return obj;

  return JSON.parse(
    JSON.stringify(obj, (k, v) => (v && typeof v === "object" ? v : "" + v)),
  );
}

function extractDestinationData(data: any) {
  let finalData: any = {};
  isEmptyString(data?.title) && (finalData.title = data?.title?.trim());
  isEmptyString(data?.id) && (finalData.id = data?.id);
  isEmptyString(data?.identifier) &&
    (finalData.identifier = data?.identifier?.trim());
  isEmptyString(data?.description) &&
    (finalData.hotelCode = data?.description)?.trim();
  isEmptyString(data?.destinationURL) &&
    (finalData.destinationURL = data?.destinationURL?.trim());
  isEmptyString(data?.country) && (finalData.country = data?.country?.trim());
  isEmptyString(data?.city) && (finalData.city = data?.city?.trim());
  isEmptyString(data?.bannerDesktopTitle) &&
    (finalData.bannerDesktopTitle = splitString({
      data: data?.bannerDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.bannerMobileTitle) &&
    (finalData.bannerMobileTitle = splitString({
      data: data?.bannerMobileTitle?.trim(),
      character: "|",
    }));

  isEmptyString(data?.hotelsTabDesktopTitle) &&
    (finalData.hotelsTabDesktopTitle = splitString({
      data: data?.hotelsTabDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.hotelsTabMobileTitle) &&
    (finalData.hotelsTabMobileTitle = splitString({
      data: data?.hotelsTabMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.hotelsTabDescription) &&
    (finalData.hotelsTabDescription = data?.hotelsTabDescription?.trim());
  isEmptyString(data?.hotelsTabBannerImage) &&
    (finalData.hotelsTabBannerImage = splitMediaInput({
      data: splitString({
        data: data?.hotelsTabBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));

  isEmptyString(data?.offersTabDesktopTitle) &&
    (finalData.offersTabDesktopTitle = splitString({
      data: data?.offersTabDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.offersTabMobileTitle) &&
    (finalData.offersTabMobileTitle = splitString({
      data: data?.offersTabMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.offersTabDescription) &&
    (finalData.offersTabDescription = data?.offersTabDescription?.trim());
  isEmptyString(data?.offersTabBannerImage) &&
    (finalData.offersTabBannerImage = splitMediaInput({
      data: splitString({
        data: data?.offersTabBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));

  isEmptyString(data?.diningDesktopTitle) &&
    (finalData.diningDesktopTitle = splitString({
      data: data?.diningDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.diningMobileTitle) &&
    (finalData.diningMobileTitle = splitString({
      data: data?.diningMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.diningDescription) &&
    (finalData.diningDescription = data?.diningDescription?.trim());
  isEmptyString(data?.diningBannerImage) &&
    (finalData.diningBannerImage = splitMediaInput({
      data: splitString({
        data: data?.diningBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));

  isEmptyString(data?.experiencesTabDesktopTitle) &&
    (finalData.experiencesTabDesktopTitle = splitString({
      data: data?.experiencesTabDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.experiencesTabMobileTitle) &&
    (finalData.experiencesTabMobileTitle = splitString({
      data: data?.experiencesTabMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.experiencesTabDescription) &&
    (finalData.experiencesTabDescription =
      data?.experiencesTabDescription?.trim());
  isEmptyString(data?.experiencesTabBannerImage) &&
    (finalData.experiencesTabBannerImage = splitMediaInput({
      data: splitString({
        data: data?.experiencesTabBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));

  isEmptyString(data?.spaTabDesktopTitle) &&
    (finalData.spaTabDesktopTitle = splitString({
      data: data?.spaTabDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.spaTabMobileTitle) &&
    (finalData.spaTabMobileTitle = splitString({
      data: data?.spaTabMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.spaTabDescription) &&
    (finalData.spaTabDescription = data?.spaTabDescription?.trim());
  isEmptyString(data?.spaTabBannerImage) &&
    (finalData.spaTabBannerImage = splitMediaInput({
      data: splitString({
        data: data?.spaTabBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));

  isEmptyString(data?.treatmentsTabDesktopTitle) &&
    (finalData.treatmentsTabDesktopTitle = splitString({
      data: data?.treatmentsTabDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.treatmentsTabMobileTitle) &&
    (finalData.treatmentsTabMobileTitle = splitString({
      data: data?.treatmentsTabMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.treatmentsTabDescription) &&
    (finalData.treatmentsTabDescription =
      data?.treatmentsTabDescription?.trim());
  isEmptyString(data?.treatmentsTabBannerImage) &&
    (finalData.treatmentsTabBannerImage = splitMediaInput({
      data: splitString({
        data: data?.treatmentsTabBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));

  isEmptyString(data?.holidaysTabDesktopTitle) &&
    (finalData.holidaysTabDesktopTitle = splitString({
      data: data?.holidaysTabDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.holidaysTabMobileTitle) &&
    (finalData.holidaysTabMobileTitle = splitString({
      data: data?.holidaysTabMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.holidaysTabDescription) &&
    (finalData.holidaysTabDescription = data?.holidaysTabDescription?.trim());
  isEmptyString(data?.holidaysTabBannerImage) &&
    (finalData.holidaysTabBannerImage = splitMediaInput({
      data: splitString({
        data: data?.holidaysTabBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));

  isEmptyString(data?.featuredHolidaysDesktopTitle) &&
    (finalData.featuredHolidaysDesktopTitle = splitString({
      data: data?.featuredHolidaysDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.featuredHolidaysMobileTitle) &&
    (finalData.featuredHolidaysMobileTitle = splitString({
      data: data?.featuredHolidaysMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.featuredHolidaysDescription) &&
    (finalData.featuredHolidaysDescription =
      data?.featuredHolidaysDescription?.trim());
  isEmptyString(data?.featuredHolidaysBannerImage) &&
    (finalData.featuredHolidaysBannerImage = splitMediaInput({
      data: splitString({
        data: data?.featuredHolidaysBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));

  isEmptyString(data?.journeysDesktopTitle) &&
    (finalData.journeysDesktopTitle = splitString({
      data: data?.journeysDesktopTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.journeysMobileTitle) &&
    (finalData.journeysMobileTitle = splitString({
      data: data?.journeysMobileTitle?.trim(),
      character: "|",
    }));
  isEmptyString(data?.journeysDescription) &&
    (finalData.journeysDescription = data?.journeysDescription?.trim());
  isEmptyString(data?.journeysBannerImage) &&
    (finalData.journeysBannerImage = splitMediaInput({
      data: splitString({
        data: data?.journeysBannerImage?.trim(),
        character: "|",
      }),
      character: ",",
    }));
  return finalData;
}

function compareValues({ excelData, documentData, key }) {
  if (documentData?.[key]) {
    if (documentData?.[key] == excelData?.[key]) {
      return documentData?.[key];
    } else {
      return excelData?.[key];
    }
  } else {
    return excelData?.[key];
  }
}

async function fetchDocument({ type, identifierKey, identifierValue }) {
  const response = await client
    .fetch(
      `*[_type == "${type}" && ${identifierKey} == "${identifierValue?.trim()}"][0]{...}`,
    )
    .then((res) => {
      return { ...res };
    })
    .catch((error) => {
      console.log("Error while fetching documnet", error);
      return null;
    });
  return response;
}

function getHotelQuery({ identifierKey, identifierValue }) {
  return `*[_type == "hotel" && ${identifierKey} == "${identifierValue?.trim()}"][0]{
    ...,
    hotelNavigation->{...},
    gcCategory->{...},
    searchTaxonomies->{...},
    hotelOverview->{...},
    hotelAddress->{...},
    hotelContact->{...},
    hotelAvailability->{...},
    hotelFacilities->{...},
    hotelAwards->{...},
    hotelSocialInfo->{...},
    hotelRooms->{...},
    hotelHighlights->{...},
    hotelExclusiveOffersDining->{...},
    hotelExclusiveOffersWellness->{...},
    hotelExclusiveOffersRooms->{...},
    hotelOffers->{...},
    hotelHolidays->{...},
    hotelSignatureDining->{...},
    hotelEventVenues->{...},
    hotelWellness->{...},
    hotelExperiences->{...},
    hotelGallery->{...},
    hotelAttractions->{...}}`;
}

async function getHotelDocument(
  { excelData, document = null },
  returnData: any = {},
) {
  if (!document) {
    returnData._type = TYPE_HOTEL;
    returnData.hotelName = excelData?.hotelName;
  }

  //hotelBannerTitle
  returnData.hotelBannerTitle = {
    _type: TYPE_TITLE,
  };

  //hotelDescription
  const hotelDescription = compareValues({
    excelData: excelData,
    documentData: document,
    key: "hotelDescription",
  });
  hotelDescription && (returnData.hotelDescription = hotelDescription);

  //hotelId
  const hotelId = compareValues({
    excelData: excelData,
    documentData: document,
    key: "hotelId",
  });
  hotelId && (returnData.hotelId = hotelId);

  //identifier
  const identifier = compareValues({
    excelData: excelData,
    documentData: document,
    key: "identifier",
  });
  identifier && (returnData.identifier = identifier);

  //brandName
  const brandName = compareValues({
    excelData: excelData,
    documentData: document,
    key: "brandName",
  });
  brandName && (returnData.brandName = brandName);

  //brandId
  const brandId = compareValues({
    excelData: excelData,
    documentData: document,
    key: "brandId",
  });
  brandId && (returnData.brandId = String(brandId));

  //hotelPath
  const hotelPath = compareValues({
    excelData: excelData,
    documentData: document,
    key: "hotelPath",
  });
  hotelPath && (returnData.hotelPath = hotelPath);

  //hotelSubType
  const hotelSubType = compareValues({
    excelData: excelData,
    documentData: document,
    key: "hotelSubType",
  });
  hotelSubType && (returnData.hotelSubType = hotelSubType);

  //hotelBannerTitle - hotelBannerMobileTitle
  if (excelData?.hotelBannerMobileTitle?.length > 0) {
    returnData.hotelBannerTitle.mobileTitle = excelData?.hotelBannerMobileTitle;
  }

  //hotelBannerTitle - hotelBannerDesktopTitle
  if (excelData?.hotelBannerDesktopTitle?.length > 0) {
    returnData.hotelBannerTitle.desktopTitle =
      excelData?.hotelBannerDesktopTitle;
  }

  //hotelNavigation
  const hotelNavigation = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelNavigation",
    type: "hotelNavigation",
    identifierKey: "navType",
  });
  hotelNavigation && (returnData.hotelNavigation = hotelNavigation);

  //gcCategory
  const gcCategory = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "gcCategory",
    type: "giftCardsDetails",
    identifierKey: "name", //"sku"
  });
  gcCategory && (returnData.gcCategory = gcCategory);

  //searchTaxonomies
  const searchTaxonomies = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "searchTaxonomies",
    type: "taxonomyInfo",
    identifierKey: "title", //"sku"
  });
  searchTaxonomies && (returnData.searchTaxonomies = searchTaxonomies);

  //hotelOverview
  const hotelOverview = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelOverview",
    type: "overview",
    identifierKey: "title",
  });
  hotelOverview && (returnData.hotelOverview = hotelOverview);

  //hotelAddress
  const hotelAddress = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelAddress",
    type: "address",
    identifierKey: "title", //"sku"
  });
  hotelAddress && (returnData.hotelAddress = hotelAddress);

  //hotelContact
  const hotelContact = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelContact",
    type: "contact",
    identifierKey: "title", //"sku"
  });
  hotelContact && (returnData.hotelContact = hotelContact);

  //hotelAvailability
  const hotelAvailability = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelAvailability",
    type: "availability",
    identifierKey: "title", //"sku"
  });
  hotelAvailability && (returnData.hotelAvailability = hotelAvailability);

  //hotelFacilities
  const hotelFacilities = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelFacilities",
    type: "facilities",
    identifierKey: "title", //"sku"
  });
  hotelFacilities && (returnData.hotelFacilities = hotelFacilities);

  //hotelAwards
  const hotelAwards = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelAwards",
    type: "awards",
    identifierKey: "title", //"sku"
  });
  hotelAwards && (returnData.hotelAwards = hotelAwards);

  //hotelSocialInfo
  const hotelSocialInfo = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelSocialInfo",
    type: "socialInfo",
    identifierKey: "title", //"sku"
  });
  hotelSocialInfo && (returnData.hotelSocialInfo = hotelSocialInfo);

  //hotelRooms
  const hotelRooms = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelRooms",
    type: "rooms",
    identifierKey: "title", //"sku"
  });
  hotelRooms && (returnData.hotelRooms = hotelRooms);

  //hotelHighlights
  const hotelHighlights = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelHighlights",
    type: "highlights",
    identifierKey: "title", //"sku"
  });
  hotelHighlights && (returnData.hotelHighlights = hotelHighlights);

  //hotelExclusiveOffersDining
  const hotelExclusiveOffersDining = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelExclusiveOffersDining",
    type: "exclusiveOffers",
    identifierKey: "title", //"sku"
  });
  hotelExclusiveOffersDining &&
    (returnData.hotelExclusiveOffersDining = hotelExclusiveOffersDining);

  //hotelExclusiveOffersWellness
  const hotelExclusiveOffersWellness = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelExclusiveOffersWellness",
    type: "exclusiveOffers",
    identifierKey: "title", //"sku"
  });
  hotelExclusiveOffersWellness &&
    (returnData.hotelExclusiveOffersWellness = hotelExclusiveOffersWellness);

  //hotelExclusiveOffersRooms
  const hotelExclusiveOffersRooms = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelExclusiveOffersRooms",
    type: "exclusiveOffers",
    identifierKey: "title", //"sku"
  });
  hotelExclusiveOffersRooms &&
    (returnData.hotelExclusiveOffersRooms = hotelExclusiveOffersRooms);

  //hotelOffers
  const hotelOffers = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelOffers",
    type: "offers",
    identifierKey: "title", //"sku"
  });
  hotelOffers && (returnData.hotelOffers = hotelOffers);

  //hotelHolidays
  const hotelHolidays = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelHolidays",
    type: "holidays",
    identifierKey: "title", //"sku"
  });
  hotelHolidays && (returnData.hotelHolidays = hotelHolidays);

  //hotelSignatureDining
  const hotelSignatureDining = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelSignatureDining",
    type: "signatureDining",
    identifierKey: "title", //"sku"
  });
  hotelSignatureDining &&
    (returnData.hotelSignatureDining = hotelSignatureDining);

  //hotelEventVenues
  const hotelEventVenues = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelEventVenues",
    type: "venues",
    identifierKey: "title", //"sku"
  });
  hotelEventVenues && (returnData.hotelEventVenues = hotelEventVenues);

  //hotelWellness
  const hotelWellness = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelWellness",
    type: "wellness",
    identifierKey: "title", //"sku"
  });
  hotelWellness && (returnData.hotelWellness = hotelWellness);

  //hotelExperiences
  const hotelExperiences = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelExperiences",
    type: "experiences",
    identifierKey: "title", //"sku"
  });
  hotelExperiences && (returnData.hotelExperiences = hotelExperiences);

  //hotelGallery
  const hotelGallery = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelGallery",
    type: "gallery",
    identifierKey: "title", //"sku"
  });
  hotelGallery && (returnData.hotelGallery = hotelGallery);

  //hotelAttractions
  const hotelAttractions = await getRefererenceObject({
    excelData: excelData,
    documentData: document,
    key: "hotelAttractions",
    type: "attractions",
    identifierKey: "title", //"sku"
  });
  hotelAttractions && (returnData.hotelAttractions = hotelAttractions);

  return returnData;
}

async function getRefererenceObject({
  excelData,
  documentData,
  key,
  type,
  identifierKey,
}) {
  if (documentData?.[key]?.[identifierKey]) {
    if (excelData?.[key]) {
      if (documentData?.[key]?.[identifierKey] == excelData?.[key]) {
        return {
          _ref: documentData?.[key]?._id.replace("drafts.", ""),
          _type: TYPE_REFERENCE,
        };
      } else {
        const _typedDocument = await fetchDocument({
          identifierKey: identifierKey,
          identifierValue: excelData?.[key],
          type: type,
        });
        if (_typedDocument?._id) {
          return {
            _ref: _typedDocument?._id.replace("drafts.", ""),
            _type: TYPE_REFERENCE,
          };
        }
      }
    } else {
      return {
        _ref: documentData?.[key]?._id.replace("drafts.", ""),
        _type: TYPE_REFERENCE,
      };
    }
  } else {
    if (excelData?.[key]) {
      const _typedDocument = await fetchDocument({
        identifierKey: identifierKey,
        identifierValue: excelData?.[key],
        type: type,
      });
      if (_typedDocument?._id) {
        return {
          _ref: _typedDocument?._id.replace("drafts.", ""),
          _type: TYPE_REFERENCE,
        };
      }
    }
    return;
  }
}

export {
  Update,
  Create,
  fetchByType,
  createOrReplaceDoc,
  generateFacilityInfo,
  extractTaxonomyData,
  createOrReplaceFacilitiesDoc,
  ConvertJSONValuesToString,
  extractDestinationData,
  compareValues,
  fetchDocument,
  getHotelQuery,
  getHotelDocument,
  getRefererenceObject,
};
