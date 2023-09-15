import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "./client";
import { extractDestinationData, getBanner, getMediaInput } from "./utils";
import {
  KEY_DESKTOP_TITLE,
  KEY_MOBILE_TITLE,
  TYPE_DESTINATION,
  TYPE_TAB_INFO,
  TYPE_TITLE,
} from "./constants";

function Destinations() {
  const ref: any = useRef();
  const [destinationsData, setDestinationsData] = useState([]);

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

  const migrateExcelData = async () => {
    await destinationsData?.map(async (destination, destinationIndex) => {
      await client
        .fetch(
          `*[_type == "${TYPE_DESTINATION}" && name == "${destination?.title?.trim()}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {
            await updateDocument(destination, res, destinationIndex);
          } else {
            await createDocument(destination, destinationIndex);
          }
        });
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setDestinationsData([]);
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
          onClick={migrateExcelData}
        />
      )}
    </Flex>
  );
}

async function updateDocument(data: any, document: any, index) {
  // const d = getDestinationsDoc({ data: data, doc: document });
  const updatedDoc = getDestinationsDoc({ data: data, doc: document });
  console.log("update", updatedDoc);
  await client
    .patch(document._id)
    .set({ ...updatedDoc })
    .commit()
    .then((res) => {
      console.log(index + 1, res?.name + " Updated!", res._id);
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        document._id,
        "Error : ",
        err.message,
      );
    });
}

async function createDocument(data: any, index) {
  await client
    .create(getDestinationsDoc({ data: data }))
    .then((res) => {
      console.log(index + 1, "Created document, id = ", res._id, res.name);
    })
    .catch((err) => console.log("error", err));
}

function getDestinationsDoc({ data, doc = null, type = TYPE_DESTINATION }) {
  let newDoc: any = {
    name: data?.title,
    id: doc?.id ? (doc?.id == data?.id ? doc.id : data?.id) : data?.id,
    identifier: doc?.identifier
      ? doc?.identifier == data?.identifier
        ? doc.identifier
        : data?.identifier
      : data?.identifier,
    description: doc?.description
      ? doc?.description == data?.description
        ? doc.description
        : data?.description
      : data?.description,
    destinationURL: doc?.destinationURL
      ? doc?.destinationURL == data?.destinationURL
        ? doc.destinationURL
        : data?.destinationURL
      : data?.destinationURL,
    country: doc?.country
      ? doc?.country == data?.country
        ? doc.country
        : data?.country
      : data?.country,
    city: doc?.city
      ? doc?.city == data?.city
        ? doc.city
        : data?.city
      : data?.city,
    bannerTitle: {
      _type: TYPE_TITLE,
      [KEY_DESKTOP_TITLE]: [...data?.bannerDesktopTitle],
      [KEY_MOBILE_TITLE]: [...data?.bannerMobileTitle],
    },
  };
  !doc && (newDoc._type = type);
  newDoc.diningTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "diningTab",
    excelData: data,
    doc: doc,
    bannerMobileKey: "diningBannerImage",
    bannerDeskTopKey: "diningBannerLargeImage",
    descriptionKey: "diningDescription",
    mobileTitleKey: "diningMobileTitle",
    desktopTitleKey: "diningDesktopTitle",
  });
  newDoc.experiencesTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "experiencesTab",
    excelData: data,
    doc: doc,
    bannerMobileKey: "experiencesTabBannerImage",
    bannerDeskTopKey: "experiencesTabBannerLargeImage",
    descriptionKey: "experiencesTabDescription",
    mobileTitleKey: "experiencesTabMobileTitle",
    desktopTitleKey: "experiencesTabDesktopTitle",
  });
  newDoc.featuredHolidays = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "featuredHolidays",
    excelData: data,
    doc: doc,
    bannerMobileKey: "featuredHolidaysBannerImage",
    bannerDeskTopKey: "featuredHolidaysBannerLargeImage",
    descriptionKey: "featuredHolidaysDescription",
    mobileTitleKey: "featuredHolidaysMobileTitle",
    desktopTitleKey: "featuredHolidaysDesktopTitle",
  });
  newDoc.holidaysTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "holidaysTab",
    excelData: data,
    doc: doc,
    bannerMobileKey: "holidaysTabBannerImage",
    bannerDeskTopKey: "holidaysTabBannerLargeImage",
    descriptionKey: "holidaysTabDescription",
    mobileTitleKey: "holidaysTabMobileTitle",
    desktopTitleKey: "holidaysTabDesktopTitle",
  });
  newDoc.hotelsTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "hotelsTab",
    excelData: data,
    doc: doc,
    bannerMobileKey: "hotelsTabBannerImage",
    bannerDeskTopKey: "hotelsTabBannerLargeImage",
    descriptionKey: "hotelsTabDescription",
    mobileTitleKey: "hotelsTabMobileTitle",
    desktopTitleKey: "hotelsTabDesktopTitle",
  });
  newDoc.journeys = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "journeys",
    excelData: data,
    doc: doc,
    bannerMobileKey: "journeysBannerImage",
    bannerDeskTopKey: "journeysBannerLargeImage",
    descriptionKey: "journeysDescription",
    mobileTitleKey: "journeysMobileTitle",
    desktopTitleKey: "journeysDesktopTitle",
  });
  newDoc.offers = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "offers",
    excelData: data,
    doc: doc,
    bannerMobileKey: "offersTabBannerImage",
    bannerDeskTopKey: "offersTabBannerLargeImage",
    descriptionKey: "offersTabDescription",
    mobileTitleKey: "offersTabMobileTitle",
    desktopTitleKey: "offersTabDesktopTitle",
  });
  newDoc.spaTab = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "spaTab",
    excelData: data,
    doc: doc,
    bannerMobileKey: "spaTabBannerImage",
    bannerDeskTopKey: "spaTabBannerLargeImage",
    descriptionKey: "spaTabDescription",
    mobileTitleKey: "spaTabMobileTitle",
    desktopTitleKey: "spaTabDesktopTitle",
  });
  newDoc.treatments = getTabInfo({
    _type: TYPE_TAB_INFO,
    itemKey: "treatments",
    excelData: data,
    doc: doc,
    bannerMobileKey: "treatmentsTabBannerImage",
    bannerDeskTopKey: "treatmentsTabBannerLargeImage",
    descriptionKey: "treatmentsTabDescription",
    mobileTitleKey: "treatmentsTabMobileTitle",
    desktopTitleKey: "treatmentsTabDesktopTitle",
  });
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
  initialData._type = _type;
  initialData.sectionTitle = {
    _type: TYPE_TITLE,
  };
  //description
  if (doc?.description) {
    doc?.description == excelData?.[descriptionKey]
      ? (initialData.description = doc?.description)
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
export default Destinations;
