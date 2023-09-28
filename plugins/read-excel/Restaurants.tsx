import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { ConvertJSONValuesToString } from "./utils";
import { getRestaurantDoc } from "./dynamic/restaurantsInfo";
import { ImportComponent } from "./types";
import { client } from "./client";
import { TYPE_RESTAURANT } from "./constants";

function Restaurants({ callBack, getLoader }: ImportComponent) {
  const [excelData, setExcelData] = useState([]);
  const { UpdateLoader } = getLoader();
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
        setExcelData(
          jsonData.map((data: object) => {
            return ConvertJSONValuesToString(data);
          }),
        );
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  console.log(excelData);

  const migrateExcelData = async (callBack, UpdateLoader) => {
    callBack();
    if (Array.isArray(excelData) && excelData.length > 0) {
      UpdateLoader({
        status: true,
        message: "Processing Import!!",
      });
      excelData.map(async (restaurant, index) => {
        try {
          await client
            .fetch(
              `*[_type == "${TYPE_RESTAURANT}" && title == "${restaurant?.title?.trim()}"]{...}`,
            )
            .then(async (res) => {
              if (res?.length > 0) {
                await res.map(async (doc) => {
                  await updateDocument(restaurant, doc, index, callBack);
                });
              } else {
                await createDocument(restaurant, index, callBack);
              }
            });
          UpdateLoader({ status: false });
        } catch (error) {
          UpdateLoader({ status: false });
          console.log(error);
        }
      });
    }
  };

  function resetFile(): void {
    ref.current.value = "";
    setExcelData([]);
    callBack();
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {excelData.length > 0 && (
        <>
          <Button
            fontSize={[2, 2, 3]}
            mode="ghost"
            padding={[3, 3, 4]}
            text="RESET"
            onClick={resetFile}
          />
          <Button
            fontSize={[2, 2, 3]}
            mode="ghost"
            padding={[3, 3, 4]}
            text="Migrate excel data"
            onClick={() => {
              migrateExcelData(callBack, UpdateLoader);
            }}
          />
        </>
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
  const updatedData = await getRestaurantDoc({
    excelData: data,
    doc: document,
  });
  console.log("update", document?.title);
  const response = await client
    .patch(document._id)
    .set({ ...updatedData })
    .commit()
    .then((res) => {
      console.log(index + 1, res?.title + " Updated!");
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
  const newDoc = await getRestaurantDoc({
    excelData: data,
  });
  console.log("Creating ", newDoc?.title);
  const response = await client
    .create(newDoc)
    .then((res) => {
      console.log(index + 1, "Created document, id = ", res?._id, res?.title);
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

export default Restaurants;
