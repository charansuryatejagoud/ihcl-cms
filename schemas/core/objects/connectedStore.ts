import { IoLogoWebComponent as Icon } from "react-icons/io5";
import { VariantDefinition } from "../../types";

export default function connectedStore({
  variants,
}: {
  variants: VariantDefinition[];
}) {
  return {
    name: "connectedStore",
    title: "Connected Store",
    type: "object",
    icon: Icon,
    fields: [
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: variants,
        },
      },
    ],
    preview: {
      select: {
        title: "variant",
      },
    },
  };
}
