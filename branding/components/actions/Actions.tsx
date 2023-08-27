import { Badge, Flex, Card, Container, TabList, Tab, TabPanel, Heading, TextArea, Button, Grid, Code } from "@sanity/ui";
import React, {useState} from "react";
import sanityClient from "@sanity/client";
import { queries } from "./Queries";
import {
  IoApps as AppIcon,
  IoEyeOff as EyeClosedIcon,
  IoEye as EyeOpenIcon,
} from "react-icons/io5";

export default function QueryBuilder() {
  
  const [tabId, setTabId] = useState('action-group')
  const [docs, setDocs] = useState('')
  const [updateScript, setUpdateScript] = useState('')
  const [docOutput, setDocOutput] = useState({})
  const [dataMigrationOutput, setDataMigrationOutput] = useState({})

  const _queryHead = (type, id, subQuery) => {
    let _q = `_type == '${type}'`;
    _q = id ? `${_q} && identifier in ${JSON.stringify(id.split(','))}` : _q;
    _q = subQuery ? `${_q} ${subQuery}` : _q;
    return `*[${_q}]`
  }

  const _queryBody = (body) => {
    return body
  }

  const _query = (type, id, subQuery, body) =>  {
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

        if(data === null) {
          console.log("No doc found")
        } else {
          setDataMigrationOutput(data)

          data && data.map(async doc => {

            console.log("DOC:::", doc);

            const identifier = doc?.events?.basicInfo?.title?.toLowerCase().replace(/ /g,"-")

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
              <Code language="json" size={1} style={{whiteSpace: 'break-spaces'}}>
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
              style={{minHeight: '400px'}}
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
          <Grid columns={1} padding={4}>
              <Code language="json" size={1} style={{whiteSpace: 'break-spaces'}}>
                {JSON.stringify(dataMigrationOutput)}
              </Code>
          </Grid>
        </TabPanel>
      </Card>
    // </Container>
  );
}
