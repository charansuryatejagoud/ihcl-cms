import { IoApps, IoSettings } from "react-icons/io5";

export default {
  name: "richText",
  title: "Rich Text",
  type: "object",
  groups: [
    { name: "main", title: "Main", icon: IoApps },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group:"main"
    },
    {
        name:"identifier",
        title:"Identifier",
        type:"string",
        group:"main"
    },
    {
        name:"logo",
        title:"Logo",
        type:"image",
        group:"main"
    },  
    {
        title: "Show Divider For border",
        name: "showDividerForBorder",
        type: "boolean",
        initialValue:true,
        group:"main",
      },
      {
        title: "Is Hotel Info",
        name: "isHotelInfo",
        type: "boolean",
        initialValue:false,
        group:"main",
      },
    {
      name: "menuItems",
      title:"Menu Items",
      type:"array",
      of:[
        {
            type:"object",
            fields:[
                {
                    name:"blockContent",
                    title:"Block Content",
                    type:"blockContent",
                    
                },
               {
                name:"map",
                title:"Map",
                type:"geopoint"
              }
            ]
        }
      ]
    },
  ],
};
