import { Badge, Flex, Card, Container, TabList, Tab, TabPanel, Heading, TextArea, Button, Grid, Code, TextInput } from "@sanity/ui";
import React, { useState } from "react";
import sanityClient from "@sanity/client";
import { queries } from "./Queries";
import { facilitySectionTitle, mobileFacilities } from "./facilities/facilityData";
import {
  IoApps as AppIcon,
  IoEyeOff as EyeClosedIcon,
  IoEye as EyeOpenIcon,
} from "react-icons/io5";
import Papa from 'papaparse';
import { any } from "prop-types";
// import ReactJson from 'react-json-view';

export default function QueryBuilder() {

  const [tabId, setTabId] = useState('action-group')
  const [docs, setDocs] = useState('')
  const [updateScript, setUpdateScript] = useState('')
  const [docOutput, setDocOutput] = useState({})
  const [dataMigrationOutput, setDataMigrationOutput] = useState({})
  const [dataToHotel, setDataToHotel] = useState('')

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
        console.error('CSV parsing error:', error);
      },
    });
  };

  const _queryHead = (type, id, subQuery) => {
    let _q = `_type == '${type}'`;
    _q = id ? `${_q} && identifier in ${JSON.stringify(id.split(','))}` : _q;
    _q = subQuery ? `${_q} ${subQuery}` : _q;
    return `*[${_q}]`
  }

  const _queryBody = (body) => {
    return body
  }

  const _query = (type, id, subQuery, body) => {
    return `${_queryHead(type, id, subQuery)}${_queryBody(body)}`
  }

  const syncData = (type, id, subQuery, body) => {
    const query = _query(type, id, subQuery, body)
    const client = sanityClient({
      projectId: "ocl5w36p",
      dataset: "production",
      apiVersion: "v2021-10-21",
      token:
        "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
      useCdn: false,
    });

    console.log(query)
    client
      .fetch(query)
      .then((response) => {
        setDocOutput(response)
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  const dataMigration = (query) => {
    const client = sanityClient({
      projectId: "ocl5w36p",
      dataset: "production",
      apiVersion: "v2021-10-21",
      token:
        "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
      useCdn: false,
    });

    console.log(query)
    client
      .fetch(query)
      .then((data) => {

        if (data === null) {
          console.log("No doc found")
        } else {
          setDataMigrationOutput(data)

          data && data.map(async doc => {

            console.log("DOC:::", doc);

            const identifier = doc?.events?.basicInfo?.title?.toLowerCase().replace(/ /g, "-")

            let event = {
              _type: "events",
              title: doc?.events?.basicInfo?.title,
              identifier: identifier,
              seatingStyles: doc?.events?.seatingStyles,
              basicInfo: doc?.events?.basicInfo,
              venueModalDetails: doc?.events?.venueModalDetails,
              highlights: doc?.events?.highlights
            }

            console.log("EVENT:::", event)

            await client
              .create(event)
              .then((event) => {
                console.log("Created new event ", event);
              })
              .catch((err) => {
                console.log("failed to update");
                console.log("err ", err);
              });

          })
        }

      })
      .catch((error) => {
        console.log("error", error);
      });


  }

  const importFacilities = (data) => {

    const client = sanityClient({
      projectId: "ocl5w36p",
      dataset: "production",
      apiVersion: "v2021-10-21",
      token:
        "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
      useCdn: false,
    });

    let activities = {
      "_key": "9828306806a9",
      "_type": "facilityInfo",
      "icon": {
        "_type": "image",
        "asset": {
          "_ref": "image-e1dfe1eab75e0d243fc61d3ef5f7f529d2caf11d-24x24-png",
          "_type": "reference"
        }
      },
      "list": [],
      "title": "ACTIVITIES"
    }

    let hotel = {
      "_key": "89fa4a1ad653",
      "_type": "facilityInfo",
      "icon": {
        "_type": "image",
        "asset": {
          "_ref": "image-793569b75deb4a1528d9daab230fe757a39233a0-24x19-svg",
          "_type": "reference"
        }
      },
      "list": [],
      "title": "HOTEL"
    }

    let dining = {
      "_key": "e27548f412e5",
      "_type": "facilityInfo",
      "icon": {
        "_type": "image",
        "asset": {
          "_ref": "image-d4acf9ceb7f45f293af90b8c84c04507a7d59735-24x24-svg",
          "_type": "reference"
        }
      },
      "list": [],
      "title": "DINING"
    }

    let wellness = {
      "_key": "0f4b0a65fd36",
      "_type": "facilityInfo",
      "icon": {
        "_type": "image",
        "asset": {
          "_ref": "image-b50bc380118700d4f6dd9b4431552cb1b0096922-29x18-svg",
          "_type": "reference"
        }
      },
      "list": [],
      "title": "WELLNESS"
    }

    let rooms = {
      "_key": "4e6034a2c1fc",
      "_type": "facilityInfo",
      "icon": {
        "_type": "image",
        "asset": {
          "_ref": "image-009d678d4c5300dfa0638840b070e0722845762b-24x19-svg",
          "_type": "reference"
        }
      },
      "list": [],
      "title": "ROOMS"
    }

    let locations = {
      "_key": "7cf20edcc1f4",
      "_type": "facilityInfo",
      "icon": {
        "_type": "image",
        "asset": {
          "_ref": "image-986127afac51704f9281afb8a7d61502944d6863-17x24-svg",
          "_type": "reference"
        }
      },
      "list": [],
      "title": "LOCATION"
    }

    let facilities = []

    facilities.push(activities);
    facilities.push(hotel);
    facilities.push(dining);
    facilities.push(rooms);
    facilities.push(wellness);
    facilities.push(locations);

    let doc = {
      "_type": "facilities",
      "facilityDetails": facilities,
      "mobileFacilities": mobileFacilities,
      "sectionTitle": facilitySectionTitle,
      "title": "Taj Fateh Prakash Palace, Udaipur"
    }

    client.create(doc).then((event) => {

      // get the _id from created document
      // fetch the hotel by identifeir given from the data, say rambagh-palace-jaipur
      // update the facility ref to the given hotel

    })
      .catch((err) => {
        console.log("failed to update");
        console.log("err ", err);
      });
  }

  const tagDataToHotel = (data) => {
    importFacilities(data)
  }

  const updateSeoData = (data) => {

    const client = sanityClient({
      projectId: "ocl5w36p",
      dataset: "production",
      apiVersion: "v2021-10-21",
      token:
        "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
      useCdn: false,
    });


    data && data.map(async doc => {

      console.log("DOCUMENT:", doc);

      const hotel = doc.Hotel

      if(doc.Detail != '') {
        const detail = doc.Detail;

        if(doc.Page == 'offers-and-promotions') {
          //offerPackages Document
          // Update SEO for Offers
  
        } else if(doc.Page == 'restaurants') {
          //Restaurant Document
          // Update SEO for Restaurant
          // {
          //   seoDescription,
          //   seoKeywords,
          //   pageTitle
          // }
  
        }
      } else {
        //Hotel Document

        switch(doc.Page) {
          case '':
          // Update SEO for Overview
          // hotelOverview-> {
          //   pageTitle, seoKeywords, description,             
          // }

          break;
          case 'rooms-and-suites':
          // Update SEO for Rooms Data
  
          break;
          case 'fitness-centre':
          // Update SEO for Wellness
  
          break;
          case 'j-wellness-circle':
          // Update SEO for Wellness
  
          break;
          case 'image-gallery': 
          // Update SEO for Gallery
  
          break;
          case 'restaurants': 
          // Update SEO for Restaurants
          
          break;
          case 'offers-and-promotions': 
          // Update SEO for Offers
          
          break;
          case 'local-things-to-do':
          // Update SEO for Attractions
  
          break;
          case 'meetings-and-events':
          // Update SEO for Events
  
          break;
          case 'experiences':
          // Update SEO for Experiences
  
          break;
          case 'niu-and-nau':
          // Niu
  
          break;
          default:
  
          break;
        }
      }

      // await client
      //     .patch('user.cf26c3dd-7c63-4fcc-b936-6069b05213a7')
      //     .set({
      //       calculator: {
      //         type: 'reference',
      //       },
      //     })
      //     .commit();
      // client.create(doc).then((event) => {

      //   // get the _id from created document
      //   // fetch the hotel by identifeir given from the data, say rambagh-palace-jaipur
      //   // update the facility ref to the given hotel
  
      // })
      //   .catch((err) => {
      //     console.log("failed to update");
      //     console.log("err ", err);
      //   });
    });
  }

  return (
    // <Container width={0}>
    <Card padding={4}>
      <TabList space={2}>
        <Tab
          aria-controls="data-panel"
          icon={AppIcon}
          id="data-tab"
          label="Data Sync"
          onClick={() => setTabId('action-group')}
          selected={tabId === 'action-group'}
        //space={2}
        />
        <Tab
          aria-controls="preview-panel"
          icon={tabId === 'preview' ? EyeOpenIcon : EyeClosedIcon}
          id="preview-tab"
          label="Data Migration"
          onClick={() => setTabId('preview')}
          selected={tabId === 'preview'}
        // space={2}
        />
        <Tab
          aria-controls="seo-panel"
          icon={AppIcon}
          id="seo-tab"
          label="SEO Update"
          onClick={() => setTabId('seo')}
          selected={tabId === 'seo'}
        //space={2}
        />
        <Tab
          aria-controls="script-panel"
          icon={AppIcon}
          id="script-tab"
          label="Data Load"
          onClick={() => setTabId('script')}
          selected={tabId === 'script'}
        //space={2}
        />
      </TabList>

      <TabPanel
        aria-labelledby="data-tab"
        hidden={tabId !== 'action-group'}
        id="data-panel"
        paddingTop={4}
      >
        <Card marginTop={2} radius={2}>
          <Heading>Hotel Data Sync</Heading>
          <br />
          <TextArea
            fontSize={2}
            onChange={(event) =>
              setDocs(event.currentTarget.value)
            }
            padding={[3, 3, 4]}
            placeholder="Add hotel identifiers separated by comma (,)"
            value={docs}
          />
          <Grid columns={2} gap={[1, 1, 2, 3]} paddingTop={4}>
            <Button
              fontSize={2}
              padding={[3, 3, 4]}
              onClick={() => syncData(queries.hotel.type, docs, null, queries.hotel.body)}
              text="Sync Above Hotels"
            />
            <Button
              fontSize={2}
              padding={[3, 3, 4]}
              text="Full Data Sync"
              tone="positive"
            />
          </Grid>
        </Card>
        <Grid columns={1} padding={4}>
          <Code language="json" size={1} style={{ whiteSpace: 'break-spaces' }}>
            {JSON.stringify(docOutput)}
          </Code>
        </Grid>
      </TabPanel>

      <TabPanel
        aria-labelledby="preview-tab"
        hidden={tabId !== 'preview'}
        id="preview-panel"
        paddingTop={4}
      >
        <Card marginTop={2} radius={2}>
          <Heading>Data Update with Script</Heading>
          <br />
          <TextArea
            fontSize={2}
            onChange={(event) =>
              setUpdateScript(event.currentTarget.value)
            }
            style={{ minHeight: '400px' }}
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
            /></Grid>
        </Card>

        {/* <Grid columns={1} padding={4}>
          <Code language="json" size={1} style={{ whiteSpace: 'break-spaces' }}>
            
          </Code>
        </Grid> */}
      </TabPanel>
      <TabPanel
        aria-labelledby="seo-tab"
        hidden={tabId !== 'seo'}
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
            /></Grid>
        </Card>

        {/* <Grid columns={1} padding={4}>
          <Code language="json" size={1} style={{ whiteSpace: 'break-spaces' }}>
            
          </Code>
        </Grid> */}
      </TabPanel>
      <TabPanel
        aria-labelledby="script-tab"
        hidden={tabId !== 'script'}
        id="script-panel"
        paddingTop={4}
      >
        <Card marginTop={2} radius={2}>
          <Heading>Document create and tag to Hotel</Heading>
          <br />
          <TextArea
            fontSize={2}
            onChange={(event) =>
              setDataToHotel(event.currentTarget.value)
            }
            style={{ minHeight: '400px' }}
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
              onClick={() => tagDataToHotel(dataToHotel)}
            /></Grid>
        </Card>
      </TabPanel>
    </Card>
    // </Container>
  );
}
