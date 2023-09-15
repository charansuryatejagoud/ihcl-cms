import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { customAlphabet } from "nanoid";
import { client } from "./client";
import { extractTaxonomyData } from "./utils";
import { TYPE_TAXONOMY_INFO } from "./constants";

function TaxonomyInfo() {
  const ref: any = useRef();
  const [taxonomyData, setTaxonomyData] = useState([]);
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
          const extractedData = extractTaxonomyData(data);
          setTaxonomyData((prevData) => [...prevData, extractedData]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(taxonomyData);

  function resetFile(): void {
    ref.current.value = "";
    setTaxonomyData([]);
  }

  function migrateExcelData(): void {
    taxonomyData?.map(async (taxonomy, index) => {
      await client
        .fetch(
          `*[_type == "${TYPE_TAXONOMY_INFO}" && title == "${taxonomy.title}"][0]{...}`,
        )
        .then((res) => {
          if (res) {
            updateTaxonomyDocument(taxonomy, res);
          } else {
            createTaxonomyDocument(taxonomy);
          }
        })
        .catch((error) => console.log(error));
    });
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {taxonomyData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {taxonomyData?.length != 0 && (
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

async function updateTaxonomyDocument(taxonomy, res) {
  console.log("updating ", res?.title);
  const document = {
    ...taxonomy,
  };
  await client
    .patch(res._id)
    .set({ ...document })
    .commit()
    .then((res) => {
      console.log(res?.title + " Updated!");
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        res.title,
        "Error : ",
        err.message,
      );
    });
}

async function createTaxonomyDocument(taxonomy) {
  console.log("Creating...", taxonomy?.title);
  const document = {
    _type: TYPE_TAXONOMY_INFO,
    ...taxonomy,
  };
  await client
    .create(document)
    .then((res) => {
      console.log("Created ", res._id);
    })
    .catch((err) => {
      console.log("failed to update");
      console.log("err ", err);
    });
}

export default TaxonomyInfo;
