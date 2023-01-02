import { IoList as Icon ,IoCodeWorking as ParameterMapIcon} from "react-icons/io5";
import { PageLink } from "../../branding/components/page-link/PageLink";
import { linkTypeField, pathUrlRule } from "../shared-utils";

export default {
  name: "nativeCommerce.productList",
  title: "[Native Commerce] Product List",
  type: "object",
  icon: Icon,
  initialValue: {
    neuPassPriceLabel: "NeuPass Price",
    outOfStockLabel: "Out of Stock",
    title: "[Native Commerce] Product List",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
            name: "parameterMap",
            title: "Parameter Map",
            description: "Parameters as a set of key-value pairs",
            type: "array",
            of: [
              {
                type: "object",
                title: "Parameter",
                icon: ParameterMapIcon,
                options: { columns: 2 },
                fields: [
                  {
                    name: "key",
                    title: "Key",
                    type: "string",
                  },
                  {
                    name: "value",
                    title: "Value",
                    type: "string",
                  },
                ],
                preview: {
                  select: {
                    title: "key",
                    subtitle: "value",
                  },
                },
              },
            ],
          },
    {
      name: "neuCoinsLimit",
      title: "Neu Coins Limit",
      type: "number",
    },
    {
      name: "outOfStockLabel",
      title: "Out Of Stock Label",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "largeImage",
      title: "Large Image",
      description: "Image that will be used for larger screens like Desktop",
      type: "image",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
      validation: pathUrlRule,
      inputComponent: PageLink("type"),
    },
    linkTypeField({ name: "urlType", title: "Type" }),
  ],
};
