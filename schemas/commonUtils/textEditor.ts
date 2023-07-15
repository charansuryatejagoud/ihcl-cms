import { PageLink } from "@branding/components/page-link/PageLink";
import { linkTypeField, pathUrlRule } from "../shared-utils";

export function textEditor() {
  return {
    name: "textEditor",
    title: "Text Editor",
    type: "object",
    fields: [
      {
        name: "logo",
        title: "Logo",
        type: "image",
      },
      {
        name: "value",
        type: "array",
        of: [{ type: "textActionList" }],
      },
    ],
  };
}

export function textActionList() {
  return {
    name: "textActionList",
    title: "Text Action List",
    type: "object",
    fields: [
      {
        name: "logo",
        title: "Logo",
        type: "image",
      },
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
}
