import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "@sanity/ui";
import { client } from "./client";
import { QUERY_HOTELS_BANNER_IMAGES } from "./constants";
function ExportExcel({getLoader}) {
  return <Button onClick={(e) => fetchBannerImages()}>Export</Button>;
}

const exportToExcel = (excelData, fileName) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const ws = XLSX.utils.json_to_sheet(excelData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};

async function fetchBannerImages() {
  try {
    await client.fetch(QUERY_HOTELS_BANNER_IMAGES).then((res) => {
      const hotels = res?.map((hotel, index) => {
        const hotelKeys = Object.keys(hotel);
        const hotelObjects = hotelKeys?.map((key) => {
          if (hotel[key]?.bannerImage) {
            const image =
              hotel[key]?.bannerImage[0]?.imageAsset?.image?.[0]?.asset?._ref;
            const largeImage =
              hotel[key]?.bannerImage[0]?.imageAsset?.largeImage?.[0]?.asset
                ?._ref;
            const imageAsset = {
              [`${key}Image`]: image ? image : "",
              [`${key}LargeImage`]: largeImage ? largeImage : "",
            };
            return imageAsset;
          } else {
            return {
              [`${key}Image`]: "",
              [`${key}LargeImage`]: "",
            };
          }
        });

        const newObj = {};

        hotelObjects.map((a) => {
          for (const k in a) {
            newObj[k] = a[k];
          }
        });
        return { ...newObj, title: hotel.hotelName };
      });
      console.log("hotels", hotels);
      exportToExcel(hotels, "Hotels BannerImages");
    });
  } catch (error) {
    console.log("Error", error);
  }
}

export default ExportExcel;
