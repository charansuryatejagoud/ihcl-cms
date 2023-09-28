import { Box, Flex } from "@sanity/ui";
import React, { useState } from "react";
import { DeleteNullHotels } from "./DeleteNullHotels";
import { DeleteUnusedAssets } from "./DeleteUnusedAssets";
import { ViewResults } from "../ViewResults";
import { Loader } from "../loader";

function Delete({ getLoader }) {
  const { state, currentTab } = getLoader();
  const [results, setResults] = useState([]);
  function updateCallBack(data = null): void {
    data ? setResults((prevData) => [...prevData, data]) : setResults([]);
  }

  return (
    <Box>
      <Flex
        marginTop={4}
        align={"center"}
        style={{ justifyContent: "space-evenly" }}
      >
        <DeleteNullHotels callBack={updateCallBack} getLoader={getLoader} />
        <DeleteUnusedAssets callBack={updateCallBack} getLoader={getLoader} />
      </Flex>
      {state.status && state.currentTab == "delete" && (
        <Loader status={state.status} message={state.message} />
      )}
      <ViewResults results={results} />
    </Box>
  );
}

export default Delete;
