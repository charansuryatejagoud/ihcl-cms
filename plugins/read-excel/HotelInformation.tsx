import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "./client";
import { createOrReplaceDoc } from "./utils";
function HotelInformation({ type }) {
  const [hotelData, setHotelData] = useState([]);
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
        jsonData.map((data: any) => {
          console.log("data", data);
          let hotelModifiedData: any = {};
          hotelModifiedData.title = data?.title;
          hotelModifiedData.hotelInfo = [
            {
              title: "CHECK IN – CHECK OUT",
              data: data?.checkInAndCheckOut?.split("|"),
            },
            {
              title: "DINING",
              data: data?.dining?.split("|"),
            },
            {
              title: "ROOMS & SUITES",
              data:
                data?.roomsAndSuites && String(data?.roomsAndSuites).split("|"),
            },
            {
              title: "WELLNESS",
              data: data?.wellness?.split("|"),
            },
            {
              title: "HOTEL ESSENTIALS",
              data: data?.essentials?.split("|"),
            },
            {
              title: "CONTACT",
              data: data?.contact?.split("|"),
            },
            {
              title: "QUERIES",
              data: data?.phone?.split("|"),
            },
            {
              title: "E- MAIL",
              data: data?.email?.split("|"),
            },
          ];
          hotelModifiedData.checkInAndCheckOut =
            data?.checkInAndCheckOut?.split("|");
          hotelModifiedData.dining = data?.dining?.split("|");
          hotelModifiedData.roomsAndSuites =
            data?.roomsAndSuites && String(data?.roomsAndSuites).split("|");
          hotelModifiedData.wellness = data?.wellness?.split("|");
          hotelModifiedData.essentials = data?.essentials.split("|");
          hotelModifiedData.contact = data?.contact?.split("|");
          hotelModifiedData.phone = data?.phone?.split("|");
          hotelModifiedData.email = data?.email?.split("|");
          setHotelData((prevData) => [...prevData, hotelModifiedData]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(hotelData);

  const migrateExcelData = async () => {
    console.log("hotelData", hotelData);
    hotelData.map(async (hotel) => {
      await client
        .fetch(
          `*[_type == "availability" && title == "${hotel.title}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {
            await updateDocument(hotel, res);
          } else {
            await createDocument(hotel, type);
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setHotelData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref} />
      {hotelData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {hotelData?.length != 0 && (
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

export default HotelInformation;

async function updateDocument(data, document) {
  console.log("updating ", document._id);
  console.log(
    "Update for hotel information is working",
    document._id,
    " - ",
    document.title,
  );
  const { hotelInfo } = createOrReplaceDoc(data, "dev");
  await client
    .patch(document._id)
    .set({ hotelInfo: hotelInfo })
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

async function createDocument(data, type) {
  console.log("Creating...", data.title);
  await client
    .create(createOrReplaceDoc(data, type))
    .then((res) => {
      console.log("Created document, id = ", res._id);
    })
    .catch((err) => {
      console.log("failed to create document, ", data?.title);
      console.log("err ", err);
    });
}

/*
// let hotelInfo = updateHotelInfo(res?.hotelInfo, hotel);
const updateHotelInfo = (data, hotel) => {
  const finalData = hotel.hotelInfo?.map((info, index) => {
    const infoData = data.filter((d) => d.title == info.title)[0];
    let updateInfo = infoData
      ? {
          title: infoData?.title,
          icon: { ...infoData?.icon },
          _key: infoData?._key ?? nanoid(),
          _type: infoData?._type ?? "facilityInfo",
          list: info.data?.map((value) => {
            return {
              item: value,
              _key: nanoid(),
              _type: "bulletPoints",
            };
          }),
        }
      : {
          title: info?.title,
          _key: nanoid(),
          _type: "facilityInfo",
          list: info.data?.map((value) => {
            return {
              item: value.trim(),
              _key: nanoid(),
              _type: "bulletPoints",
            };
          }),
        };
    return updateInfo;
  });
  return finalData;
};*/
