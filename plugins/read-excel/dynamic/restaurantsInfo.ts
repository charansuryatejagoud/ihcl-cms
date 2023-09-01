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

  if (title === "ALL DAY DINING") {
    icon = {
      _key: "b9a018260461",
      _type: "image",
      asset: {
        _ref: "image-7890b23be2941307e4417630c791cc0302459ac2-21x21-png",
        _type: "reference",
      },
    };
  } else if (title === "CUISINE") {
    icon = {
      _key: "4738329ebd16",
      _type: "image",
      asset: {
        _ref: "image-4e4e084da535cbe01ebed20bfaeb0d022042ffd4-24x24-png",
        _type: "reference",
      },
    };
  } else if (title === "DRESS CODE") {
    icon = {
      _key: "70994442d444",
      _type: "image",
      asset: {
        _ref: "image-a8f8671fe8f92635e7e7c0aa35ec4ae451deffe0-26x19-png",
        _type: "reference",
      },
    };
  } else if (title === "CONTACT") {
    icon = {
      _key: "b5c8c47c0600",
      _type: "image",
      asset: {
        _ref: "image-598c14538c94aef4ae4f7c4a2c26c071c338c4ed-14x20-png",
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
        _type: "object",
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
              title: availabilityTitle,
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
