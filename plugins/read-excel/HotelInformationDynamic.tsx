import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "./client";
import {
  compareValues,
  filterNullValues,
  generateBulletPoints,
  generateFacilityInfo,
} from "./utils";
import { TYPE_AVAILABILITY, TYPE_TITLE } from "./constants";
import { customAlphabet } from "nanoid";

function extractHotelInformation({ data }, returnObject: any = {}) {
  data?.title && (returnObject.title = data?.title?.trim());
  data?.desktopTitle &&
    (returnObject.desktopTitle = data?.desktopTitle?.trim()?.split("|"));
  data?.mobileTitle &&
    (returnObject.mobileTitle = data?.mobileTitle?.trim()?.split("|"));
  data?.checkinTime && (returnObject.checkinTime = data?.checkinTime?.trim());
  data?.checkoutTime &&
    (returnObject.checkoutTime = data?.checkoutTime?.trim());
  data?.roomsInfo && (returnObject.roomsInfo = data?.roomsInfo?.trim());
  data?.diningInfo && (returnObject.diningInfo = data?.diningInfo?.trim());
  data?.wellnessInfo &&
    (returnObject.wellnessInfo = data?.wellnessInfo?.trim());
  data?.temperatureInfo &&
    (returnObject.temperatureInfo = data?.temperatureInfo?.trim());
  data?.hotelEssentialInfo &&
    (returnObject.hotelEssentialInfo = data?.hotelEssentialInfo?.trim());

  if (data?.facilityInfoTitle) {
    const facilityInfoTitle = filterNullValues(
      data?.facilityInfoTitle?.trim()?.split("|"),
    );
    returnObject.facilityInfoTitle = facilityInfoTitle ? facilityInfoTitle : [];
  }
  if (data?.facilityInfoIcon) {
    const facilityInfoIcon = filterNullValues(
      data?.facilityInfoIcon?.trim()?.split("|"),
    );
    returnObject.facilityInfoIcon = facilityInfoIcon ? facilityInfoIcon : [];
  }
  if (data?.facilityInfoList) {
    const facilityInfoList = filterNullValues(
      data?.facilityInfoList?.trim()?.split("|"),
    );
    returnObject.facilityInfoList = facilityInfoList
      ? facilityInfoList?.map((list) => list?.split("\\"))
      : [];
  }
  return returnObject;
}

function HotelInformation() {
  const [hotelData, setHotelData] = useState([]);
  const ref: any = useRef();
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
          setHotelData((prevData) => [
            ...prevData,
            extractHotelInformation({ data: data }),
          ]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(hotelData);

  const migrateExcelData = async () => {
    hotelData.map(async (hotel, index) => {
      await client
        .fetch(
          `*[_type == "availability" && title == "${hotel?.title?.trim()}"]{...}`,
        )
        .then(async (res) => {
          if (res?.length > 0) {
            await res.map(async (doc) => {
              await updateDocument(hotel, doc, index);
            });
          } else {
            await createDocument(hotel, index);
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setHotelData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref} />
      {hotelData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {hotelData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="Migrate Excel Data"
          onClick={migrateExcelData}
        />
      )}
    </Flex>
  );
}

async function updateDocument(data: any, doc: any, index: number) {
  console.log("updating ", doc?.title, doc._id);
  await client
    .patch(doc._id)
    .set({
      ...getHotelInformationDoc({
        excelData: data,
        document: doc,
      }),
    })
    .commit()
    .then((res) => {
      console.log(index + 1, res?.title + " Updated!", res?._id);
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        doc._id,
        "Error : ",
        err.message,
      );
    });
}

async function createDocument(data: any, index: number) {
  console.log("Creating...", data.title);
  await client
    .create(getHotelInformationDoc({ excelData: data }))
    .then((res) => {
      console.log(index + 1, "Created document", data?.title, res._id);
    })
    .catch((err) => {
      console.log("failed to create document, ", data?.title);
      console.log("err ", err);
    });
}

function getHotelInformationDoc(
  { excelData, document = null, type = TYPE_AVAILABILITY },
  returnObject: any = {},
) {
  if (!document) {
    returnObject._type = type;
    returnObject.title = excelData?.title?.trim();
  }
  if (
    excelData?.mobileTitle?.length > 0 ||
    excelData?.desktopTitle?.length > 0
  ) {
    returnObject.sectionTitle = {
      _type: TYPE_TITLE,
    };
  }
  //sectionTitle - mobileTitle
  if (excelData?.mobileTitle?.length > 0) {
    returnObject.sectionTitle.mobileTitle = excelData?.mobileTitle;
  }
  //sectionTitle - desktopTitle
  if (excelData?.desktopTitle?.length > 0) {
    returnObject.sectionTitle.desktopTitle = excelData?.desktopTitle;
  }
  //checkinTime
  const checkinTime = compareValues({
    excelData: excelData,
    documentData: document,
    key: "checkinTime",
  });
  checkinTime && (returnObject.checkinTime = checkinTime);
  //checkoutTime
  const checkoutTime = compareValues({
    excelData: excelData,
    documentData: document,
    key: "checkoutTime",
  });
  checkoutTime && (returnObject.checkoutTime = checkoutTime);
  //roomsInfo
  const roomsInfo = compareValues({
    excelData: excelData,
    documentData: document,
    key: "roomsInfo",
  });
  roomsInfo && (returnObject.roomsInfo = roomsInfo);
  //diningInfo
  const diningInfo = compareValues({
    excelData: excelData,
    documentData: document,
    key: "diningInfo",
  });
  diningInfo && (returnObject.diningInfo = diningInfo);
  //wellnessInfo
  const wellnessInfo = compareValues({
    excelData: excelData,
    documentData: document,
    key: "wellnessInfo",
  });
  wellnessInfo && (returnObject.wellnessInfo = wellnessInfo);
  //temperatureInfo
  const temperatureInfo = compareValues({
    excelData: excelData,
    documentData: document,
    key: "temperatureInfo",
  });
  temperatureInfo && (returnObject.temperatureInfo = temperatureInfo);
  //hotelEssentialInfo
  const hotelEssentialInfo = compareValues({
    excelData: excelData,
    documentData: document,
    key: "hotelEssentialInfo",
  });
  hotelEssentialInfo && (returnObject.hotelEssentialInfo = hotelEssentialInfo);
  //hotelInfo
  if (excelData?.facilityInfoTitle?.length > 0) {
    const hotelInfo = getHotelInfo({
      excelData: excelData,
      titleKey: "facilityInfoTitle",
      iconKey: "facilityInfoIcon",
      listKey: "facilityInfoList",
    });
    hotelInfo && (returnObject.hotelInfo = hotelInfo);
  } else {
    document?.hotelInfo && (returnObject.hotelInfo = document?.hotelInfo);
  }

  return returnObject;
}

function getHotelInfo({ excelData, titleKey, iconKey, listKey }) {
  const nanoid = customAlphabet("1234567890abcdef", 12);
  const data = excelData?.[titleKey]?.map((data, index) => {
    return generateFacilityInfo({
      title: excelData?.[titleKey]?.[index],
      _imageRef: excelData?.[iconKey]?.[index],
      _key: nanoid(),
      list: generateBulletPoints({
        data: excelData?.[listKey]?.[index],
        _key: nanoid(),
      }),
    });
  });
  return data?.length > 0 ? data : [];
}

export default HotelInformation;
