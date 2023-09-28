import { iconTypes } from "../../constants";
import { client } from "../../shared-utils";

export default {
  title: "App Icons",
  name: "appIcons",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "key",
      title: "Key",
      type: "string",
      validation: (Rule) =>
          Rule.required().custom(async (key, { document }) => {
            const documentId = document._id.replace("drafts.", "");

            // Finds a icon which has the currently specified icon, excluding the current icon
            const appIcons = await client.fetch(
              `*[_type == "appIcons" && key == "${key}" && !(_id match "*${documentId}")]{_id}[0]`,
            );
            const iconExists = !!appIcons;

            // Returns an error message if page exists, else the validation is true
            return iconExists ? "This icon is already in use." : true;
          }),
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
    {
      name: "iconType",
      title: "Icon Type",
      type: "string",
      options: { list: iconTypes },
    }
  ],
};
