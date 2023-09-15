import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { customAlphabet } from "nanoid";
import { client } from "./client";
import { TYPE_CONTACT, TYPE_ABOUT, TYPE_TITLE } from "./constants";
import { compareValues, getBanner, getMediaInput } from "./utils";

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

function About() {
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

  const migrateExcelData = async () => {
    await aboutData.map(async (about, index) => {
      await client
        .fetch(`*[_type == "about" && title == "${about?.title?.trim()}"]`)
        .then(async (res) => {
          if (res?.length > 0) {
            await res.map(async (doc) => {
              await updateDocument(about, doc, index);
            });
          } else {
            await createDocument(about, index);
          }
        });
    });
  };

  function resetFile(): void {
    ref.current.value = "";
    setAboutData([]);
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
          onClick={migrateExcelData}
        />
      )}
    </Flex>
  );
}

async function updateDocument(about: any, doc: any, index: number) {
  const update = getAboutDoc({ excelData: about, document: doc });
  console.log("update", update);
  await client
    .patch(doc._id)
    .set({ ...update })
    .commit()
    .then((res) => {
      console.log(res?.title + " Updated!");
    })
    .catch((err) => {
      console.error(
        "Oh no, the update failed at: ",
        doc._id,
        about?.title,
        "Error : ",
        err.message,
      );
    });
}

async function createDocument(about: any, index: number) {
  const newDoc = getAboutDoc({ excelData: about });
  console.log("newDoc", newDoc);
  await client
    .create(newDoc)
    .then((res) => {
      console.log("Created  = ", about.title, res._id);
    })
    .catch((err) => {
      console.log("failed to create", about.title);
      console.log("err ", err);
    });
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
    console.log("bannerData", bannerData);
    bannerData?.length > 0 &&
      (returnObject.bannerImage = getMediaInput({
        mediaData: bannerData,
      }));
  } else {
    if (document?.bannerImage) {
      returnObject.bannerImage = document?.bannerImage;
    }
  }

  return returnObject;
}

export default About;
