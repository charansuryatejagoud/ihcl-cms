import { Card, TabList, Tab, TabPanel, Text } from "@sanity/ui";
import React, { useState } from "react";
import ExportExcel from "./ExportExcel";
import ImportExcel from "./ImportExcel";

function Homepage() {
  const [id, setId] = useState("import");
  return (
    <Card padding={4}>
      <TabList space={2}>
        <Tab
          aria-controls="import-panel"
          id="import-tab"
          label="Import"
          onClick={() => setId("import")}
          selected={id === "import"}
        />
        <Tab
          aria-controls="export-panel"
          id="export-tab"
          label="Export"
          onClick={() => setId("export")}
          selected={id === "export"}
        />
      </TabList>

      <TabPanel
        aria-labelledby="import-tab"
        hidden={id !== "import"}
        id="import-panel"
      >
        <ImportExcel />
      </TabPanel>

      <TabPanel
        aria-labelledby="export-tab"
        hidden={id !== "export"}
        id="export-panel"
      >
        <Card border marginTop={4} padding={4}>
          <Card marginBottom={2}>
            <Text>Currenlty Hotel Banner Images export avaliable*</Text>
          </Card>
          <ExportExcel />
        </Card>
      </TabPanel>
    </Card>
  );
}

export default Homepage;
