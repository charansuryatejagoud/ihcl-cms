import { IoApps, IoDocumentAttach as Icon } from "react-icons/io5";
import { SchemaItem } from "../../types";
import { LockFieldEditor } from "../../../branding/components/LockFieldEditor";
import { isAdminUser } from "../../shared-utils";

interface PageProps {
  items: SchemaItem[];
}

export default function attachedContent(props: PageProps) {
  return {
    title: "Attached Content",
    name: "attachedContent",
    type: "document",
    icon: Icon,
    groups: [{ name: "main", title: "Main", icon: IoApps }],
    initialValue: {
      isLocked: false,
    },
    fields: [
      {
        title: "Lock",
        description:
          "This document can be locked or unlocked by an Administrator only.",
        name: "isLocked",
        type: "boolean",
        inputComponent: LockFieldEditor,
        readOnly: ({ currentUser }) => !isAdminUser(currentUser),
        group: "main",
      },
      {
        title: "Title",
        name: "title",
        type: "string",
        group: "main",
      },
      {
        name: "publishDate",
        type: "datetime",
        title: "Publish Date",
        description: "Will be published on this date",
        group: "main",
      },
      {
        title: "Content",
        name: "content",
        type: "array",
        group: "main",
        of: props.items,
        validation: (Rule) => Rule.required().length(1),
      },
      {
        title: "Is Live",
        name: "isLive",
        type: "boolean",
        group: "main",
        hidden: true,
        readOnly: ({ currentUser }) => !isAdminUser(currentUser),
      },
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "content.0.title",
        media: "content.0.image",
      },
    },
  };
}

/// DO NOT REMOVE
/// Below is the query to use for de-referencing

/*

*[_type == "page" && path == "/doc-lock"][1] {
  ...,
  items[]{
    ...,
    _type == "reference" => {
    "content": *[_id == string("drafts." + ^._ref)][0].content[0]
    }
  }

}

*/
