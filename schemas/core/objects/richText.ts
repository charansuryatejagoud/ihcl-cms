export default {
  name: "richText",
  title: "Rich Text",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
        name:"identifier",
        title:"Identifier",
        type:"string"
    },
    {
        name:"logo",
        title:"Logo",
        type:"image"
    },  
    {
      name: "row",
      title: "Row",
      type: "number",
    },
    {
      name: "column",
      title: "Column",
      type: "number",
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
                    type:"blockContent"
                },
                {
                    name:"latitude",
                    title:"Latitude",
                    type:"string"
                },
                {
                    name:"longitude",
                    title:"Longitude",
                    type:"string"
                }
            ]
        }
      ]
    },
  ],
};
