import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "./client";
import { getHotelDocument, getHotelQuery } from "./utils";

function extractDestinationData({ data }, returnObject: any = {}) {
  data?.hotelName && (returnObject.hotelName = data?.hotelName);
  data?.hotelId && (returnObject.hotelId = data?.hotelId);
  data?.identifier && (returnObject.identifier = data?.identifier);
  data?.hotelNavigation &&
    (returnObject.hotelNavigation = data?.hotelNavigation);
  data?.brandName && (returnObject.brandName = data?.brandName);
  data?.brandId && (returnObject.brandId = data?.brandId);
  data?.hotelDescription &&
    (returnObject.hotelDescription = data?.hotelDescription);
  data?.hotelPath && (returnObject.hotelPath = data?.hotelPath);
  data?.gcCategory && (returnObject.gcCategory = data?.gcCategory);
  data?.searchTaxonomies &&
    (returnObject.searchTaxonomies = data?.searchTaxonomies);
  data?.hotelSubType && (returnObject.hotelSubType = data?.hotelSubType);
  data?.hotelBannerDesktopTitle &&
    (returnObject.hotelBannerDesktopTitle =
      data?.hotelBannerDesktopTitle?.split("|"));
  data?.hotelBannerMobileTitle &&
    (returnObject.hotelBannerMobileTitle =
      data?.hotelBannerMobileTitle?.split("|"));
  data?.hotelOverview && (returnObject.hotelOverview = data?.hotelOverview);
  data?.hotelAddress && (returnObject.hotelAddress = data?.hotelAddress);
  data?.hotelContact && (returnObject.hotelContact = data?.hotelContact);
  data?.hotelAvailability &&
    (returnObject.hotelAvailability = data?.hotelAvailability);
  data?.hotelFacilities &&
    (returnObject.hotelFacilities = data?.hotelFacilities);
  data?.hotelAwards && (returnObject.hotelAwards = data?.hotelAwards);
  data?.hotelSocialInfo &&
    (returnObject.hotelSocialInfo = data?.hotelSocialInfo);
  data?.hotelRooms && (returnObject.hotelRooms = data?.hotelRooms);
  data?.hotelHighlights &&
    (returnObject.hotelHighlights = data?.hotelHighlights);
  data?.hotelExclusiveOffersDining &&
    (returnObject.hotelExclusiveOffersDining =
      data?.hotelExclusiveOffersDining);
  data?.hotelExclusiveOffersWellness &&
    (returnObject.hotelExclusiveOffersWellness =
      data?.hotelExclusiveOffersWellness);
  data?.hotelExclusiveOffersRooms &&
    (returnObject.hotelExclusiveOffersRooms = data?.hotelExclusiveOffersRooms);
  data?.hotelOffers && (returnObject.hotelOffers = data?.hotelOffers);
  data?.hotelHolidays && (returnObject.hotelHolidays = data?.hotelHolidays);
  data?.hotelSignatureDining &&
    (returnObject.hotelSignatureDining = data?.hotelSignatureDining);
  data?.hotelEventVenues &&
    (returnObject.hotelEventVenues = data?.hotelEventVenues);
  data?.hotelWellness && (returnObject.hotelWellness = data?.hotelWellness);
  data?.hotelExperiences &&
    (returnObject.hotelExperiences = data?.hotelExperiences);
  data?.hotelGallery && (returnObject.hotelGallery = data?.hotelGallery);
  data?.hotelAttractions &&
    (returnObject.hotelAttractions = data?.hotelAttractions);
  // data?.hotelDocuments && (returnObject.hotelDocuments = data?.hotelDocuments);
  return returnObject;
}

function Hotels() {
  const ref: any = useRef();
  const [hotels, setHotels] = useState([]);

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

  const migrateExcelData = async () => {
    hotels?.map(async (hotel, index) => {
      await client
        .fetch(
          getHotelQuery({
            identifierKey: "hotelName",
            identifierValue: hotel?.hotelName,
          }),
        )
        .then(async (res) => {
          if (res) {
            const updatedDoc = await getHotelDocument({
              excelData: hotel,
              document: res,
            });
            console.log("update", res?.hotelName);
            await client
              .patch(res._id)
              .set({ ...updatedDoc })
              .commit()
              .then((res) => {
                console.log(index + 1, res?.hotelName + " Updated!");
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
            const newDoc = await getHotelDocument({ excelData: hotel });
            console.log("Creating ", newDoc?.hotelName);
            await client
              .create(newDoc)
              .then((res) => {
                console.log(
                  index + 1,
                  "Created document, id = ",
                  res._id,
                  res.hotelName,
                );
              })
              .catch((err) => console.log("error", err));
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setHotels([]);
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
          onClick={migrateExcelData}
        />
      )}
    </Flex>
  );
}

export default Hotels;
