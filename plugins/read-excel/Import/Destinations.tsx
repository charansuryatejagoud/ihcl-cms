import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "../client";
import {
  compareValues,
  extractDestinationData,
  getBanner,
  getMediaInput,
} from "../utils";
import {
  KEY_DESKTOP_TITLE,
  KEY_MOBILE_TITLE,
  TYPE_DESTINATION,
  TYPE_TAB_INFO,
  TYPE_TITLE,
} from "../constants";
import { ImportComponent } from "../types";

function Destinations({ callBack, getLoader }: ImportComponent) {
  const ref: any = useRef();
  const [destinationsData, setDestinationsData] = useState([]);
  const { UpdateLoader } = getLoader();

  const handleFile = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        jsonData.map((data: any) => {
          setDestinationsData((prevData) => [
            ...prevData,
            extractDestinationData(data),
          ]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(destinationsData);

  const migrateExcelData = async (callBack, UpdateLoader) => {
    callBack();
    UpdateLoader({
      status: true,
      message: "Processing Import!!",
    });
    try {
      await destinationsData?.map(async (destination, destinationIndex) => {
        await client
          .fetch(
            `*[_type == "${TYPE_DESTINATION}" && name == "${destination?.title?.trim()}"]{...}`,
          )
          .then(async (res) => {
            if (res?.length > 0) {
              await res.map(async (doc) => {
                await updateDocument(
                  destination,
                  doc,
                  destinationIndex,
                  callBack,
                );
              });
            } else {
              await createDocument(destination, destinationIndex, callBack);
            }
          });
      });
      UpdateLoader({ status: false });
    } catch (error) {
      UpdateLoader({ status: false });
      console.log("Error", error);
    }
  };

  function resetFile(): void {
    ref.current.value = "";
    setDestinationsData([]);
    callBack();
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {destinationsData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {destinationsData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="Migrate excel data"
          onClick={() => {
            migrateExcelData(callBack, UpdateLoader);
          }}
        />
      )}
    </Flex>
  );
}

async function updateDocument(
  data: any,
  document: any,
  index,
  callBack: Function,
) {
  // const d = getDestinationsDoc({ data: data, doc: document });
  const updatedDoc = getDestinationsDoc({ excelData: data, doc: document });
  console.log("update", updatedDoc);
  const response = await client
    .patch(document._id)
    .set({ ...updatedDoc })
    .commit()
    .then((res) => {
      console.log(index + 1, res?.name + " Updated!", res._id);
      return {
        status: "Updated",
        response: res,
      };
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        document._id,
        "Error : ",
        err.message,
      );
      return {
        status: "Failed to Update",
        response: { _id: document._id, title: data?.title, error: err },
      };
    });
  callBack(response);
}

async function createDocument(data: any, index, callBack: Function) {
  const response = await client
    .create(getDestinationsDoc({ excelData: data }))
    .then((res) => {
      console.log(index + 1, "Created document, id = ", res._id, res.name);
      return {
        status: "Created",
        response: res,
      };
    })
    .catch((err) => {
      console.log("error", err);
      return {
        status: "Failed to Create",
        response: { _id: null, title: data?.title, error: err },
      };
    });
  callBack(response);
}

function getDestinationsDoc(
  { excelData, doc = null, type = TYPE_DESTINATION },
  newDoc: any = {},
) {
  if (!doc) {
    newDoc._type = type;
    newDoc.name = excelData?.title?.trim();
  }
  if (excelData?.bannerDesktopTitle || excelData?.bannerMobileTitle) {
    newDoc.bannerTitle = {
      _type: TYPE_TITLE,
      [KEY_DESKTOP_TITLE]: [...excelData?.bannerDesktopTitle],
      [KEY_MOBILE_TITLE]: [...excelData?.bannerMobileTitle],
    };
  }
  //id
  const id = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "id",
  });
  id && (newDoc.id = id);
  //identifier
  const identifier = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "identifier",
  });
  identifier && (newDoc.identifier = identifier);
  //description
  const description = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "description",
  });
  description && (newDoc.description = description);
  //destinationURL
  const destinationURL = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "destinationURL",
  });
  destinationURL && (newDoc.destinationURL = destinationURL);
  //country
  const country = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "country",
  });
  country && (newDoc.country = country);
  //city
  const city = compareValues({
    excelData: excelData,
    documentData: doc,
    key: "city",
  });
  city && (newDoc.city = city);
  //diningTab
  const diningTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "diningTab",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "diningBannerImage",
    bannerDeskTopKey: "diningBannerLargeImage",
    descriptionKey: "diningDescription",
    mobileTitleKey: "diningMobileTitle",
    desktopTitleKey: "diningDesktopTitle",
  });
  diningTab && (newDoc.diningTab = diningTab);
  //experiencesTab
  const experiencesTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "experiencesTab",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "experiencesTabBannerImage",
    bannerDeskTopKey: "experiencesTabBannerLargeImage",
    descriptionKey: "experiencesTabDescription",
    mobileTitleKey: "experiencesTabMobileTitle",
    desktopTitleKey: "experiencesTabDesktopTitle",
  });
  experiencesTab && (newDoc.experiencesTab = experiencesTab);
  //featuredHolidays
  const featuredHolidays = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "featuredHolidays",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "featuredHolidaysBannerImage",
    bannerDeskTopKey: "featuredHolidaysBannerLargeImage",
    descriptionKey: "featuredHolidaysDescription",
    mobileTitleKey: "featuredHolidaysMobileTitle",
    desktopTitleKey: "featuredHolidaysDesktopTitle",
  });
  featuredHolidays && (newDoc.featuredHolidays = featuredHolidays);
  //holidaysTab
  const holidaysTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "holidaysTab",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "holidaysTabBannerImage",
    bannerDeskTopKey: "holidaysTabBannerLargeImage",
    descriptionKey: "holidaysTabDescription",
    mobileTitleKey: "holidaysTabMobileTitle",
    desktopTitleKey: "holidaysTabDesktopTitle",
  });
  holidaysTab && (newDoc.holidaysTab = holidaysTab);
  //hotelsTab
  const hotelsTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "hotelsTab",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "hotelsTabBannerImage",
    bannerDeskTopKey: "hotelsTabBannerLargeImage",
    descriptionKey: "hotelsTabDescription",
    mobileTitleKey: "hotelsTabMobileTitle",
    desktopTitleKey: "hotelsTabDesktopTitle",
  });
  hotelsTab && (newDoc.hotelsTab = hotelsTab);
  //journeys
  const journeys = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "journeys",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "journeysBannerImage",
    bannerDeskTopKey: "journeysBannerLargeImage",
    descriptionKey: "journeysDescription",
    mobileTitleKey: "journeysMobileTitle",
    desktopTitleKey: "journeysDesktopTitle",
  });
  journeys && (newDoc.journeys = journeys);
  //offers
  const offers = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "offers",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "offersTabBannerImage",
    bannerDeskTopKey: "offersTabBannerLargeImage",
    descriptionKey: "offersTabDescription",
    mobileTitleKey: "offersTabMobileTitle",
    desktopTitleKey: "offersTabDesktopTitle",
  });
  offers && (newDoc.offers = offers);
  //spaTab
  const spaTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "spaTab",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "spaTabBannerImage",
    bannerDeskTopKey: "spaTabBannerLargeImage",
    descriptionKey: "spaTabDescription",
    mobileTitleKey: "spaTabMobileTitle",
    desktopTitleKey: "spaTabDesktopTitle",
  });
  spaTab && (newDoc.spaTab = spaTab);
  //treatments
  const treatments = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "treatments",
    excelData: excelData,
    doc: doc,
    bannerMobileKey: "treatmentsTabBannerImage",
    bannerDeskTopKey: "treatmentsTabBannerLargeImage",
    descriptionKey: "treatmentsTabDescription",
    mobileTitleKey: "treatmentsTabMobileTitle",
    desktopTitleKey: "treatmentsTabDesktopTitle",
  });
  treatments && (newDoc.treatments = treatments);
  return newDoc;
}

function getTabInfo(
  {
    _type,
    itemKey,
    excelData,
    doc = null,
    bannerMobileKey = null,
    bannerDeskTopKey = null,
    descriptionKey = null,
    mobileTitleKey = null,
    desktopTitleKey = null,
  },
  initialData: any = {},
) {
  if (
    !excelData?.[bannerDeskTopKey] &&
    !excelData?.[bannerMobileKey] &&
    !excelData?.[descriptionKey] &&
    !excelData?.[desktopTitleKey]
  ) {
    return null;
  } else {
    initialData._type = _type;
    initialData.sectionTitle = {
      _type: TYPE_TITLE,
    };
    //description
    if (doc?.[itemKey]?.description) {
      doc?.[itemKey]?.description == excelData?.[descriptionKey]
        ? (initialData.description = doc?.[itemKey]?.description)
        : (initialData.description = excelData?.[descriptionKey]);
    } else {
      initialData.description = excelData?.[descriptionKey];
    }
    //sectionTitle - mobileTitle
    if (excelData?.[mobileTitleKey]?.length > 0) {
      initialData.sectionTitle.mobileTitle = excelData?.[mobileTitleKey];
    }
    //sectionTitle - desktopTitle
    if (excelData?.[desktopTitleKey]?.length > 0) {
      initialData.sectionTitle.desktopTitle = excelData?.[desktopTitleKey];
    }
    //bannerImage
    if (
      excelData?.[bannerMobileKey]?.length > 0 ||
      excelData?.[bannerDeskTopKey]?.length > 0
    ) {
      const bannerData = getBanner({
        mobileData: excelData?.[bannerMobileKey],
        deskTopData: excelData?.[bannerDeskTopKey],
      });
      bannerData?.length > 0 &&
        (initialData.bannerImage = getMediaInput({
          mediaData: bannerData,
        }));
    } else {
      if (doc?.[itemKey]?.bannerImage) {
        initialData.bannerImage = doc?.[itemKey]?.bannerImage;
      }
    }
    return initialData;
  }
}
export default Destinations;
