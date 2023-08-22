import { Badge, Flex, Card, Container, TabList, Tab, TabPanel, Heading, TextArea, Button, Grid } from "@sanity/ui";
import React, {useState} from "react";
import {
  IoApps as AppIcon,
  IoEyeOff as EyeClosedIcon,
  IoEye as EyeOpenIcon,
} from "react-icons/io5";

export default function Logo() {
  
  const [tabId, setTabId] = useState('action-group')

  const [docs, setDocs] = useState('')

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
            label="Preview"
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
        </TabPanel>

        <TabPanel
          aria-labelledby="preview-tab"
          hidden={tabId !== 'preview'}
          id="preview-panel"
        >
          <Card marginTop={2} padding={4}>
            <Heading>Preview</Heading>
          </Card>
        </TabPanel>
      </Card>
    // </Container>
  );
}
