import { SchemaItem } from "schemas/types";

interface dialogProps {
  items: SchemaItem[]
}
export const dialogHeader = (props: dialogProps) => {
  return {
    name: "dialogHeader",
    title: "Dialog Header",
    type: "object",
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        name: "logo",
        title: "Logo",
        type: "image",
      },
      {
        title: "Image",
        name: "imageAsset",
        type: "imageAsset",
      },
      {
        title: "Items",
        name: "items",
        type: "array",
        of: props.items,
      },
    ],
  };
}
