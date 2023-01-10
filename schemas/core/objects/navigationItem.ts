import { IoNavigate as Icon } from "react-icons/io5";
// import { pathUrlRule } from "../../shared-utils";

export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
      // validation: pathUrlRule,
    },
    {
      name:"mediaIcon",
      title:"Media Icon",
      type:"image"
    },
    {
      title: 'Check Box',
      name: 'checkBox',
       type: 'string',
      options: {
          list: [
              { title: 'Internal',value: 'internal' },
              { title: 'External',value: 'external' }
          ],
          layout:'radio',
          isHighlighted:true
      }
  },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
