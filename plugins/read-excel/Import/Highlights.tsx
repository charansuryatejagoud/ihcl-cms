import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { availabilitySectionTitleHighLights } from "../constants";
import { customAlphabet } from "nanoid";
import { client } from "../client";

function Highlights() {
  const ref: any = useRef();
  const [highlights, setHighLights] = useState([]);
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
          let highLightsModifiedData: any = {};
          highLightsModifiedData.title = data?.hotelTitle;
          highLightsModifiedData.description = data?.HighlightsIntro;
          highLightsModifiedData.Highlights = data?.Highlights?.split("|");
          setHighLights((prevData) => [...prevData, highLightsModifiedData]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const updateHighLightInfo = (data: any, highlight: any) => {
    return highlight.Highlights?.map((highInfo: any, index: any) => {
      const infoHighData = data.highlightDetails
        ?.map((infoData: any, dIndex: any) => {
          if (infoData.basicInfo?.title !== highInfo) {
            return {
              _key: nanoid(),
              basicInfo: {
                title: highInfo,
                _key: infoData?._key,
                _type: "basicDetails",
              },
            };
          } else {
            return false;
          }
        })
        .filter(Boolean)[0];
      let updateHighInfo = infoHighData
        ? {
            _key: nanoid(),
            basicInfo: {
              title: infoHighData?.basicInfo.title,
              _key: infoHighData?.basicInfo._key ?? nanoid(),
              _type: infoHighData?.basicInfo._type ?? "basicDetails",
            },
          }
        : {
            title: highInfo?.title,
            _key: highInfo?._key ?? nanoid(),
            _type: highInfo?._type ?? "basicDetails",
          };

      return updateHighInfo;
    });
  };

  const migrateExcelData = async () => {
    highlights.map(async (highlight, index) => {
      await client
        .fetch(
          `*[_type == "highlights" && title == "${highlight.title}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {
            console.log("updating ", res._id);
            let highlightInfo = updateHighLightInfo(res, highlight);
            const imageMedia = highlightInfo
              .map((a: any, i: any) => {
                if (res.highlightDetails[i]?.basicInfo?.media) {
                  const basicInfo = {
                    ...a.basicInfo,
                    media: res.highlightDetails[i]?.basicInfo?.media,
                  };
                  return {
                    ...a,
                    basicInfo,
                  };
                } else {
                  return a;
                }
              })
              .filter(Boolean);

            console.log(imageMedia);

            await client
              .patch(res._id)
              .set({
                highlightDetails: imageMedia,
                description:
                  res?.description == highlight?.description
                    ? res?.description
                    : highlight?.description,
              })
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
          } else {
            console.log("Creating...", highlight?.title);
            const newHighLights = highlight?.Highlights?.map((data: any) => {
              return {
                _key: nanoid(),
                basicInfo: {
                  _type: "basicDetails",
                  title: data,
                  _key: nanoid(),
                },
              };
            });
            let doc = {
              _type: "highlights",
              sectionTitle: { ...availabilitySectionTitleHighLights },
              highlightDetails: [...newHighLights],
              title: highlight.title,
              description: highlight.description,
            };
            await client
              .create(doc)
              .then((res) => {
                console.log("Created ", res._id);
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
    setHighLights([]);
  }

  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <input type="file" onChange={handleFile} ref={ref}></input>
      {highlights?.length != 0 && (
        <Button
          fontSize={[2, 2, 3]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="RESET"
          onClick={resetFile}
        />
      )}
      {highlights?.length != 0 && (
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

export default Highlights;
