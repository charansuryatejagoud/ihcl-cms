import { IoList as Icon } from "react-icons/io5";
import { PageLink } from "../../branding/components/page-link/PageLink";
import { linkTypeField, pathUrlRule } from "../shared-utils";

export default {
  name: "serp.productList",
  title: "[SERP] Product List",
  type: "object",
  icon: Icon,
  initialValue: {
    neuPassPriceLabel: "NeuPass Price",
    outOfStockLabel: "Out of Stock",
    title: "[SERP] Product List",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "neuPassPriceLabel",
      title: "Neu Pass Price Label",
      type: "string",
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
      name: "categoryBanners",
      title: "Add Category Banners",
      type: "array",
      of: [
        {
          name: "bannersDetails",
          title: "Banners Details",
          type: "object",
          fields: [
            {
              name: "categoryName",
              title: "Category Name",
              type: "string",
            },
            {
              name: "categoryCode",
              title: "Category Code",
              type: "string",
            },
            {
              name: "image",
              title: "Banner Image",
              type: "image",
            },
            {
              name: "redirectionUrl",
              title: "Banner Redirection Url",
              type: "url",
              validation: pathUrlRule,
              inputComponent: PageLink("type"),
            },
            linkTypeField({ name: "urlType", title: "Banner Url Type" }),
            {
              name: "subBannerImage",
              title: "Sub Banner Image",
              type: "image",
            },
            {
              name: "subBannerRedirectUrl",
              title: "Sub Banner Redirection Url",
              type: "url",
              validation: pathUrlRule,
              inputComponent: PageLink("type"),
            },
            linkTypeField({
              name: "subBannerUrlType",
              title: "Sub Banner Url Type",
            }),
          ],
        },
      ],
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
