import { customAlphabet } from "nanoid";
import {
  KEY_DESKTOP_TITLE,
  KEY_MOBILE_TITLE,
  TYPE_BASICDETAILS,
  TYPE_REFERENCE,
  TYPE_RESTAURANT,
  TYPE_RESTAURANT_DETAILS,
  TYPE_TITLE,
} from "../constants";
import {
  compareValues,
  fetchDocument,
  getFacilities,
  getRefererenceObject,
} from "../utils";

const nanoid = customAlphabet("1234567890abcdef", 12);

const getBlockContent = ({ text }) => {
  return {
    _key: "bce7de8c36bb",
    _type: "block",
    children: [
      {
        _key: "638b4a7c9adf0",
        _type: "span",
        marks: [],
        text,
      },
    ],
    markDefs: [],
    style: "normal",
  };
};

const getIcon = (title: string) => {
  let icon = {
    _key: "0",
    _type: "image",
    asset: {},
  };

  if (title === "ALL DAY") {
    icon = {
      _key: "b9a018260461",
      _type: "image",
      asset: {
        _ref: "image-c48628fbb4b039bdaba898224d9065dce969deff-63x63-png",
        _type: "reference",
      },
    };
  }
  if (title === "BREAKFAST") {
    icon = {
      _key: "b9a018260461383",
      _type: "image",
      asset: {
        _ref: "image-c48628fbb4b039bdaba898224d9065dce969deff-63x63-png",
        _type: "reference",
      },
    };
  }
  if (title === "LUNCH") {
    icon = {
      _key: "b9a01826046193837",
      _type: "image",
      asset: {
        _ref: "image-c48628fbb4b039bdaba898224d9065dce969deff-63x63-png",
        _type: "reference",
      },
    };
  }
  if (title === "DINNER") {
    icon = {
      _key: "b9a018260461151526",
      _type: "image",
      asset: {
        _ref: "image-c48628fbb4b039bdaba898224d9065dce969deff-63x63-png",
        _type: "reference",
      },
    };
  } else if (title === "CUISINE") {
    icon = {
      _key: "4738329ebd1698399",
      _type: "image",
      asset: {
        _ref: "image-fbac762be575b15ec474d0c1be9b91a1865d79b1-54x54-png",
        _type: "reference",
      },
    };
  } else if (title === "DRESS CODE") {
    icon = {
      _key: "70994442d444",
      _type: "image",
      asset: {
        _ref: "image-4e9079181f3689b540f613b3d30e6b32450661c3-78x57-png",
        _type: "reference",
      },
    };
  } else if (title === "CONTACT") {
    icon = {
      _key: "b5c8c47c0600",
      _type: "image",
      asset: {
        _ref: "image-ae7518f85f4fe59d50b66859a7091a28699b8d8c-48x69-png",
        _type: "reference",
      },
    };
  } else if (title === "EMAIL") {
    icon = {
      _key: "mhi0b5c8c47c0600",
      _type: "image",
      asset: {
        _ref: "image-1596fd9490f39ee21269523336e72a8616921be3-51x41-png",
        _type: "reference",
      },
    };
  } else if (title === "TELEPHONE") {
    icon = {
      _key: "b5c8c47c06003838",
      _type: "image",
      asset: {
        _ref: "image-b6b11f85e285579398b4644c8fdd5b61738ab811-57x57-png",
        _type: "reference",
      },
    };
  }

  return icon;
};

const restaurantAvailability = ({ title, content }) => {
  return {
    _key: nanoid(),
    _type: "facilityInfo",
    icon: getIcon(title),
    list: [
      {
        _key: "0",
        _type: "bulletPoints",
        item: content,
        mobileIcon: {},
      },
    ],
    title: title,
  };
};

let availabilityTitle = "",
  availabilityContent = "";

const _hotelDetailDiningPage = (
  hotelDiningPageObj: {
    [x: string]: string;
    bannerDiningInfoText: any;
    bannerSubTitle: string;
    locationBasedDescription: string;
    locationBasedSectionDesktopTitle: string;
    locationBasedSectionMobileTitle: string;
    diningContactInfoText: any;
    diningDescription: string;
    diningTitle: string;
    restaurantDescription: string;
    restaurantSectionDesktopTitle: string;
    restaurantSectionMobileTitle: string;
    restaurantBasicDescription: string;
    restaurantBasicTitle: string;
  }[],
) =>
  hotelDiningPageObj.map(
    (a: {
      [x: string]: string;
      bannerDiningInfoText: any;
      bannerSubTitle: string;
      locationBasedDescription: string;
      locationBasedSectionDesktopTitle: string;
      locationBasedSectionMobileTitle: string;
      diningContactInfoText: any;
      diningDescription: string;
      diningTitle: string;
      restaurantDescription: string;
      restaurantSectionDesktopTitle: string;
      restaurantSectionMobileTitle: string;
      restaurantBasicDescription: string;
      restaurantBasicTitle: string;
    }) => {
      const hotelDetailDiningPage = {
        bannerDiningInfo: [],
        bannerSubTitle: "",
        locationBasedRestaurants: {
          _type: "restaurantDetails",
          basicInfo: {},
          description: "",
          sectionTitle: {
            _type: "title",
            desktopTitle: [],
            mobileTitle: [],
          },
        },
        privateDiningInfo: {
          _key: "5a0a3bca432f",
          contactInfo: [],
          diningInfo: {
            _type: "basicDetails",
            description: "",
            media: [],
            title: "",
          },
        },
        restaurantAvailability: [],
        restaurantInfo: {
          _type: "restaurantDetails",
          basicInfo: {
            _type: "basicDetails",
            description: "",
            media: [],
            specifications: [],
            title: "",
          },
          description: "",
          sectionTitle: {
            _type: "title",
            desktopTitle: [],
            mobileTitle: [],
          },
        },
      };

      hotelDetailDiningPage.bannerDiningInfo.push(
        getBlockContent({ text: a.bannerDiningInfoText }),
      );

      hotelDetailDiningPage.bannerSubTitle = a.bannerSubTitle;

      hotelDetailDiningPage.locationBasedRestaurants.description =
        a.locationBasedDescription;

      const sectionTitle = {
        _type: "title",
        desktopTitle: [],
        mobileTitle: [],
      };

      if (a.locationBasedSectionDesktopTitle.includes("|")) {
        sectionTitle.desktopTitle =
          a.locationBasedSectionDesktopTitle.split("|");
      } else {
        sectionTitle.desktopTitle = [a.locationBasedSectionDesktopTitle];
      }

      if (a.locationBasedSectionMobileTitle.includes("|")) {
        sectionTitle.mobileTitle = a.locationBasedSectionMobileTitle.split("|");
      } else {
        sectionTitle.mobileTitle = [a.locationBasedSectionMobileTitle];
      }

      hotelDetailDiningPage.locationBasedRestaurants.sectionTitle = {
        ...sectionTitle,
      };

      const diningContactInfo = {
        _key: "631117ca9949",
        _type: "block",
        children: [
          {
            _key: "dd3ae1520b950",
            _type: "span",
            marks: [],
            text: a.diningContactInfoText,
          },
        ],
        markDefs: [],
        style: "normal",
      };

      hotelDetailDiningPage.privateDiningInfo.contactInfo.push(
        diningContactInfo,
      );

      hotelDetailDiningPage.privateDiningInfo.diningInfo.description =
        a.diningDescription;
      hotelDetailDiningPage.privateDiningInfo.diningInfo.title = a.diningTitle;

      for (const k in a) {
        if (k.includes("_itemTitle")) availabilityTitle = a[k];
        availabilityContent = "";
        if (k.includes("_itemContent")) availabilityContent = a[k];
        if (availabilityTitle && availabilityContent) {
          hotelDetailDiningPage.restaurantAvailability.push(
            restaurantAvailability({
              title: availabilityTitle.toUpperCase(),
              content: availabilityContent,
            }),
          );
        }
      }
      hotelDetailDiningPage.restaurantInfo.description =
        a.restaurantDescription;

      if (a.restaurantSectionDesktopTitle.includes("|")) {
        sectionTitle.desktopTitle = a.restaurantSectionDesktopTitle.split("|");
      } else {
        sectionTitle.desktopTitle = [a.restaurantSectionDesktopTitle];
      }

      if (a.restaurantSectionMobileTitle.includes("|")) {
        sectionTitle.mobileTitle = a.restaurantSectionMobileTitle.split("|");
      } else {
        sectionTitle.mobileTitle = [a.restaurantSectionMobileTitle];
      }

      hotelDetailDiningPage.restaurantInfo.sectionTitle = { ...sectionTitle };

      hotelDetailDiningPage.restaurantInfo.basicInfo.description =
        a.restaurantBasicDescription;

      hotelDetailDiningPage.restaurantInfo.basicInfo.title =
        a.restaurantBasicTitle;

      return hotelDetailDiningPage;
    },
  );

// console.log(_hotelDetailDiningPage());

// Merge images from original response if exists
const overrideWithImagesIfExists = (
  hotelDiningPageObj: {
    [x: string]: string;
    bannerDiningInfoText: any;
    bannerSubTitle: string;
    locationBasedDescription: string;
    locationBasedSectionDesktopTitle: string;
    locationBasedSectionMobileTitle: string;
    diningContactInfoText: any;
    diningDescription: string;
    diningTitle: string;
    restaurantDescription: string;
    restaurantSectionDesktopTitle: string;
    restaurantSectionMobileTitle: string;
    restaurantBasicDescription: string;
    restaurantBasicTitle: string;
  }[],
  response: {
    hotelDetailDiningPage: {
      privateDiningInfo: { diningInfo: { media: string | any[] } };
      restaurantInfo: { basicInfo: { media: string | any[] } };
    };
  },
) => {
  return _hotelDetailDiningPage(hotelDiningPageObj)
    .map(
      (a: {
        privateDiningInfo: { diningInfo: any };
        restaurantInfo: { basicInfo: any };
      }) => {
        let diningInfoMedia = [],
          restaurantBasicInfoMedia = [];

        if (
          Array.isArray(
            response?.hotelDetailDiningPage?.privateDiningInfo?.diningInfo
              ?.media,
          ) &&
          response?.hotelDetailDiningPage?.privateDiningInfo?.diningInfo?.media
            .length > 0
        ) {
          diningInfoMedia =
            response?.hotelDetailDiningPage?.privateDiningInfo?.diningInfo
              ?.media;
        }

        if (
          Array.isArray(
            response?.hotelDetailDiningPage?.restaurantInfo?.basicInfo?.media,
          ) &&
          response?.hotelDetailDiningPage?.restaurantInfo?.basicInfo?.media
            .length > 0
        ) {
          restaurantBasicInfoMedia =
            response?.hotelDetailDiningPage?.restaurantInfo?.basicInfo?.media;
        }

        return {
          ...a,
          privateDiningInfo: {
            ...a.privateDiningInfo,
            diningInfo: {
              ...a.privateDiningInfo.diningInfo,
              media: diningInfoMedia,
            },
          },
          restaurantInfo: {
            ...a.restaurantInfo,
            basicInfo: {
              ...a.restaurantInfo.basicInfo,
              media: restaurantBasicInfoMedia,
            },
          },
        };
      },
    )
    .filter(Boolean)[0];
};

export const finalRestaurantsInfoObj = ({
  title,
  bannerTitle,
  hotelDiningPageObj,
  response,
}) => {
  return {
    hotelDetailDiningPage: overrideWithImagesIfExists(
      hotelDiningPageObj,
      response,
    ),
    title,
    bannerTitle,
  };
};

async function getRestaurantDoc(
  { excelData, doc = null, type = TYPE_RESTAURANT },
  newDoc: any = {},
) {
  const hotelDetailDiningPage: any = {};
  const privateDiningInfo: any = {};
  const restaurantInfo: any = { _type: TYPE_RESTAURANT_DETAILS };
  const locationBasedRestaurants: any = { _type: TYPE_RESTAURANT_DETAILS };

  if (!doc) {
    newDoc._type = type;
    newDoc.title = excelData?.title?.trim();
  }

  //bannerTitle
  if (excelData?.bannerDesktopTitle || excelData?.bannerMobileTitle) {
    newDoc.bannerTitle = {
      _type: TYPE_TITLE,
      [KEY_DESKTOP_TITLE]: excelData?.bannerDesktopTitle
        ?.split("|")
        ?.map((item) => item?.trim()),
      [KEY_MOBILE_TITLE]: excelData?.bannerMobileTitle
        ?.split("|")
        ?.map((item) => item?.trim()),
    };
  }

  //identifier
  const identifier = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "identifier",
  });
  identifier && (newDoc.identifier = identifier);

  //thumbnailDescription
  const thumbnailDescription = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "thumbnailDescription",
  });
  thumbnailDescription && (newDoc.thumbnailDescription = thumbnailDescription);

  //city
  const city = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "city",
  });
  city && (newDoc.city = city);

  //pageTitle
  const pageTitle = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "pageTitle",
  });
  pageTitle && (newDoc.pageTitle = pageTitle);

  //seoDescription
  const seoDescription = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "seoDescription",
  });
  seoDescription && (newDoc.seoDescription = seoDescription);

  //seoKeywords
  const seoKeywords = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "seoKeywords",
  });
  seoKeywords && (newDoc.seoKeywords = seoKeywords);

  //openingHours
  if (excelData?.openingHours) {
    newDoc.openingHours = excelData?.openingHours?.split("|");
  }

  //participatingHotels
  if (excelData?.participatingHotels) {
    const hotels = excelData?.participatingHotels?.split("|");
    let participatingHotels = [];
    await hotels?.map(async (item) => {
      await fetchDocument({
        identifierKey: "hotelName",
        identifierValue: item,
        type: "hotel",
      }).then((_typedDocument) => {
        if (_typedDocument?._id) {
          participatingHotels.push({
            _ref: _typedDocument?._id?.replace("drafts.", ""),
            _type: TYPE_REFERENCE,
          });
        }
      });
    });
    participatingHotels && (newDoc.participatingHotels = participatingHotels);
  }

  //bannerDiningInfoText
  if (excelData.bannerDiningInfoText) {
    hotelDetailDiningPage.bannerDiningInfo = [
      getBlockContent({
        text: excelData.bannerDiningInfoText,
      }),
    ];
  } else {
    doc?.hotelDetailDiningPage?.bannerDiningInfo &&
      (hotelDetailDiningPage.bannerDiningInfo =
        doc?.hotelDetailDiningPage?.bannerDiningInfo);
  }

  //bannerSubTitle
  const bannerSubTitle = compareValues({
    excelData: excelData,
    documentData: doc?.hotelDetailDiningPage,
    key: "bannerSubTitle",
  });
  bannerSubTitle && (hotelDetailDiningPage.bannerSubTitle = bannerSubTitle);

  //restaurantAvailability
  if (
    excelData?.restaurantAvailabilityFacilityInfoTitle ||
    excelData?.restaurantAvailabilityFacilityInfoList ||
    excelData?.restaurantAvailabilityFacilityInfoIcon
  ) {
    const restaurantAvailability = getFacilities({
      excelData: {
        facilityInfoTitle:
          excelData?.restaurantAvailabilityFacilityInfoTitle?.split("|"),
        facilityInfoIcon: excelData?.restaurantAvailabilityFacilityInfoIcon
          ?.split("|")
          ?.map((icon) => (icon == "null" ? null : icon)),
        facilityInfoList: excelData?.restaurantAvailabilityFacilityInfoList
          ?.split("|")
          ?.map((list) => (list == "null" ? null : list?.split("\\"))),
      },
      titleKey: "facilityInfoTitle",
      iconKey: "facilityInfoIcon",
      listKey: "facilityInfoList",
    });
    restaurantAvailability &&
      (hotelDetailDiningPage.restaurantAvailability = restaurantAvailability);
  } else {
    doc?.hotelDetailDiningPage?.restaurantAvailability &&
      (hotelDetailDiningPage.restaurantAvailability =
        doc?.hotelDetailDiningPage?.restaurantAvailability);
  }

  //privateDiningInfo
  if (excelData?.privateDiningInfoContactInfo) {
    privateDiningInfo.contactInfo = [
      getBlockContent({
        text: excelData.privateDiningInfoContactInfo,
      }),
    ];
  } else {
    doc?.hotelDetailDiningPage?.privateDiningInfo?.contactInfo &&
      (privateDiningInfo.contactInfo =
        doc?.hotelDetailDiningPage?.privateDiningInfo?.contactInfo);
  }
  if (
    excelData?.privateDiningInfoBasicInfoTitle ||
    excelData?.privateDiningInfoBasicInfoSubTitle ||
    excelData?.privateDiningInfoBasicInfoDescription
  ) {
    privateDiningInfo.diningInfo = getBasicDetails({
      title: excelData?.privateDiningInfoBasicInfoTitle,
      subTitle: excelData?.privateDiningInfoBasicInfoSubTitle,
      description: excelData?.privateDiningInfoBasicInfoDescription,
      media: doc?.hotelDetailDiningPage?.privateDiningInfo?.basicInfo?.media,
      specifications:
        doc?.hotelDetailDiningPage?.privateDiningInfo?.basicInfo
          ?.specifications,
    });
  } else {
    doc?.hotelDetailDiningPage?.privateDiningInfo?.basicInfo &&
      (privateDiningInfo.basicInfo =
        doc?.hotelDetailDiningPage?.privateDiningInfo?.basicInfo);
  }
  hotelDetailDiningPage.privateDiningInfo = privateDiningInfo;

  //restaurantContact
  const restaurantContact = await getRefererenceObject({
    excelData: excelData,
    documentData: {
      restaurantContact: doc?.hotelDetailDiningPage?.restaurantContact,
    },
    key: "restaurantContact",
    type: "contact",
    identifierKey: "title",
  });
  restaurantContact &&
    (hotelDetailDiningPage.restaurantContact = restaurantContact);

  //restaurantAddress
  const restaurantAddress = await getRefererenceObject({
    excelData: excelData,
    documentData: {
      restaurantAddress: doc?.hotelDetailDiningPage?.restaurantAddress,
    },
    key: "restaurantAddress",
    type: "address",
    identifierKey: "title",
  });
  restaurantAddress &&
    (hotelDetailDiningPage.restaurantAddress = restaurantAddress);

  //restaurantInfo - basicInfo
  if (
    excelData?.restaurantDetailsBasicInfoTitle ||
    excelData?.restaurantDetailsBasicInfoSubTitle ||
    excelData?.restaurantDetailsBasicInfoDescription
  ) {
    restaurantInfo.basicInfo = getBasicDetails({
      title: excelData?.restaurantDetailsBasicInfoTitle,
      subTitle: excelData?.restaurantDetailsBasicInfoSubTitle,
      description: excelData?.restaurantDetailsBasicInfoDescription,
      media: doc?.hotelDetailDiningPage?.restaurantInfo?.basicInfo?.media,
      specifications:
        doc?.hotelDetailDiningPage?.restaurantInfo?.basicInfo?.specifications,
    });
  } else {
    doc?.hotelDetailDiningPage?.restaurantInfo?.basicInfo &&
      (restaurantInfo.basicInfo =
        doc?.hotelDetailDiningPage?.restaurantInfo?.basicInfo);
  }

  //restaurantInfo - sectionTitle
  if (
    excelData?.restaurantDetailsDesktopTitle ||
    excelData?.restaurantDetailsMobileTitle
  ) {
    restaurantInfo.sectionTitle = {
      _type: TYPE_TITLE,
      [KEY_DESKTOP_TITLE]: excelData?.restaurantDetailsDesktopTitle
        ?.split("|")
        ?.map((item) => item?.trim()),
      [KEY_MOBILE_TITLE]: excelData?.restaurantDetailsMobileTitle
        ?.split("|")
        ?.map((item) => item?.trim()),
    };
  } else {
    doc?.hotelDetailDiningPage?.restaurantInfo?.sectionTitle &&
      (restaurantInfo.sectionTitle =
        doc?.hotelDetailDiningPage?.restaurantInfo?.sectionTitle);
  }

  //restaurantInfo - restaurantDetailsDescription
  if (excelData?.restaurantDetailsDescription) {
    restaurantInfo.description = excelData?.restaurantDetailsDescription;
  } else {
    doc?.hotelDetailDiningPage?.restaurantInfo?.description &&
      (restaurantInfo.description =
        doc?.hotelDetailDiningPage?.restaurantInfo?.description);
  }
  hotelDetailDiningPage.restaurantInfo = restaurantInfo;

  //locationBasedRestaurants
  if (
    excelData?.locationBasedBasicInfoTitle ||
    excelData?.locationBasedBasicInfoSubTitle ||
    excelData?.locationBasedBasicInfoDescription
  ) {
    locationBasedRestaurants.basicInfo = getBasicDetails({
      title: excelData?.locationBasedBasicInfoTitle,
      subTitle: excelData?.locationBasedBasicInfoSubTitle,
      description: excelData?.locationBasedBasicInfoDescription,
      media:
        doc?.hotelDetailDiningPage?.locationBasedRestaurants?.basicInfo?.media,
      specifications:
        doc?.hotelDetailDiningPage?.locationBasedRestaurants?.basicInfo
          ?.specifications,
    });
  } else {
    doc?.hotelDetailDiningPage?.locationBasedRestaurants?.basicInfo &&
      (locationBasedRestaurants.basicInfo =
        doc?.hotelDetailDiningPage?.locationBasedRestaurants?.basicInfo);
  }

  //locationBasedRestaurants - sectionTitle
  if (
    excelData?.locationBasedSectionDesktopTitle ||
    excelData?.locationBasedSectionMobileTitle
  ) {
    locationBasedRestaurants.sectionTitle = {
      _type: TYPE_TITLE,
      [KEY_DESKTOP_TITLE]: excelData?.locationBasedSectionDesktopTitle
        ?.split("|")
        ?.map((item) => item?.trim()),
      [KEY_MOBILE_TITLE]: excelData?.locationBasedSectionMobileTitle
        ?.split("|")
        ?.map((item) => item?.trim()),
    };
  } else {
    doc?.hotelDetailDiningPage?.locationBasedRestaurants?.sectionTitle &&
      (locationBasedRestaurants.sectionTitle =
        doc?.hotelDetailDiningPage?.locationBasedRestaurants?.sectionTitle);
  }

  //locationBasedRestaurants - locationBasedDescription
  if (excelData?.locationBasedDescription) {
    locationBasedRestaurants.description = excelData?.locationBasedDescription;
  } else {
    doc?.hotelDetailDiningPage?.locationBasedRestaurants?.description &&
      (locationBasedRestaurants.description =
        doc?.hotelDetailDiningPage?.locationBasedRestaurants?.description);
  }
  hotelDetailDiningPage.locationBasedRestaurants = locationBasedRestaurants;

  newDoc.hotelDetailDiningPage = hotelDetailDiningPage;
  return newDoc;
}

function getBasicDetails(
  { title, subTitle, description, specifications, media },
  returnData: any = { _type: TYPE_BASICDETAILS },
) {
  title && (returnData.title = title);
  subTitle && (returnData.subTitle = subTitle);
  description && (returnData.description = description);
  specifications && (returnData.specifications = specifications);
  media && (returnData.media = media);
  return returnData;
}
export { getRestaurantDoc };
