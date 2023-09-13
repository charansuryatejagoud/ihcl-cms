import { Card, TabList, Tab, TabPanel } from "@sanity/ui";
import React, { useState } from "react";
import ReadExcel from "./ReadExcel";
import ExportExcel from "./ExportExcel";

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
        <Card border marginTop={2} padding={4} radius={2}>
          <ReadExcel />
        </Card>
      </TabPanel>

      <TabPanel
        aria-labelledby="export-tab"
        hidden={id !== "export"}
        id="export-panel"
      >
        <Card border marginTop={2} padding={4}>
          <ExportExcel />
        </Card>
      </TabPanel>
    </Card>
  );
}

export default Homepage;
