import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef", 12);

const bannerTitle = {
  _type: "title",
  desktopTitle: [],
  mobileTitle: [],
};

const bannerDiningInfo = ({ text }) => {
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
    (
      a: {
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
      },
      i: any,
    ) => {
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
        bannerDiningInfo({ text: a.bannerDiningInfoText }),
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
      (
        a: {
          privateDiningInfo: { diningInfo: any };
          restaurantInfo: { basicInfo: any };
        },
        i: any,
      ) => {
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
