import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { addressSectionTitle } from "./constants";
import { customAlphabet } from "nanoid";
import { client } from "./client";

function Address() {
  const ref: any = useRef();
  const [locationsData, setLocationsData] = useState([]);
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
          console.log("==", data?.locationAndDirectionTitle?.split("|"));
          let locationInfo: any = {};
          locationInfo.hotelTitle = data?.hotelTitle;
          locationInfo.hotelIdentifier = data?.hotelIdentifier;
          locationInfo.locationAndDirectionInfo = {
            titles: data?.locationAndDirectionTitle?.split("|"),
            description: data?.locationAndDirectionDescription?.split("|"),
            latitude: data?.latitude,
            longitude: data?.longitude,
          };
          setLocationsData((prevData) => [...prevData, locationInfo]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const updatedLocInfo = (data, location) => {
    let updatedDoc = {
      ...data,
      locationAndDirectionsInfo: location.locationAndDirectionInfo?.titles?.map(
        (title, infoIndex) => {
          return {
            _key: nanoid(),
            basicInfo: {
              _type: "basicDetails",
              description:
                location.locationAndDirectionInfo?.description[infoIndex],
              title: title,
            },
            locationDetails: {
              _type: "locationInfo",
              latitude: location.locationAndDirectionInfo?.latitude
                ? String(location.locationAndDirectionInfo?.latitude)
                : "",
              longitude: location.locationAndDirectionInfo?.longitude
                ? String(location.locationAndDirectionInfo?.longitude)
                : "",
            },
          };
        },
      ),
    };
    return updatedDoc;
  };

  const createLocationData = (location) => {
    let data = {
      _type: "address",
      sectionTitle: { ...addressSectionTitle },
      title: location.hotelTitle,
      locationAndDirectionsInfo: location.locationAndDirectionInfo?.titles?.map(
        (title, infoIndex) => {
          return {
            _key: nanoid(),
            basicInfo: {
              _type: "basicDetails",
              description:
                location.locationAndDirectionInfo?.description[infoIndex],
              title: title,
            },
            locationDetails: {
              _type: "locationInfo",
              latitude: location.locationAndDirectionInfo?.latitude
                ? String(location.locationAndDirectionInfo?.latitude)
                : "",
              longitude: location.locationAndDirectionInfo?.longitude
                ? String(location.locationAndDirectionInfo?.longitude)
                : "",
            },
          };
        },
      ),
    };
    return data;
  };

  const migrateExcelData = async () => {
    locationsData.map(async (location, index) => {
      await client
        .fetch(
          `*[_type == "address" && title == "${location.hotelTitle}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {
            console.log("updating ", res._id);
            console.log("res?.locationInfo", res?.locationAndDirectionsInfo);
            const { locationAndDirectionsInfo } = updatedLocInfo(res, location);
            console.log("locationAndDirectionsInfo", locationAndDirectionsInfo);
            await client
              .patch(res._id)
              .set({ locationAndDirectionsInfo: locationAndDirectionsInfo })
              .commit()
              .then((res) => {
                console.log(res?.title + " Updated!");
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
            console.log("Creating...", location.hotelTitle);
            const doc = createLocationData(location);
            await client
              .create(doc)
              .then((res) => {
                console.log("id = ", res._id);
              })
              .catch((err) => {
                console.log("failed to update");
                console.log("err ", err);
              });
          }
        })
        .catch((error) => console.log(error));
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setLocationsData([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {locationsData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {locationsData?.length != 0 && (
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

export default Address;
