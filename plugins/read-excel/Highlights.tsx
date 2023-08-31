import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import sanityClient from "@sanity/client";
import { availabilitySectionTitleHighLights } from "../../constants";
import { customAlphabet } from "nanoid";

const client = sanityClient({
  projectId: "ocl5w36p",
  dataset: "dev",
  apiVersion: "v2021-10-21",
  token:
    "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
  useCdn: false,
});

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
          highLightsModifiedData.Highlights = data?.Highlights?.split("\\n");
          setHighLights((prevData) => [...prevData, highLightsModifiedData]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const updateHighLightInfo = (data, highlight) => {
    return highlight.Highlights?.map((highInfo, index) => {
      const infoHighData = data.highlightDetails
        ?.map((infoData, dIndex) => {
          if (infoData.basicInfo?.title !== highInfo) {
            return {
              _key: nanoid(),
              basicInfo: {
                title: highInfo,
                _key: infoData?._key,
                _type: "basicDetails",
                media: infoData?.media,
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
              media: infoHighData?.basicInfo?.media,
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
            await client
              .patch(res._id)
              .set({
                highlightDetails: highlightInfo,
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
            const newHighLights = highlight?.Highlights?.map((data) => {
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
      <input type="file" onChange={handleFile}></input>
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
