import React, { useState } from "react";
import { Box, Card, Stack, Button, Inline, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import sanityClient from "@sanity/client";
import { availabilitySectionTitle } from "../../constants";

const client = sanityClient({
  projectId: "ocl5w36p",
  dataset: "production",
  apiVersion: "v2021-10-21",
  token:
    "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
  useCdn: false,
});

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
};
let essentials = {
  title: "HOTEL ESSENTIALS",
  list: [],
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
};

function MyTool() {
  const [excelData, setExcelData] = useState([]);
  const [hotelData, setHotelData] = useState([]);
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
        // setExcelData(jsonData);
        jsonData.map((data) => {
          let hotelModifiedData = {};
          hotelModifiedData.title = data?.title;
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

  const migrateExcelData = async () => {
    hotelData.map(async (hotel, index) => {
      await client
        .fetch(
          `*[_type == "availability" && title == "${hotel.title}"][0]{...}`,
        )
        .then(async (res) => {
          if (res) {

          } else {
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

  return (
    <Box padding={4} paddingY={5}>
      <Stack space={4}>
        <Flex padding={4} align={"center"}>
          <input type="file" onChange={handleFile}></input>
          {hotelData?.length != 0 && (
            <Button
              fontSize={[2, 2, 3]}
              mode="ghost"
              padding={[3, 3, 4]}
              text="Migrate excel data"
              onClick={migrateExcelData}
            />
          )}
        </Flex>
      </Stack>
    </Box>
  );
}

export default MyTool;

/* 
 const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    // debugger;
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
    });
    setExcelData(jsonData);
    console.log(excelData, jsonData);
*/
