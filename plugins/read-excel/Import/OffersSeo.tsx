import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "../client";
import { TYPE_OFFERS_PACKAGE } from "../constants";
import { compareValues } from "../utils";
import { ImportComponent } from "../types";

function extractOfferSeo({ data, prevData }) {
  const seoData: any = {};
  const index = prevData.findIndex(function (item: any) {
    return item.identifier == data.identifier?.trim();
  });
  data?.pageTitle && (seoData.pageTitle = data?.pageTitle?.trim());
  data?.seoDescription &&
    (seoData.seoDescription = data?.seoDescription?.trim());
  data?.seoKeywords && (seoData.seoKeywords = data?.seoKeywords?.trim());
  console.log("index", index);
  if (index == -1) {
    if (data?.hotelTitle) {
      return [
        ...prevData,
        {
          identifier: data?.identifier?.trim(),
          hotels: [{ hotelTitle: data?.hotelTitle?.trim(), ...seoData }],
        },
      ];
    }
    return [
      ...prevData,
      {
        identifier: data?.identifier?.trim(),
        hotels: [],
        ...seoData,
      },
    ];
  } else {
    if (!data?.hotelTitle) {
      prevData[index] = {
        ...prevData[index],
        ...seoData,
      };
      return [...prevData];
    }
    (prevData[index].identifier = data?.identifier?.trim()),
      (prevData[index].hotels = [
        ...prevData?.[index]?.hotels,
        {
          hotelTitle: data?.hotelTitle?.trim(),
          ...seoData,
        },
      ]);
    return [...prevData];
  }
}

function OffersSeo({ callBack, getLoader }: ImportComponent) {
  const ref: any = useRef();
  const [offersSeoData, setOffersSeoData] = useState([]);
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
          setOffersSeoData((prevData) => {
            return extractOfferSeo({ data: data, prevData: prevData });
          });
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(offersSeoData);

  const migrateExcelData = async (callBack, UpdateLoader) => {
    callBack();
    UpdateLoader({
      status: true,
      message: "Processing Import!!",
    });
    await offersSeoData.map(async (offer, index) => {
      await client
        .fetch(
          `*[_type == "offerPackages" && identifier == "${offer?.identifier?.trim()}"]
          {
            _id,
            identifier,
            hotels[]{
              ...,
              "hotelDetails":participatingHotels[0]->{"title":hotelName}
            }
          }
          `,
        )
        .then(async (res) => {
          if (res?.length > 0) {
            await res.map(async (doc) => {
              await updateDocument(offer, doc, index, callBack);
            });
          } else {
            callBack({
              status: "Document not found in sanity",
              response: { _id: null, title: offer?.identifier },
            });
            // await createDocument(offer, index, callBack);
          }
        });
      UpdateLoader({ status: false });
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setOffersSeoData([]);
    callBack();
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {offersSeoData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {offersSeoData?.length != 0 && (
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
  index: number,
  callBack: Function,
) {
  console.log("updating ", document._id, document?.identifier);
  const d = getOffersDoc({ excelData: data, document: document });
  console.log("==d", d);
  const response = await client
    .patch(document._id)
    .set({ ...d })
    .commit()
    .then((res) => {
      console.log(index + 1, " Updated!", res?.title);
      return {
        status: "Updated",
        response: res,
      };
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed at: ",
        document._id,
        data?.identifier,
        "Error : ",
        err.message,
      );
      return {
        status: "Failed to Update",
        response: {
          _id: document._id,
          identifier: data?.identifier,
          error: err,
        },
      };
    });
  callBack(response);
}

async function createDocument(data: any, index: number, callBack: Function) {
  console.log("Creating...", data.identifier);
  const response = await client
    .create(getOffersDoc({ excelData: data }))
    .then((res) => {
      console.log(index + 1, "Created  = ", data.identifier, res._id);
      return {
        status: "Created",
        response: res,
      };
    })
    .catch((err) => {
      console.log("failed to create", data.identifier);
      console.log("err ", err);
      return {
        status: "Failed to Create",
        response: { _id: null, identifier: data?.identifier, error: err },
      };
    });
  callBack(response);
}

function getOffersDoc(
  { excelData, document = null, type = TYPE_OFFERS_PACKAGE },
  returnObject: any = {},
) {
  if (!document) {
    returnObject._type = type;
    returnObject.identifier = excelData?.identifier?.trim();
  }

  //pageTitle
  const pageTitle = compareValues({
    excelData: excelData,
    documentData: document,
    key: "pageTitle",
  });
  pageTitle && (returnObject.pageTitle = pageTitle);

  //seoDescription
  const seoDescription = compareValues({
    excelData: excelData,
    documentData: document,
    key: "seoDescription",
  });
  seoDescription && (returnObject.seoDescription = seoDescription);

  //seoKeywords
  const seoKeywords = compareValues({
    excelData: excelData,
    documentData: document,
    key: "seoKeywords",
  });
  seoKeywords && (returnObject.seoKeywords = seoKeywords);

  //hotels
  returnObject.hotels = document?.hotels?.map((hotel) => {
    const { hotelDetails, ...rest } = hotel;
    const index = excelData?.hotels?.findIndex(function (item: any) {
      return item.hotelTitle == hotelDetails.title;
    });
    if (index > -1) {
      return {
        ...rest,
        pageTitle: excelData?.hotels?.[index]?.pageTitle,
        seoDescription: excelData?.hotels?.[index]?.seoDescription,
        seoKeywords: excelData?.hotels?.[index]?.seoKeywords,
      };
    } else {
      return rest;
    }
  });

  return returnObject;
}

export default OffersSeo;
