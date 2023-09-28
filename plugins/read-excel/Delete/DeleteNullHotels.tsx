import React from "react";
import { Button } from "@sanity/ui";
import { client } from "../client";
import { ImportComponent } from "../types";

function DeleteNullHotels({ callBack, getLoader }: ImportComponent) {
  const { state, UpdateLoader } = getLoader();
  return (
    <Button
      fontSize={[2, 2, 3]}
      mode="ghost"
      padding={[3, 3, 4]}
      text="Delete Unkown hotels"
      onClick={() => {
        deleteDocuments(callBack, UpdateLoader);
      }}
    />
  );
}
async function deleteDocuments(callBack, UpdateLoader) {
  console.log("Deleting");
  callBack();
  UpdateLoader({
    status: true,
    message: "Deleting Untitled hotels.",
  });
  await client
    .delete({ query: '*[_type == "hotel" && hotelName == null][0...50]' })
    .then((response) => {
      console.log("res", response);
      response?.results?.map((item) => {
        callBack({
          status: "Deleted",
          response: item?.document,
        });
      });
      UpdateLoader({ status: false });
    })
    .catch((error) => {
      console.log(error);
      UpdateLoader({ status: false });
    });
  console.log("Done");
}
export { DeleteNullHotels };
