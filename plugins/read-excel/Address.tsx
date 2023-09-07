import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { TYPE_ADDRESS, TYPE_TITLE } from "./constants";
import { customAlphabet } from "nanoid";
import { client } from "./client";

function extractAddressData({ data }, returnObject: any = {}) {
  data?.hotelTitle && (returnObject.hotelTitle = data?.hotelTitle);
  data?.hotelIdentifier &&
    (returnObject.hotelIdentifier = data?.hotelIdentifier);
  data?.desktopTitle &&
    (returnObject.desktopTitle = data?.desktopTitle?.split("|"));
  data?.mobileTitle &&
    (returnObject.mobileTitle = data?.mobileTitle?.split("|"));
  if (
    data?.locationAndDirectionTitle ||
    data?.locationAndDirectionDescription ||
    data?.latitude ||
    data?.longitude
  ) {
    returnObject.locationAndDirectionInfo = {
      titles: data?.locationAndDirectionTitle?.split("|"),
      description: data?.locationAndDirectionDescription?.split("|"),
      latitude: data?.latitude,
      longitude: data?.longitude,
    };
  }
  data?.latitude && (returnObject.latitude = data?.latitude);
  data?.longitude && (returnObject.longitude = data?.longitude);
  data?.regionKey && (returnObject.regionKey = data?.regionKey);
  data?.pincode && (returnObject.pincode = data?.pincode);
  data?.locality && (returnObject.locality = data?.locality);
  data?.country && (returnObject.country = data?.country);
  data?.state && (returnObject.state = data?.state);
  data?.city && (returnObject.city = data?.city);
  data?.street && (returnObject.street = data?.street);
  data?.landmark && (returnObject.landmark = data?.landmark);
  data?.addressLine2 && (returnObject.addressLine2 = data?.addressLine2);
  data?.addressLine1 && (returnObject.addressLine1 = data?.addressLine1);
  data?.type && (returnObject.type = data?.type);
  return returnObject;
}

function Address() {
  const ref: any = useRef();
  const [locationsData, setLocationsData] = useState([]);
  const nanoid = customAlphabet("1234567890abcdef", 12);
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
          setLocationsData((prevData) => [
            ...prevData,
            extractAddressData({ data: data }),
          ]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(locationsData);

  const migrateExcelData = async () => {
    locationsData.map(async (location, index) => {
      await client
        .fetch(
          `*[_type == "address" && title == "${location.hotelTitle}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {
            console.log("updating ", res._id);
            await client
              .patch(res._id)
              .set({ ...getDocument({ excelData: location, document: res }) })
              .commit()
              .then((res) => {
                console.log(res?.title + " Updated!");
              })
              .catch((err) => {
                console.error(
                  "Oh no, the update failed: ",
                  res._id,
                  "Error : ",
                  err.message,
                );
              });
          } else {
            console.log("Creating...", location.hotelTitle);
            await client
              .create(getDocument({ excelData: location }))
              .then((res) => {
                console.log("Created  = ", location.hotelTitle, res._id);
              })
              .catch((err) => {
                console.log("failed to create", location.hotelTitle);
                console.log("err ", err);
              });
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setLocationsData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {locationsData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {locationsData?.length != 0 && (
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

function getDocument({ excelData, document = null }, returnData: any = {}) {
  const nanoid = customAlphabet("1234567890abcdef", 12);
  if (!document) {
    returnData._type = TYPE_ADDRESS;
    returnData.title = excelData?.hotelTitle;
  }
  returnData.sectionTitle = {
    _type: TYPE_TITLE,
  };
  //sectionTitle - mobileTitle
  if (excelData?.mobileTitle?.length > 0) {
    returnData.sectionTitle.mobileTitle = excelData?.mobileTitle;
  }
  //sectionTitle - desktopTitle
  if (excelData?.desktopTitle?.length > 0) {
    returnData.sectionTitle.desktopTitle = excelData?.desktopTitle;
  }
  //type
  returnData.type = compareValues({
    excelData: excelData,
    documentData: document,
    key: "type",
  });
  //addressLine1
  returnData.addressLine1 = compareValues({
    excelData: excelData,
    documentData: document,
    key: "addressLine1",
  });
  //addressLine2
  returnData.addressLine2 = compareValues({
    excelData: excelData,
    documentData: document,
    key: "addressLine2",
  });
  //landmark
  returnData.landmark = compareValues({
    excelData: excelData,
    documentData: document,
    key: "landmark",
  });
  //street
  returnData.street = compareValues({
    excelData: excelData,
    documentData: document,
    key: "street",
  });
  //city
  returnData.city = compareValues({
    excelData: excelData,
    documentData: document,
    key: "city",
  });
  //state
  returnData.state = compareValues({
    excelData: excelData,
    documentData: document,
    key: "state",
  });
  //country
  returnData.country = compareValues({
    excelData: excelData,
    documentData: document,
    key: "country",
  });
  //locality
  returnData.locality = compareValues({
    excelData: excelData,
    documentData: document,
    key: "locality",
  });
  //pincode
  returnData.pincode = compareValues({
    excelData: excelData,
    documentData: document,
    key: "pincode",
  });
  //regionKey
  returnData.regionKey = compareValues({
    excelData: excelData,
    documentData: document,
    key: "regionKey",
  });
  //longitude
  const longitude = compareValues({
    excelData: excelData,
    documentData: document,
    key: "longitude",
  });
  longitude && (returnData.longitude = String(longitude));
  //latitude
  const latitude = compareValues({
    excelData: excelData,
    documentData: document,
    key: "latitude",
  });
  latitude && (returnData.latitude = String(latitude));
  returnData.locationAndDirectionsInfo = returnData.locationAndDirectionsInfo =
    excelData.locationAndDirectionInfo?.titles?.map((title, infoIndex) => {
      return {
        _key: nanoid(),
        basicInfo: {
          _type: "basicDetails",
          description:
            excelData.locationAndDirectionInfo?.description[infoIndex],
          title: title,
        },
        locationDetails: {
          _type: "locationInfo",
          latitude: excelData.locationAndDirectionInfo?.latitude
            ? String(excelData.locationAndDirectionInfo?.latitude)
            : "",
          longitude: excelData.locationAndDirectionInfo?.longitude
            ? String(excelData.locationAndDirectionInfo?.longitude)
            : "",
        },
      };
    });
  return returnData;
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
  return;
}

export default Address;
