import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef", 12);

let key = "",
  value = "";

const specificationsObj = {
  _type: "contentSpecification",
  key: "",
  keyType: "string",
  value: "",
};

const sectionTitle = {
  _type: "title",
  desktopTitle: [],
  mobileTitle: [],
};

const diningRooms = (dinRoomsArr, response) =>
  dinRoomsArr.map((a, i) => {
    const diningRoomObj: any = {
      _key: nanoid(),
      _type: "diningInfo",
      basicInfo: {
        _type: "basicDetails",
        description: "",
        specifications: [],
        title: "",
      },
      url: "",
    };

    sectionTitle.desktopTitle = a.desktopTitle?.includes("|")
      ? a.desktopTitle.split("|")
      : [];
    sectionTitle.mobileTitle = a.mobileTitle?.includes("|")
      ? a.mobileTitle.split("|")
      : [];

    diningRoomObj.basicInfo.description = a.diningInfoDescription;
    diningRoomObj.basicInfo.title = a.diningInfoTitle;

    if (
      Array.isArray(response?.diningRooms) &&
      response?.diningRooms.length > 0
    ) {
      diningRoomObj.basicInfo.media = response.diningRooms.filter(
        (a) => a.basicInfo.title === diningRoomObj.basicInfo.title,
      );
    }

    diningRoomObj.url = a.diningInfoURL;

    for (const k in a) {
      if (k.includes("_key")) key = a[k];
      value = "";
      if (k.includes("_value")) value = a[k];
      if (key && value) {
        diningRoomObj.basicInfo.specifications.push({
          ...specificationsObj,
          key,
          value,
          _key: nanoid(),
        });
      }
    }
    return diningRoomObj;
  });

// Merge images from original response if exists
const mergeImagesIfExists = (dinRoomsArr, response) => {
  return diningRooms(dinRoomsArr, response).map((a, i) => {
    if (
      Array.isArray(response?.diningRooms) &&
      response?.diningRooms.length > 0 &&
      response.diningRooms[i].basicInfo.media
    ) {
      const basicInfo = {
        ...a.basicInfo,
        media: response.diningRooms[i].basicInfo.media,
      };

      return {
        ...a,
        basicInfo,
      };
    } else {
      return a;
    }
  });
};

export const finalDiningInfoObj = ({
  title,
  description,
  dinRoomsArr,
  response,
}) => {
  return {
    diningRooms: mergeImagesIfExists(dinRoomsArr, response),
    title,
    sectionTitle,
    description,
  };
};
