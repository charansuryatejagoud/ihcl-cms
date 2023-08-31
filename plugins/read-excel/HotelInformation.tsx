import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import sanityClient from "@sanity/client";
import { availabilitySectionTitle } from "../../constants";
import { customAlphabet } from "nanoid";

const client = sanityClient({
  projectId: "ocl5w36p",
  dataset: "production",
  apiVersion: "v2021-10-21",
  token:
    "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
  useCdn: false,
});

function HotelInformation() {
  const [hotelData, setHotelData] = useState([]);
  const ref: any = useRef();
  const nanoid = customAlphabet("1234567890abcdef", 12);
  let checkinandout = {
    title: "CHECK IN – CHECK OUT",
    icon: {
      _type: "image",
      asset: {
        _ref: "image-c48628fbb4b039bdaba898224d9065dce969deff-63x63-png",
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let dining = {
    title: "dining",
    icon: {
      _type: "image",
      asset: {
        _ref: "image-fbac762be575b15ec474d0c1be9b91a1865d79b1-54x54-png",
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let roomsandsuite = {
    title: "ROOMS & SUITES",
    icon: {
      _type: "image",
      asset: {
        _ref: "image-08dafb4ab54fcd71cde9ad8918aabb94454f00c0-72x55-png",
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let wellness = {
    title: "WELLNESS",
    icon: {
      _type: "image",
      asset: {
        _ref: "image-d2001ff8086779fafce3c4fe09639adba2b25d7e-78x60-png",
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let essentials = {
    title: "HOTEL ESSENTIALS",
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let address = {
    title: "CONTACT",
    icon: {
      _type: "image",
      asset: {
        _ref: "image-986127afac51704f9281afb8a7d61502944d6863-17x24-svg",
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let phonemobiles = {
    title: "QUERIES",
    icon: {
      _type: "image",
      asset: {
        _ref: "image-7d2fc9efda8756328ac5ea17ed40d5868b74d078-19x19-svg",
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let email = {
    title: "E- MAIL",
    icon: {
      _type: "image",
      asset: {
        _ref: "image-ae3e4add01c653d900d6d75bbe086b616dfaa0ee-17x14-svg",
        _type: "reference",
      },
    },
    list: [],
    _type: "facilityInfo",
    _key: nanoid(),
  };
  let hotelInfo = [];
  hotelInfo.push(checkinandout);
  hotelInfo.push(dining);
  hotelInfo.push(roomsandsuite);
  hotelInfo.push(wellness);
  hotelInfo.push(essentials);
  hotelInfo.push(address);
  hotelInfo.push(phonemobiles);
  hotelInfo.push(email);
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
          let hotelModifiedData: any = {};
          hotelModifiedData.title = data?.title;
          hotelModifiedData.hotelInfo = [
            {
              title: "CHECK IN – CHECK OUT",
              data: data?.checkinandout?.split("\\n"),
            },
            {
              title: "DINING",
              data: data?.dining?.split("\\n"),
            },
            {
              title: "ROOMS & SUITES",
              data: data?.roomsandsuite?.split("\\n"),
            },
            {
              title: "WELLNESS",
              data: data?.wellness?.split("\\n"),
            },
            {
              title: "HOTEL ESSENTIALS",
              data: data?.essentials?.split("\\n"),
            },
            {
              title: "CONTACT",
              data: data?.address?.split("\\n"),
            },
            {
              title: "QUERIES",
              data: data?.phonemobiles?.split("\\n"),
            },
            {
              title: "E- MAIL",
              data: data?.email?.split("\\n"),
            },
          ];
          hotelModifiedData.checkinandout = data?.checkinandout?.split("\\n");
          hotelModifiedData.dining = data?.dining?.split("\\n");
          hotelModifiedData.roomsandsuite = data?.roomsandsuite?.split("\\n");
          hotelModifiedData.wellness = data?.wellness?.split("\\n");
          hotelModifiedData.essentials = data?.essentials.split("\\n");
          hotelModifiedData.address = data?.address?.split("\\n");
          hotelModifiedData.phonemobiles = data?.phonemobiles?.split("\\n");
          hotelModifiedData.email = data?.email?.split("\\n");
          setHotelData((prevData) => [...prevData, hotelModifiedData]);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

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
            console.log("res?.hotelInfo", res?.hotelInfo);
            let hotelInfo = updateHotelInfo(res?.hotelInfo, hotel);
            await client
              .patch(res._id)
              .set({ hotelInfo: hotelInfo })
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
            console.log("Creating...", hotel.title);
            let doc = {
              _type: "availability",
              sectionTitle: { ...availabilitySectionTitle },
              hotelInfo: [...hotelInfo],
              title: hotel.title,
            };
            doc.hotelInfo.map((info, infoIndex) => {
              switch (info.title) {
                case checkinandout.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.checkinandout?.map(
                    (data) => {
                      return {
                        _type: "bulletPoints",
                        _key: nanoid(),
                        item: data.trim().replace("\r\n", ""),
                      };
                    },
                  );
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
                case roomsandsuite.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.roomsandsuite?.map(
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
                case address.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.address?.map(
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
                case phonemobiles.title: {
                  doc.hotelInfo[infoIndex].list = hotel?.phonemobiles?.map(
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
