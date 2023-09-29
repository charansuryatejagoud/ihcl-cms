import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "../client";
import { createOrReplaceFacilitiesDoc } from "../utils";

function Facilities({ type }) {
  const [hotelFacilitiesData, setHotelFacilitiesData] = useState([]);
  const ref: any = useRef();
  const handleFile = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const xlData = e.target.result;
        const workbook = XLSX.read(xlData, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        jsonData.map((data: any) => {
          console.log("data", data);
          let facilitiesModifiedData: any = {};
          facilitiesModifiedData.title = data?.title;
          facilitiesModifiedData.hotelFacilities = [
            {
              title: "Activities",
              data: data?.activities?.substring(1,data?.activities?.length).split("|"),
            },
            {
              title: "Hotel",
              data: data?.hotel?.substring(1,data?.hotel?.length).split("|"),
            },
            {
              title: "Dining",
              data: data?.dining?.substring(1,data?.dining?.length).split("|"),
            },
            {
              title: "Wellness",
              data: data?.wellness?.substring(1,data?.wellness?.length).split("|"),
            },
            {
              title: "Rooms",
              data: data?.rooms?.substring(1,data?.rooms?.length).split("|"),
            },
            {
              title: "Location",
              data: data?.location?.substring(1,data?.location?.length).split("|"),
            },
          ];
          facilitiesModifiedData.activities = data?.activities?.substring(1,data?.activities?.length).split("|");
          facilitiesModifiedData.hotel = data?.hotel?.substring(1,data?.hotel?.length).split("|");
          facilitiesModifiedData.dining = data?.dining?.substring(1,data?.dining?.length).split("|");
          facilitiesModifiedData.wellness = data?.wellness?.substring(1,data?.wellness?.length).split("|");
          facilitiesModifiedData.rooms = data?.rooms?.substring(1,data?.rooms?.length).split("|");
          facilitiesModifiedData.location = data?.location?.substring(1,data?.location?.length).split("|");
          setHotelFacilitiesData((prevData) => [...prevData, facilitiesModifiedData]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const migrateExcelData = async () => {
    console.log("hotelFacilitiesData", hotelFacilitiesData);
    hotelFacilitiesData.map(async (hotelFacilities) => {
      await client
        .fetch(
          `*[_type == "facilities" && title == "${hotelFacilities.title}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {
            await updateFacilitiesDocument(hotelFacilities, res);
          } else {
            await createFacilitiesDocument(hotelFacilities, type);
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setHotelFacilitiesData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref} />
      {hotelFacilitiesData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {hotelFacilitiesData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="Migrate Excel Data"
          onClick={migrateExcelData}
        />
      )}
    </Flex>
  );
}

async function updateFacilitiesDocument(data, document) {
  console.log("updating ", document._id);
  const { facilityDetails, mobileFacilities } = createOrReplaceFacilitiesDoc(data, "prod");
  await client
    .patch(document._id)
    .set({ facilityDetails: facilityDetails, mobileFacilities: mobileFacilities })
    .commit()
    .then((res) => {
      console.log(res?.title + " Updated!");
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed: ",
        document._id,
        "Error : ",
        err.message,
      );
    });
}

async function createFacilitiesDocument(data, type) {
  console.log("Creating...", data.title);
  await client
  const doc = createOrReplaceFacilitiesDoc(data, type);
  console.log("doc",doc)
  client
    .create(doc)
    .then((res) => {
      console.log("Created document, id = ", res._id);
    })
    .catch((err) => {
      console.log("failed to create document, ", data?.title);
      console.log("err ", err);
    });
}

export default Facilities;