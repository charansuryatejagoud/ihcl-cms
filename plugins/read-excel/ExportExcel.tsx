import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "@sanity/ui";
import { client } from "./client";
function ExportExcel() {
  const exportToExcel = (csvData, fileName) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button onClick={(e) => exportToExcel([{ d1: "f", d2: "f" }], "demo")}>
      Export
    </Button>
  );
}

async function fetchBannerImages() {
  try {
    await client.fetch()
  } catch (error) {
    console.log("Error",error)
  }
}

export default ExportExcel;
