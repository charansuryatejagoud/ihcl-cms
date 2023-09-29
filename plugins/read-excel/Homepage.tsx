import { Card, TabList, Tab, TabPanel, Text } from "@sanity/ui";
import React, { useState } from "react";
import ExportExcel from "./ExportExcel";
import ImportExcel from "./Import/ImportExcel";
import Delete from "./Delete/Delete";

function Homepage() {
  const [id, setId] = useState("import");
  const [state, setState] = useState<{
    status: boolean;
    message: string;
    currentTab?: string;
  }>({
    status: false,
    message: "Loading!!",
  });
  function UpdateLoader({ status, message = "" }) {
    setState({
      status: status,
      message: message,
      currentTab: id,
    });
  }
  function UseLoader() {
    return {
      state,
      UpdateLoader,
    };
  }
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
        <Tab
          aria-controls="delete-panel"
          id="delete-tab"
          label="Delete"
          onClick={() => setId("delete")}
          selected={id === "delete"}
        />
      </TabList>

      <TabPanel
        aria-labelledby="import-tab"
        hidden={id !== "import"}
        id="import-panel"
      >
        <ImportExcel getLoader={UseLoader} />
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
          <ExportExcel getLoader={UseLoader} />
        </Card>
      </TabPanel>

      <TabPanel
        aria-labelledby="delete-tab"
        hidden={id !== "delete"}
        id="delete-panel"
      >
        <Delete getLoader={UseLoader} />
      </TabPanel>
    </Card>
  );
}

export default Homepage;
