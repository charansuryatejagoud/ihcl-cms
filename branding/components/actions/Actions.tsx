import {
  Badge,
  Flex,
  Card,
  Container,
  TabList,
  Tab,
  TabPanel,
  Heading,
  TextArea,
  Button,
  Grid,
  Code,
  TextInput,
} from "@sanity/ui";
import React, { useState } from "react";
import { queries } from "./Queries";
import { facilitySectionTitle, mobileFacilities } from "./facilities/facilityData";
import axios from 'axios';
import {
  IoApps as AppIcon,
  IoEyeOff as EyeClosedIcon,
  IoEye as EyeOpenIcon,
} from "react-icons/io5";
import Papa from "papaparse";
import { any } from "prop-types";
import { APIS } from "./apiConstants";
// import ReactJson from 'react-json-view';
import { client, updateSeo, getOriginalDoc } from "./apiConstants";

export default function QueryBuilder() {
  const [tabId, setTabId] = useState("action-group");
  const [docs, setDocs] = useState("");
  const [updateScript, setUpdateScript] = useState("");
  const [docOutput, setDocOutput] = useState({});
  const [dataMigrationOutput, setDataMigrationOutput] = useState({});
  const [dataToHotel, setDataToHotel] = useState("");

  const [csvData, setCsvData] = useState([]);
  // const [jsonData, setJsonData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    console.log("FILE", file);
    Papa.parse(file, {
      header: true, // Treat the first row as headers
      dynamicTyping: true, // Automatically convert numbers and booleans
      complete: (result) => {
        setCsvData(result.data);
        // setJsonData(JSON.stringify(result.data, null, 2));
      },
      error: (error) => {
        console.error("CSV parsing error:", error);
      },
    });
  };

  const _queryHead = (type, id, subQuery) => {
    let _q = `_type == '${type}'`;
    _q = id ? `${_q} && identifier in ${JSON.stringify(id.split(","))}` : _q;
    _q = subQuery ? `${_q} ${subQuery}` : _q;
    return `*[${_q}]`;
  };

  const _queryBody = (body) => {
    return body;
  };

  const _query = (type, id, subQuery, body) => {
    return `${_queryHead(type, id, subQuery)}${_queryBody(body)}`;
  };

  const syncData = (type, id, subQuery, body) => {
    const query = _query(type, id, subQuery, body);
    console.log(query);
    client
      .fetch(query)
      .then((response) => {
        setDocOutput(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const syncFullData = async (type) => {
    switch(type) {
      case queries.hotel.type:
      const sQ = queries.hotel.body
      const q = `*[
        _type == "hotel" 
        && identifier != null
      ]${sQ}`

      await client
      .fetch(q)
      .then((response) => {
        // setDocOutput(response)
        let result = []
        console.log(response);

        // write to search
        response && response.forEach(async doc => {
          try {
            const response = await axios.post(`${APIS.ENV_HOST}${APIS.SEARCH_DATA_SYNC}`, doc);
            console.log('Data successfully posted:', response.data);
            result.push({
              "hotel": doc.identifier,
              "message": response?.data?.message
            })
            // You can handle the response or perform any additional actions here.
          } catch (error) {
            console.error('Error posting data:', error.message);
            result.push({
              "hotel": doc.identifier,
              "message": error.message
            })
            // Handle the error here, e.g., show an error message to the user.
          }
        })

        setDocOutput(result);
        console.log('RES', result);
      })
      .catch((error) => {
        console.log("error", error);
      });

      break;
      default:
      break;
    }
  }

  const dataMigration = (query) => {
    console.log(query);
    client
      .fetch(query)
      .then((data) => {
        if (data === null) {
          console.log("No doc found");
        } else {
          setDataMigrationOutput(data);

          data &&
            data.map(async (doc) => {
              console.log("DOC:::", doc);

              const identifier = doc?.events?.basicInfo?.title
                ?.toLowerCase()
                .replace(/ /g, "-");

              let event = {
                _type: "events",
                title: doc?.events?.basicInfo?.title,
                identifier: identifier,
                seatingStyles: doc?.events?.seatingStyles,
                basicInfo: doc?.events?.basicInfo,
                venueModalDetails: doc?.events?.venueModalDetails,
                highlights: doc?.events?.highlights,
              };

              console.log("EVENT:::", event);

              await client
                .create(event)
                .then((event) => {
                  console.log("Created new event ", event);
                })
                .catch((err) => {
                  console.log("failed to update");
                  console.log("err ", err);
                });
            });
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  async function processSeo({
    _type,
    id,
    pageTitle,
    seoDescription,
    seoKeywords,
    parentID,
    parentType = "hotel",
    itemKey,
  }: any) {
    // if (parentID == "taj-exotica-goa") {
    console.log("#", _type, id, parentID);
    const documents: any = await fetchDocument({
      _type: id != null ? _type : parentType,
      identifier: id != null ? id : parentID,
      key: id != null ? null : itemKey,
    });
    const originalDoc =
      documents?.length == 1 ? documents[0] : getOriginalDoc(documents);
    try {
      await updateSeo({
        _id: id != null ? originalDoc?._id : originalDoc?.[itemKey]?._id,
        updateData: {
          pageTitle: pageTitle,
          seoKeywords: seoKeywords,
          seoDescription: seoDescription,
        },
      }).then((res) => {
        if (res == false) {
          console.log(
            id != null ? _type : parentType,
            id != null ? id : parentID,
            id != null ? originalDoc?._id : originalDoc?.[itemKey]?._id,
            " the ID does not exist in sanity dataset",
          );
        } else if (res != null && res?._id) {
          console.log(
            "Created Successfully",
            id != null ? _type : parentType,
            id == null && itemKey,
            id != null ? id : parentID,
            res?._id,
          );
        }
      });
    } catch (err) {
      console.error(
        "Oh no, the update failed: ",
        originalDoc?._id,
        "Error : ",
        err.message,
      );
    }
    // }
  }

  async function fetchDocument({ _type, identifier, key }: any) {
   const query = key
      ? `*[_type == "${_type}" && identifier == "${identifier}"]{...,"${key}":${key}->{...}}`
      : `*[_type == "${_type}" && identifier == "${identifier}"]{...}`;
    const response = await client
      .fetch(query)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("Failed to fetch ", identifier, " with ", _type, error);
        return null;
      });
    return response;
  }

  const updateSeoData = (data) => {
   data &&
      data.map(async (doc) => {
        const hotel = doc.Hotel;
        if (doc.Detail) {
          if (doc.Page == "offers-and-promotions") {
            //offerPackages Document
            // Update SEO for Offers
            await processSeo({
              _type: "offerPackages",
              id: doc?.Detail,
              seoKeywords: doc?.Keywords,
              pageTitle: doc?.Title,
              seoDescription: doc?.Description,
              parentID: doc?.Hotel,
            });
          } else if (doc.Page == "restaurants") {
            // Update SEO for Restaurant
            await processSeo({
              _type: "restaurants",
              id: doc?.Detail,
              seoKeywords: doc?.Keywords,
              pageTitle: doc?.Title,
              seoDescription: doc?.Description,
              parentID: doc?.Hotel,
            });
          }
        } else {
          //Hotel Document
          console.log("==", doc?.Hotel, doc?.Page, doc?.Detail, doc?.Title);
          switch (doc.Page) {
            case null:
              // Update SEO for Overview - hotelOverview
              await processSeo({
                _type: "overview",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelOverview",
              });
              break;
            case "rooms-and-suites":
              // Update SEO for Rooms Data - hotelRooms
              await processSeo({
                _type: "rooms",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelRooms",
              });
              break;
            case "fitness-centre":
              // Update SEO for Wellness - hotelWellness
              await processSeo({
                _type: "wellness",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelWellness",
              });
              break;
            case "j-wellness-circle":
              // Update SEO for Wellness - hotelWellness
              await processSeo({
                _type: "wellness",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelWellness",
              });
              break;
            case "image-gallery":
              // Update SEO for Gallery - hotelGallery
              await processSeo({
                _type: "gallery",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelGallery",
              });
              break;
            case "restaurants":
              // Update SEO for Restaurants - hotelSignatureDinings
              await processSeo({
                _type: "signatureDining",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelSignatureDining",
              });
              break;
            case "offers-and-promotions":
              // Update SEO for Offers - hotelOffers
              await processSeo({
                _type: "offers",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelOffers",
              });
              break;
            case "local-things-to-do":
              // Update SEO for Attractions - hotelAttractions
              await processSeo({
                _type: "attractions",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelAttractions",
              });
              break;
            case "meetings-and-events":
              // Update SEO for Events - hotelEventVenues
              await processSeo({
                _type: "venues",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelEventVenues",
              });
              break;
            case "experiences":
              // Update SEO for Experiences - hotelExperiences
              await processSeo({
                _type: "experiences",
                id: doc?.Detail,
                seoKeywords: doc?.Keywords,
                pageTitle: doc?.Title,
                seoDescription: doc?.Description,
                parentID: doc?.Hotel,
                itemKey: "hotelExperiences",
              });
              break;
            case "niu-and-nau":
              // Niu
              break;
            default:
              break;
          }
        }
      });
  };

  return (
    // <Container width={0}>
    <Card padding={4}>
      <TabList space={2}>
        <Tab
          aria-controls="data-panel"
          icon={AppIcon}
          id="data-tab"
          label="Data Sync"
          onClick={() => setTabId("action-group")}
          selected={tabId === "action-group"}
          //space={2}
        />
        <Tab
          aria-controls="preview-panel"
          icon={tabId === "preview" ? EyeOpenIcon : EyeClosedIcon}
          id="preview-tab"
          label="Data Migration"
          onClick={() => setTabId("preview")}
          selected={tabId === "preview"}
          // space={2}
        />
        <Tab
          aria-controls="seo-panel"
          icon={AppIcon}
          id="seo-tab"
          label="SEO Update"
          onClick={() => setTabId("seo")}
          selected={tabId === "seo"}
          //space={2}
        />
        <Tab
          aria-controls="script-panel"
          icon={AppIcon}
          id="script-tab"
          label="Data Load"
          onClick={() => setTabId("script")}
          selected={tabId === "script"}
          //space={2}
        />
      </TabList>

      <TabPanel
        aria-labelledby="data-tab"
        hidden={tabId !== "action-group"}
        id="data-panel"
        paddingTop={4}
      >
        <Card marginTop={2} radius={2}>
          <Heading>Hotel Data Sync</Heading>
          <br />
          <TextArea
            fontSize={2}
            onChange={(event) => setDocs(event.currentTarget.value)}
            padding={[3, 3, 4]}
            placeholder="Add hotel identifiers separated by comma (,)"
            value={docs}
          />
          <Grid columns={2} gap={[1, 1, 2, 3]} paddingTop={4}>
            <Button
              fontSize={2}
              padding={[3, 3, 4]}
              onClick={() =>
                syncData(queries.hotel.type, docs, null, queries.hotel.body)
              }
              text="Sync Above Hotels"
            />
            <Button
              fontSize={2}
              padding={[3, 3, 4]}
              text="Full Data Sync"
              onClick={() => syncFullData('hotel')}
              tone="positive"
            />
          </Grid>
        </Card>
        <Grid columns={1} padding={4}>
          <Code language="json" size={1} style={{ whiteSpace: "break-spaces" }}>
            {JSON.stringify(csvData)}
          </Code>
        </Grid>
      </TabPanel>

      <TabPanel
        aria-labelledby="preview-tab"
        hidden={tabId !== "preview"}
        id="preview-panel"
        paddingTop={4}
      >
        <Card marginTop={2} radius={2}>
          <Heading>Data Update with Script</Heading>
          <br />
          <TextArea
            fontSize={2}
            onChange={(event) => setUpdateScript(event.currentTarget.value)}
            style={{ minHeight: "400px" }}
            padding={[3, 3, 4]}
            placeholder="Provide the script to process the data update"
            value={updateScript}
          />
          <Grid columns={2} gap={[1, 1, 2, 3]} paddingTop={4}>
            <Button
              fontSize={2}
              padding={[3, 3, 4]}
              text="Process Data Update"
              tone="positive"
              onClick={() => dataMigration(updateScript)}
            />
          </Grid>
        </Card>

        {/* <Grid columns={1} padding={4}>
          <Code language="json" size={1} style={{ whiteSpace: 'break-spaces' }}>
            
          </Code>
        </Grid> */}
      </TabPanel>
      <TabPanel
        aria-labelledby="seo-tab"
        hidden={tabId !== "seo"}
        id="seo-panel"
        paddingTop={4}
      >
        <Card marginTop={2} radius={2}>
          <Heading>Add/Update SEO Information</Heading>
          <br />

          <input type="file" accept=".csv" onChange={handleFileUpload} />

          <br />

          {/* <ReactJson src={csvData} /> */}

          <Grid columns={2} gap={[1, 1, 2, 3]} paddingTop={4}>
            <Button
              fontSize={2}
              padding={[3, 3, 4]}
              text="Process Data Update"
              tone="positive"
              onClick={() => updateSeoData(csvData)}
            />
          </Grid>
        </Card>

        {/* <Grid columns={1} padding={4}>
          <Code language="json" size={1} style={{ whiteSpace: 'break-spaces' }}>
            
          </Code>
        </Grid> */}
      </TabPanel>
      <TabPanel
        aria-labelledby="script-tab"
        hidden={tabId !== "script"}
        id="script-panel"
        paddingTop={4}
      >
        <Card marginTop={2} radius={2}>
          <Heading>Document create and tag to Hotel</Heading>
          <br />
          <TextArea
            fontSize={2}
            onChange={(event) => setDataToHotel(event.currentTarget.value)}
            style={{ minHeight: "400px" }}
            padding={[3, 3, 4]}
            placeholder="Provide the JSON array"
            value={dataToHotel}
          />
          <Grid columns={2} gap={[1, 1, 2, 3]} paddingTop={4}>
            <Button
              fontSize={2}
              padding={[3, 3, 4]}
              text="Process Data Update"
              tone="positive"
              // onClick={() => tagDataToHotel(dataToHotel)}
            />
          </Grid>
        </Card>
      </TabPanel>
    </Card>
    // </Container>
  );
}
