import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import {
  CHECK_IN_CHECK_OUT,
  CONTACT,
  DEV_CHECK_IN_CHECK_OUT_IMAGE,
  DEV_CONTACT_IMAGE,
  DEV_DINING_IMAGE,
  DEV_E_MAIL_IMAGE,
  DEV_QUERIES_IMAGE,
  DEV_ROOMS_SUITES_IMAGE,
  DEV_TEMPERATURE_IMAGE,
  DEV_WELLNESS_IMAGE,
  DINING,
  E_MAIL,
  PHONE,
  PROD_CHECK_IN_CHECK_OUT_IMAGE,
  PROD_CONTACT_IMAGE,
  PROD_DINING_IMAGE,
  PROD_E_MAIL_IMAGE,
  PROD_QUERIES_IMAGE,
  PROD_ROOMS_SUITES_IMAGE,
  PROD_TEMPERATURE_IMAGE,
  PROD_WELLNESS_IMAGE,
  ROOMS_SUITES,
  TEMPERATURE,
  WELLNESS,
  availabilitySectionTitle,
} from "./constants";
import { customAlphabet } from "nanoid";
import { client } from "./client";

function HotelInformation({ type }) {
  const [hotelData, setHotelData] = useState([]);
  const ref: any = useRef();
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let checkInAndCheckOut = {
    title: CHECK_IN_CHECK_OUT,
    icon: {
      _type: "image",
      asset: {
        _ref:
          type == "dev"
            ? DEV_CHECK_IN_CHECK_OUT_IMAGE
            : PROD_CHECK_IN_CHECK_OUT_IMAGE,
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let dining = {
    title: DINING,
    icon: {
      _type: "image",
      asset: {
        _ref: type == "dev" ? DEV_DINING_IMAGE : PROD_DINING_IMAGE,
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let roomsAndSuites = {
    title: ROOMS_SUITES,
    icon: {
      _type: "image",
      asset: {
        _ref: type == "dev" ? DEV_ROOMS_SUITES_IMAGE : PROD_ROOMS_SUITES_IMAGE,
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let wellness = {
    title: WELLNESS,
    icon: {
      _type: "image",
      asset: {
        _ref: type == "dev" ? DEV_WELLNESS_IMAGE : PROD_WELLNESS_IMAGE,
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let temperature = {
    title: TEMPERATURE,
    icon: {
      _type: "image",
      asset: {
        _ref: type == "dev" ? DEV_TEMPERATURE_IMAGE : PROD_TEMPERATURE_IMAGE,
        _type: "reference",
      },
    },
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let essentials = {
    title: "HOTEL ESSENTIALS",
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let contact = {
    title: CONTACT,
    icon: {
      _type: "image",
      asset: {
        _ref: type == "dev" ? DEV_CONTACT_IMAGE : PROD_CONTACT_IMAGE,
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let phone = {
    title: PHONE,
    icon: {
      _type: "image",
      asset: {
        _ref: type == "dev" ? DEV_QUERIES_IMAGE : PROD_QUERIES_IMAGE,
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let email = {
    title: E_MAIL,
    icon: {
      _type: "image",
      asset: {
        _ref: type == "dev" ? DEV_E_MAIL_IMAGE : PROD_E_MAIL_IMAGE,
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let hotelInfo = [];
  hotelInfo.push(checkInAndCheckOut);
  hotelInfo.push(roomsAndSuites);
  hotelInfo.push(dining);
  hotelInfo.push(wellness);
  hotelInfo.push(temperature);
  hotelInfo.push(essentials);
  hotelInfo.push(email);
  hotelInfo.push(contact);
  hotelInfo.push(phone);
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
  };

  const migrateExcelData = async () => {
    console.log("hotelData", hotelData);
    hotelData.map(async (hotel, index) => {
      await client
        .fetch(
          `*[_type == "availability" && title == "${hotel.title}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {
            console.log("updating ", res._id);
            console.log("Update for hotel information is working", res._id, " - ",res.title);
            // let hotelInfo = updateHotelInfo(res?.hotelInfo, hotel);
            // await client
            //   .patch(res._id)
            //   .set({ hotelInfo: hotelInfo })
            //   .commit()
            //   .then((res) => {
            //     console.log(res?.title + " Updated!");
            //   })
            //   .catch((err) => {
            //     console.error(
            //       "Oh no, the update failed: ",
            //       res._id,
            //       "Error : ",
            //       err.message,
            //     );
            //   });
          } else {
            console.log("Creating...", hotel.title);
            let doc = {
              _type: "availability",
              sectionTitle: { ...availabilitySectionTitle },
              hotelInfo: [...hotelInfo],
              title: hotel.title,
            };
            doc.hotelInfo.map((info, infoIndex) => {
              switch (info.title) {
                case checkInAndCheckOut.title: {
                  doc.hotelInfo[infoIndex].list =
                    hotel?.checkInAndCheckOut?.map((data) => {
                      return {
                        _type: "bulletPoints",
                        _key: nanoid(),
                        item: data.trim().replace("\r\n", ""),
                      };
                    });
                  break;
                }
                case dining.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.dining?.map((data) => {
                    return {
                      _type: "bulletPoints",
                      _key: nanoid(),
                      item: data.replace("\r\n", ""),
                    };
                  });
                  break;
                }
                case roomsAndSuites.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.roomsAndSuites?.map(
                    (data) => {
                      return {
                        _type: "bulletPoints",
                        _key: nanoid(),
                        item: data.replace("\r\n", ""),
                      };
                    },
                  );
                  break;
                }
                case wellness.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.wellness?.map(
                    (data) => {
                      return {
                        _type: "bulletPoints",
                        _key: nanoid(),
                        item: data.replace("\r\n", ""),
                      };
                    },
                  );
                  break;
                }
                case essentials.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.essentials?.map(
                    (data) => {
                      return {
                        _type: "bulletPoints",
                        _key: nanoid(),
                        item: data.replace("\r\n", ""),
                      };
                    },
                  );
                  break;
                }
                case contact.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.contact?.map(
                    (data) => {
                      return {
                        _type: "bulletPoints",
                        _key: nanoid(),
                        item: data.replace("\r\n", ""),
                      };
                    },
                  );
                  break;
                }
                case phone.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.phone?.map((data) => {
                    return {
                      _type: "bulletPoints",
                      _key: nanoid(),
                      item: data.replace("\r\n", ""),
                    };
                  });
                  break;
                }
                case email.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.email?.map((data) => {
                    return {
                      _type: "bulletPoints",
                      _key: nanoid(),
                      item: data.replace("\r\n", ""),
                    };
                  });
                  break;
                }
              }
            });
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
