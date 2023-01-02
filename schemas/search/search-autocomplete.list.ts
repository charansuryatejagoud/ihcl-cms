import { IoList as icon } from "react-icons/io5";
import { PageLink } from "../../branding/components/page-link/PageLink";
import { linkTypeField, pathUrlRule } from "../shared-utils";

export default {
  name: "search.autocompleteList",
  title: "[SEARCH] Autocomplete List",
  type: "object",
  icon: icon,
  initialValue: {
    title: "[SEARCH] Autocomplete List",
  },
  fields: [
    {
        name: "title",
        title: "Title",
        type: "string",
      },
    {
      name: "attributionToken",
      title: "Attribution Token",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "clientId",
      title: "Client Id",
      type: "string",
    },
    {
      name: "isScopeVisible",
      title: "IsScopeVisible",
      type: "boolean",
    },
    {
      name: "programId",
      title: "Program Id",
      type: "string",
    },
    {
      name: "query",
      title: "Query",
      type: "string",
    },
    {
      name: "redirect",
      title: "Redirect",
      type: "string",
    },
    {
      name: "resultType",
      title: "Result Type",
      type: "string",
    },
    {
      name: "scope",
      title: "Scope",
      type: "string",
    },
    {
      name: "suggestionText",
      title: "Suggestion Text",
      type: "string",
    },
    {
      name: "suggestionType",
      title: "Suggestion Type",
      type: "string",
    },
    {
      name: "tcpBrand",
      title: "TCP Brand",
      type: "string",
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
