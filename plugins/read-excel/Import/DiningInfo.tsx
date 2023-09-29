import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { finalDiningInfoObj } from "../dynamic";
import { Create, Update, fetchByType } from "../utils";

function DiningInfo() {
  const [excelData, setExcelData] = useState(null);
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
        // const columns = XLSX.utils.sheet_to_json(worksheet, { header: 1 })[0];

        setExcelData(
          jsonData.map((data) => {
            return data;
          }),
        );
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const migrateExcelData = async () => {
    const res = await fetchByType({
      title: excelData[0].title,
      type: "signatureDining",
    });

    const modData = finalDiningInfoObj({
      title: excelData[0].title,
      description: excelData[0].description,
      dinRoomsArr: excelData,
      response: res,
    });

    if (res) {
      try {
        // Update
        const updateRes = await Update({
          id: res._id,
          data: modData,
        });
        console.log(updateRes);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        // Create
        const createRes = await Create({
          doc: { ...modData, _type: "signatureDining" },
        });
        console.log(createRes);
      } catch (err) {
        console.error(err);
      }
    }
  };
  function resetFile(): void {
    ref.current.value = "";
    setExcelData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {excelData != null && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {excelData != null && (
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

export default DiningInfo;
