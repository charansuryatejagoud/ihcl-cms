import { VariantDefinition } from "../../types";
import TableInput from "../../../components/table-input";

export const cellSchema = {
  type: "object",
  name: "cell",
  fields: [
    {
      title: "Value",
      name: "value",
      type: "string",
    },
    {
      title: "Is Heading",
      name: "isHeading",
      type: "boolean",
    },
    {
      title: "Row span",
      name: "rowSpan",
      type: "number",
    },
    {
      title: "Col span",
      name: "colSpan",
      type: "number",
    },
    {
      title: "Identifier",
      name: "identifier",
      type: "string",
    },
  ],
};

export const rowSchema = {
  type: "object",
  name: "row",
  fields: [
    {
      title: "Cells",
      name: "cells",
      type: "array",
      of: [{ type: "cell" }],
    },
  ],
};

export default function table({ variants }: { variants: VariantDefinition[] }) {
  return {
    name: "dataGrid",
    title: "Data grid",
    type: "object",
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        initialValue: "dataGrid.default",
        options: {
          list: variants,
        },
      },
      {
        name: "layout",
        title: "Layout",
        type: "string",
        initialValue: "fixed",
        options: {
          list: [
            {
              title: "Auto",
              value: "auto",
            },
            {
              title: "Fixed",
              value: "fixed",
            },
          ],
        },
      },
      {
        name: "identifier",
        title: "Identifier",
        type: "string",
      },
      {
        title: "Edit Table",
        name: "rows",
        inputComponent: TableInput,
        initialValue: [],
        type: "array",
        of: [{ type: "row" }],
      },
    ],
  };
}
