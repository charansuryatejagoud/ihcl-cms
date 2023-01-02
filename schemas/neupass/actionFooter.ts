import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";
import { linkType, linkTypeField, pathUrlRule } from "../shared-utils";
import { PageLink } from "../../branding/components/page-link/PageLink";

export default {
  name: "neupass.actionFooter",
  title: "[NeuPass] Action Footer",
  type: "object",
  icon: Icon,
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  initialValue: { urlType: linkType.internal },
  fields: [
    {
      name: "action",
      title: "Action",
      type: "link",
      group: "main",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
      group: "configuration",
    },
  ],
};
