import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { customAlphabet } from "nanoid";
import { client } from "../client";
import { TYPE_EXCLUSIVE_OFFERS, TYPE_TITLE } from "../constants";

function extractDestinationData({ data }, returnObject: any = {}) {
  data?.title && (returnObject.title = data?.title);
  data?.description && (returnObject.description = data?.description);
  data?.desktopTitle &&
    (returnObject.desktopTitle = data?.desktopTitle?.split("|"));
  data?.mobileTitle &&
    (returnObject.mobileTitle = data?.mobileTitle?.split("|"));
  return returnObject;
}

function ExclusiveOffers() {
  const ref: any = useRef();
  const [exclusiveOffersData, setExclusiveOffersData] = useState([]);
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
          setExclusiveOffersData((prevData) => [
            ...prevData,
            extractDestinationData({ data: data }),
          ]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(exclusiveOffersData);

  const migrateExcelData = async () => {
    exclusiveOffersData?.map(async (item, index) => {
      await client
        .fetch(
          `*[_type == "${TYPE_EXCLUSIVE_OFFERS}" && title == "${item?.title}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {
            const updatedDoc = getDocument({ excelData: item, document: res });
            await client
              .patch(res._id)
              .set({ ...updatedDoc })
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
            await client
              .create(getDocument({ excelData: item }))
              .then((res) => {
                console.log("Created document, id = ", res._id, res.title);
              })
              .catch((err) => console.log("error", err));
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setExclusiveOffersData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {exclusiveOffersData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {exclusiveOffersData?.length != 0 && (
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
  if (!document) {
    returnData._type = TYPE_EXCLUSIVE_OFFERS;
    returnData.title = excelData?.title;
  }
  returnData.sectionTitle = {
    _type: TYPE_TITLE,
  };
  //description
  if (document?.description) {
    document?.description == excelData?.description
      ? (returnData.description = document.description)
      : (returnData.description = excelData?.description);
  } else {
    returnData.description = excelData?.description;
  }
  //sectionTitle - mobileTitle
  if (excelData?.mobileTitle?.length > 0) {
    returnData.sectionTitle.mobileTitle = excelData?.mobileTitle;
  }
  //sectionTitle - desktopTitle
  if (excelData?.desktopTitle?.length > 0) {
    returnData.sectionTitle.desktopTitle = excelData?.desktopTitle;
  }
  return returnData;
}

export default ExclusiveOffers;
