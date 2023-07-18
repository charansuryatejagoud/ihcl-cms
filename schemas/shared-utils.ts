import {find} from "lodash";
import sanityClient from "part:@sanity/base/client";
import {supportedDocumentFormats} from "./constants";
import {v4 as uuidv4} from "uuid";

export const linkType = {
  internal: "internal",
  external: "external",
  dialog: "dialog",
  externalApplication: "externalApplication",
};

interface LinkTypeFieldProps {
  name: string;
  title: string;
  group?: string;
}
export const linkTypeField = ({
  name = "type",
  title = "Type",
  group,
}: LinkTypeFieldProps) => ({
  name,
  title,
  type: "string",
  group,
  options: {
    list: [
      { title: "Internal", value: linkType.internal },
      { title: "External", value: linkType.external },
      { title: "Dialog", value: linkType.dialog },
      { title: "External Application", value: linkType.externalApplication },
    ],
    layout: "radio",
  },
});

export const hiddenField = {
  name: "isHidden",
  title: "Hide this item",
  description: "If hidden, this item will NOT be included on the client side",
  type: "boolean",
};

export const pathUrlRule = (Rule) =>
  Rule.uri({
    allowRelative: true,
    scheme: ["https", "http", "mailto", "tel", "app"],
  });

export const videoUrlRule = (Rule) =>
  Rule.uri({
    allowRelative: false,
    scheme: ["https"],
  });

export function isAdminUser(currentUser) {
  const adminRole = find(currentUser.roles, (x) =>
    x.name.includes("administrator"),
  );

  return !!adminRole;
}

export const client = sanityClient.withConfig({ apiVersion: "v2021-10-21" });

export const writableClient = sanityClient({
  projectId: "ocl5w36p",
  dataset: "production",
  apiVersion: "v2021-10-21",
  token:
    "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
  useCdn: false,
});

export const fileValidationRule = (Rule) =>
  Rule.required().custom((fields) => {
    let ext;
    if (fields?._upload) {
      const nameChunks = fields?._upload?.file?.name?.split(".") || [];
      ext = nameChunks[nameChunks.length - 1];
    }
    if (fields?.asset) {
      const nameChunks = fields?.asset?._ref?.split("-") || [];
      ext = nameChunks[nameChunks.length - 1];
    }
    if (!ext || !supportedDocumentFormats.includes(ext?.toLowerCase()))
      return `${
        ext || "File"
      } is not supported. Only supported file types are ${supportedDocumentFormats.join(
        ", ",
      )}`;
    return true;
  });

export const newTableCell = () => ({
  _key: uuidv4(),
  _type: "cell",
  value: "",
});

export const newTableRow = (initialCellCount = 1) => ({
  _key: uuidv4(),
  _type: "row",
  cells: Array(initialCellCount)
    .fill(1)
    ?.map(() => newTableCell()),
});

export const generateTablePath = (
  rowKey: string | number,
  cellKey: string | number = undefined,
  property: string = undefined,
) => {
  const path: any = [typeof rowKey === "number" ? rowKey : { _key: rowKey }];
  if (cellKey !== undefined) {
    path.push(
      "cells",
      typeof cellKey === "number" ? cellKey : { _key: cellKey },
    );
  }
  if (property !== undefined) path.push(property);

  return path;
};
