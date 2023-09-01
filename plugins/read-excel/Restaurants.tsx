import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { finalRestaurantsInfoObj } from "./dynamic";
import { Create, Update, fetchByType } from "./utils";

function Restaurants() {
  const [excelData, setExcelData] = useState([]);
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
    if (Array.isArray(excelData) && excelData.length > 0) {
      excelData.map(async (a) => {
        const res = await fetchByType({
          title: a.title,
          type: "restaurants",
        });

        const bannerTitle = {
          _type: "title",
          desktopTitle: [],
          mobileTitle: [],
        };

        if (a.bannerDesktopTitle.includes("|")) {
          bannerTitle.desktopTitle = a.bannerDesktopTitle.split("|");
        } else {
          bannerTitle.desktopTitle = [a.bannerDesktopTitle];
        }

        if (a.restaurantSectionMobileTitle.includes("|")) {
          bannerTitle.mobileTitle = a.bannerMobileTitle.split("|");
        } else {
          bannerTitle.mobileTitle = [a.bannerMobileTitle];
        }

        const modData = finalRestaurantsInfoObj({
          title: a.title,
          hotelDiningPageObj: [a],
          response: res,
          bannerTitle,
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
              doc: { ...modData, _type: "restaurants" },
            });
            console.log(createRes);
          } catch (err) {
            console.error(err);
          }
        }
      });
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
            onClick={migrateExcelData}
          />
        </>
      )}
    </Flex>
  );
}

export default Restaurants;
