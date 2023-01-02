import React from "react";
import { route } from "part:@sanity/base/router";
import BulkUpload from "./BulkUpload";
import BulkUploadIcon from "./BulkUploadIcon";

export default {
  title: "Bulk Upload",
  name: "bulkUpload",
  router: route("/:selectedDocumentId"),
  icon: BulkUploadIcon,
  component: BulkUpload,
};
