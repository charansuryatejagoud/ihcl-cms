import React, { useRef, useState } from "react";
import { Button, Flex } from "@sanity/ui";
import * as XLSX from "xlsx";
import { client } from "./client";

function Delete() {
  async function deleteDocuments() {
    console.log("Deleting");
    await client
      .delete({ query: '*[_type == "hotel" && hotelName == null][0...50]' })
      .then(console.log)
      .catch(console.error);
    console.log("Done");
  }
  return (
    <Flex
      marginTop={4}
      align={"center"}
      style={{ justifyContent: "space-evenly" }}
    >
      <Button
        fontSize={[2, 2, 3]}
        mode="ghost"
        padding={[3, 3, 4]}
        text="Delete"
        onClick={deleteDocuments}
      />
    </Flex>
  );
}

export default Delete;
