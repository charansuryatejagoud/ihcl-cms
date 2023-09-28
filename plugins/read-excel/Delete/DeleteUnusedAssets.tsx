import React from "react";
import { Button } from "@sanity/ui";
import { client } from "../client";
import { QUERY_DELETE_UNUSED_ASSETS } from "../constants";
import { ImportComponent } from "../types";

export function DeleteUnusedAssets({ callBack, getLoader }: ImportComponent) {
  const { UpdateLoader } = getLoader();
  return (
    <Button
      fontSize={[2, 2, 3]}
      mode="ghost"
      padding={[3, 3, 4]}
      text="Delete Unused Assets"
      onClick={() => {
        deleteDocuments(callBack, UpdateLoader);
      }}
    />
  );
}

async function deleteDocuments(callBack, UpdateLoader) {
  callBack();
  UpdateLoader({
    status: true,
    message: "Fetching all unused assets! \n This process will take time.",
  });
  await client
    .fetch(QUERY_DELETE_UNUSED_ASSETS)
    .then((response) => {
      console.log("response", response);
      if (!response.length) {
        console.log("No assets to delete");
        UpdateLoader({ status: false });
        return true;
      }
      UpdateLoader({
        status: true,
        message: `Hang on, Deleting ${response.length} assets \n This process will take time.`,
      });
      response
        .reduce((trx, doc) => trx.delete(doc?._id), client.transaction())
        .commit()
        .then((res) => {
          res?.results?.map((item) => {
            callBack({
              status: "Deleted",
              response: { _id: item?.id, ...item },
            });
          });
          UpdateLoader({ status: false });
        });
    })
    .catch((err) => {
      UpdateLoader({ status: false });
      console.error(err);
    });
}
