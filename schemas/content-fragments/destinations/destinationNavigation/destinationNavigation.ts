import { destinationNavigation } from "../../../constants";

const navItems = [];

destinationNavigation.forEach( d => {
  navItems.push({
    name: d.value,
    title: d.title,
    type: 'boolean',
    initialValue: false
  })
})

export default {
  title: "Destination Navigation",
  name: "destinationNavigation",
  type: "document",
  fields: [
    {
      name: "navType",
      title: "Nav Type",
      type: "string",
      initialValue: "Destination Default"
    },
    ...navItems
  ],
  preview: {
    select: {
      title: 'navType'
    },
    prepare({title}) {
      return {
        title
      };
    },
  }
};
