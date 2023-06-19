import { SchemaItem, VariantDefinition } from "schemas/types";
import { client, hiddenField, isAdminUser } from "../shared-utils";
import { LockFieldEditor } from "@branding/components/LockFieldEditor";
import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoLogoWebComponent as Icon,
  IoSettings,
  IoCubeSharp,
} from "react-icons/io5";

interface FragmentProps {
  items: SchemaItem[];
  variants: VariantDefinition[];
}

export const contentFragment = (props: FragmentProps) => {
  return {
    name: "contentFragment",
    title: "Content Fragment",
    type: "document",
    icon: IoCubeSharp,
    initialValue: { isNestedFragment: false },
    groups: [
      { name: "main", title: "Main", icon: IoApps },
      { name: "configuration", title: "Configuration", icon: IoSettings },
    ],
    fields: [
      {
        title: "Lock",
        description:
          "This document can be locked or unlocked by an Administrator only.",
        name: "isLocked",
        type: "boolean",
        inputComponent: LockFieldEditor,
        readOnly: ({ currentUser }) => !isAdminUser(currentUser),
      },
      {
        title: "Title",
        name: "title",
        type: "string",
        validation: (Rule) => Rule.required(),
        group: "main",
      },
      {
        name: "path",
        title: "Path",
        description: "A unique path to identify this data fragment",
        type: "string",
        validation: (Rule) =>
          Rule.required().custom(async (path, { document }) => {
            const documentId = document._id.replace("drafts.", "");

            // Finds a page which has the currently specified path, excluding the current page
            const page = await client.fetch(
              `*[_type == "page" && path == "${path}" && !(_id match "*${documentId}")]{_id}[0]`,
            );
            const pageExists = !!page;

            // Returns an error message if page exists, else the validation is true
            return pageExists ? "This path is already in use." : true;
          }),
        group: "main",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: [...props.variants],
        },
        group: "main",
      },
      {
        name: "largeVariant",
        title: "Large Variant",
        type: "string",
        options: {
          list: [...props.variants],
        },
      },
      {
        title: "Sub Title",
        name: "subTitle",
        type: "string",
        group: "main",
      },
      {
        title: "Description",
        name: "description",
        type: "text",
        group: "main",
      },
      {
        title: "Content",
        name: "content",
        type: "blockContent",
        group: "main",
      },
      {
        name: "backgroundImage",
        title: "Background Image",
        type: "image",
        group: "main",
      },
      {
        name: "logo",
        title: "Logo",
        type: "image",
        group: "main",
      },
      {
        name: "mediaType",
        title: "Media Type",
        type: "string",
        options: {
          list: [
            { title: "Video", value: "video" },
            { title: "Image", value: "image" },
          ],
        },
        group: "main",
      },
      {
        name: "imageAsset",
        title: "Image",
        type: "imageAsset",
        hidden: ({ parent }) =>
          parent?.mediaType !== "image" && parent?.largeVariant !== "image",
        group: "main",
      },
      {
        name: "videoAsset",
        title: "Video",
        type: "videoAsset",
        hidden: ({ parent }) =>
          parent?.mediaType !== "video" && parent?.largeVariant !== "video",
        group: "main",
      },
      {
        title: "Multi Text",
        name: "multiText",
        type: "array",
        of: [
          {
            type: "string",
          },
        ],
      },
      {
        title: "Is Nested Fragment?",
        name: "isNestedFragment",
        type: "boolean",
      },
      {
        title: "Items",
        name: "items",
        type: "array",
        of: props.items,
        hidden: ({ parent }) => !parent?.isNestedFragment,
      },
      {
        name: "documents",
        title: "Documents",
        description: "Documents supported are PDF and DOCX.",
        type: "array",
        of: [
          {
            type: "fileDocument",
          },
        ],
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
        title: "Primary Action",
        name: "primaryAction",
        type: "navigationItem",
      },
      {
        title: "Secondary Action",
        name: "secondaryAction",
        type: "navigationItem",
      },
    ],
    preview: {
      select: {
        title: "title",
        path: "path",
      },
      prepare({ title, path }) {
        return {
          title,
          subtitle: `${path ?? ""}`,
        };
      },
    },
  };
};
