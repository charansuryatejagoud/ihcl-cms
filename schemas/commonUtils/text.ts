import { PageLink } from "@branding/components/page-link/PageLink";
import { linkTypeField, pathUrlRule } from "../shared-utils";

export default {
  name: "textEditor",
  title: "Text",
  type: "object",
  fields: [
    {
      name: "text",
      title: "text",
      type: "string",
    },
    {
        title: "URL",
        name: "link",
        type: "object",
        fields: [
          linkTypeField({ name: "type", title: "Type" }),
          {
            title: "URL",
            name: "href",
            type: "url",
            validation: pathUrlRule,
            inputComponent: PageLink("type"),
          },
        ],
      },
  ],
};
