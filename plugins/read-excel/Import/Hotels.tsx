import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "../client";
import { getHotelDocument, getHotelQuery } from "../utils";
import { ImportComponent } from "../types";

function extractDestinationData({ data }, returnObject: any = {}) {
  data?.hotelName && (returnObject.hotelName = data?.hotelName?.trim());
  data?.hotelId && (returnObject.hotelId = data?.hotelId?.trim());
  data?.identifier && (returnObject.identifier = data?.identifier?.trim());
  data?.hotelNavigation &&
    (returnObject.hotelNavigation = data?.hotelNavigation?.trim());
  data?.brandName && (returnObject.brandName = data?.brandName?.trim());
  data?.brandId && (returnObject.brandId = data?.brandId?.trim());
  data?.hotelDescription &&
    (returnObject.hotelDescription = data?.hotelDescription?.trim());
  data?.hotelPath && (returnObject.hotelPath = data?.hotelPath?.trim());
  data?.gcCategory && (returnObject.gcCategory = data?.gcCategory?.trim());
  data?.searchTaxonomies &&
    (returnObject.searchTaxonomies = data?.searchTaxonomies?.trim());
  data?.hotelSubType &&
    (returnObject.hotelSubType = data?.hotelSubType?.trim());
  data?.hotelBannerDesktopTitle &&
    (returnObject.hotelBannerDesktopTitle =
      data?.hotelBannerDesktopTitle?.split("|"));
  data?.hotelBannerMobileTitle &&
    (returnObject.hotelBannerMobileTitle =
      data?.hotelBannerMobileTitle?.split("|"));
  data?.hotelOverview &&
    (returnObject.hotelOverview = data?.hotelOverview?.trim());
  data?.hotelAddress &&
    (returnObject.hotelAddress = data?.hotelAddress?.trim());
  data?.hotelContact &&
    (returnObject.hotelContact = data?.hotelContact?.trim());
  data?.hotelAvailability &&
    (returnObject.hotelAvailability = data?.hotelAvailability?.trim());
  data?.hotelFacilities &&
    (returnObject.hotelFacilities = data?.hotelFacilities?.trim());
  data?.hotelAwards && (returnObject.hotelAwards = data?.hotelAwards?.trim());
  data?.hotelSocialInfo &&
    (returnObject.hotelSocialInfo = data?.hotelSocialInfo?.trim());
  data?.hotelRooms && (returnObject.hotelRooms = data?.hotelRooms?.trim());
  data?.hotelHighlights &&
    (returnObject.hotelHighlights = data?.hotelHighlights?.trim());
  data?.hotelExclusiveOffersDining &&
    (returnObject.hotelExclusiveOffersDining =
      data?.hotelExclusiveOffersDining?.trim());
  data?.hotelExclusiveOffersWellness &&
    (returnObject.hotelExclusiveOffersWellness =
      data?.hotelExclusiveOffersWellness?.trim());
  data?.hotelExclusiveOffersRooms &&
    (returnObject.hotelExclusiveOffersRooms =
      data?.hotelExclusiveOffersRooms?.trim());
  data?.hotelOffers && (returnObject.hotelOffers = data?.hotelOffers?.trim());
  data?.hotelHolidays &&
    (returnObject.hotelHolidays = data?.hotelHolidays?.trim());
  data?.hotelSignatureDining &&
    (returnObject.hotelSignatureDining = data?.hotelSignatureDining?.trim());
  data?.hotelEventVenues &&
    (returnObject.hotelEventVenues = data?.hotelEventVenues?.trim());
  data?.hotelWellness &&
    (returnObject.hotelWellness = data?.hotelWellness?.trim());
  data?.hotelExperiences &&
    (returnObject.hotelExperiences = data?.hotelExperiences?.trim());
  data?.hotelGallery &&
    (returnObject.hotelGallery = data?.hotelGallery?.trim());
  data?.hotelAttractions &&
    (returnObject.hotelAttractions = data?.hotelAttractions?.trim());
  // data?.hotelDocuments && (returnObject.hotelDocuments = data?.hotelDocuments);
  return returnObject;
}

function Hotels({ callBack, getLoader }: ImportComponent) {
  const ref: any = useRef();
  const [hotels, setHotels] = useState([]);
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
          setHotels((prevData) => [
            ...prevData,
            extractDestinationData({ data: data }),
          ]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(hotels);

  const migrateExcelData = async (callBack, UpdateLoader) => {
    callBack();
    UpdateLoader({
      status: true,
      message: "Processing Import!!",
    });
    hotels?.map(async (hotel, index) => {
      await client
        .fetch(
          getHotelQuery({
            identifierKey: "hotelName",
            identifierValue: hotel?.hotelName,
          }),
        )
        .then(async (res) => {
          if (res?.length > 0) {
            await res.map(async (doc) => {
              await updateDocument(hotel, doc, index, callBack);
            });
          } else {
            await createDocument(hotel, index, callBack);
          }
        })
        .catch((error) => console.log(error));
      UpdateLoader({ status: false });
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setHotels([]);
    callBack();
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {hotels?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {hotels?.length != 0 && (
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
  const updatedDoc = await getHotelDocument({
    excelData: data,
    document: document,
  });
  console.log("update", document?.hotelName);
  const response = await client
    .patch(document._id)
    .set({ ...updatedDoc })
    .commit()
    .then((res) => {
      console.log(index + 1, res?.hotelName + " Updated!");
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
        err,
      );
      return {
        status: "Failed to Update",
        response: { _id: document._id, title: data?.title, error: err },
      };
    });
  callBack(response);
}

async function createDocument(data: any, index, callBack: Function) {
  const newDoc = await getHotelDocument({ excelData: data });
  console.log("Creating ", newDoc?.hotelName);
  const response = await client
    .create(newDoc)
    .then((res) => {
      console.log(index + 1, "Created document, id = ", res._id, res.hotelName);
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

export default Hotels;
