import { IoBrowsers as Icon } from "react-icons/io5";
import {
  DialogSizeDefinition,
  SchemaItem,
  VariantDefinition,
} from "../../types";
import connectedStore from "../objects/connectedStore";

interface Props {
  variants: VariantDefinition[];
  connectedStores: VariantDefinition[];
  items: SchemaItem[];
  headers: SchemaItem[];
  footers: SchemaItem[];
  dialogSize: DialogSizeDefinition[];
}

export default function dialog({
  variants,
  items,
  headers,
  footers,
  connectedStores,
  dialogSize,
}: Props) {
  return {
    name: "dialog",
    title: "Dialog",
    type: "document",
    icon: Icon,
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "description",
        title: "description",
        type: "string",
      },
      {
        name: "path",
        title: "Path",
        type: "string",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: variants,
        },
      },
      {
        name: "largeVariant",
        title: "Large Variant",
        type: "string",
        options: {
          list: variants,
        },
      },
      {
        name: "backgroundStyle",
        title: "BackgroundStyle",
        type: "string",
        options: {
          list: [
            { title: "Default", value: "normal" },
            { title: "Hamburger Menu", value: "hamburger" },
          ],
        },
      },
      {
        name: "itemsRepresentation",
        title: "Items Representation",
        type: "string",
        options: {
          list: [
            { title: "Vertical List", value: "list" },
            { title: "Tabs", value: "tabs" },
            { title: "Single Item", value: "single" },
          ],
        },
      },
      {
        name: "tabItemSize",
        title: "Tab Item Size",
        type: "string",
        hidden: ({ parent }) => parent?.itemsRepresentation != "tabs",
        options: {
          list: [
            { title: "Fixed", value: "fixed" },
            { title: "Dynamic", value: "dynamic" },
          ],
        },
      },
      {
        name: "dialogSize",
        title: "Dialog Size",
        type: "string",
        options: {
          list: [
            {
              title: "Small",
              value: "small",
            },
            {
              title: "Medium",
              value: "medium",
            },
            {
              title: "Large",
              value: "large",
            },
          ],
        },
      },
      {
        title: "Items",
        name: "items",
        type: "array",
        of: items,
      },
      {
        title: "Dialog Headers",
        name: "headers",
        type: "array",
        of: headers,
      },
      {
        title: "Connected Stores",
        name: "connectedStores",
        type: "array",
        of: [
          connectedStore({
            variants: connectedStores,
          }),
        ],
      },
      {
        title: "Dialog Footers",
        name: "footers",
        type: "array",
        of: footers,
      },
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "description",
      },
    },
  };
}
