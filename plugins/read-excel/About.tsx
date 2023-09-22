import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "./client";
import { TYPE_ABOUT, TYPE_TITLE } from "./constants";
import { compareValues, getBanner, getMediaInput } from "./utils";
import { ImportComponent } from "./types";

function extractAbout({ data }, returnObject: any = {}) {
  data?.title && (returnObject.title = data?.title?.trim());
  data?.description && (returnObject.description = data?.description?.trim());
  data?.desktopTitle &&
    (returnObject.desktopTitle = data?.desktopTitle?.trim()?.split("|"));
  data?.mobileTitle &&
    (returnObject.mobileTitle = data?.mobileTitle?.trim()?.split("|"));
  data?.aboutBannerImage &&
    (returnObject.aboutBannerImage = data?.aboutBannerImage
      ?.trim()
      ?.split("|"));
  data?.aboutBannerLargeImage &&
    (returnObject.aboutBannerLargeImage = data?.aboutBannerLargeImage
      ?.trim()
      ?.split("|"));
  return returnObject;
}

function About({ callBack }: ImportComponent) {
  const ref: any = useRef();
  const [aboutData, setAboutData] = useState([]);

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
          setAboutData((prevData) => [
            ...prevData,
            extractAbout({ data: data }),
          ]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log(aboutData);

  const migrateExcelData = async (callBack) => {
    callBack();
    await aboutData.map(async (about, index) => {
      await client
        .fetch(`*[_type == "about" && title == "${about?.title?.trim()}"]`)
        .then(async (res) => {
          if (res?.length > 0) {
            await res.map(async (doc) => {
              await updateDocument(about, doc, index, callBack);
            });
          } else {
            await createDocument(about, index, callBack);
          }
        });
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setAboutData([]);
    callBack();
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {aboutData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {aboutData?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="Migrate excel data"
          onClick={() => {
            migrateExcelData(callBack);
          }}
        />
      )}
    </Flex>
  );
}

async function updateDocument(
  data: any,
  document: any,
  index: number,
  callBack: Function,
) {
  console.log("updating ", document._id, document?.title);
  const response = await client
    .patch(document._id)
    .set({ ...getAboutDoc({ excelData: data, document: document }) })
    .commit()
    .then((res) => {
      console.log(index + 1, " Updated!", res?.title);
      return {
        status: "Updated",
        response: res,
      };
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed at: ",
        document._id,
        data?.title,
        "Error : ",
        err.message,
      );
      return {
        status: "Failed to Update",
        response: { _id: document._id, title: data?.title, error: err },
      };
    });
  callBack(response);
}

async function createDocument(data: any, index: number, callBack: Function) {
  console.log("Creating...", data.title);
  const response = await client
    .create(getAboutDoc({ excelData: data }))
    .then((res) => {
      console.log(index + 1, "Created  = ", data.title, res._id);
      return {
        status: "Created",
        response: res,
      };
    })
    .catch((err) => {
      console.log("failed to create", data.title);
      console.log("err ", err);
      return {
        status: "Failed to Create",
        response: { _id: null, title: data?.title, error: err },
      };
    });
  callBack(response);
}

function getAboutDoc(
  { excelData, document = null, type = TYPE_ABOUT },
  returnObject: any = {},
) {
  if (!document) {
    returnObject._type = type;
    returnObject.title = excelData?.title?.trim();
  }
  if (
    excelData?.mobileTitle?.length > 0 ||
    excelData?.desktopTitle?.length > 0
  ) {
    returnObject.sectionTitle = {
      _type: TYPE_TITLE,
    };
  }
  //sectionTitle - mobileTitle
  if (excelData?.mobileTitle?.length > 0) {
    returnObject.sectionTitle.mobileTitle = excelData?.mobileTitle;
  }
  //sectionTitle - desktopTitle
  if (excelData?.desktopTitle?.length > 0) {
    returnObject.sectionTitle.desktopTitle = excelData?.desktopTitle;
  }
  //description
  const description = compareValues({
    excelData: excelData,
    documentData: document,
    key: "description",
  });
  description && (returnObject.description = description);
  //bannerImage
  if (
    excelData?.aboutBannerImage?.length > 0 ||
    excelData?.aboutBannerLargeImage?.length > 0
  ) {
    const bannerData = getBanner({
      deskTopData: excelData?.aboutBannerLargeImage,
      mobileData: excelData?.aboutBannerImage,
    });
    bannerData?.length > 0 &&
      (returnObject.bannerImage = getMediaInput({
        mediaData: bannerData,
      }));
  } else {
    document?.bannerImage && (returnObject.bannerImage = document?.bannerImage);
  }

  return returnObject;
}

export default About;
