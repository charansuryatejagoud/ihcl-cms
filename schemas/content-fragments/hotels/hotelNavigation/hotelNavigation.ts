import { hotelNavigation } from "../../../constants";

const navItems = [];

hotelNavigation.forEach( h => {
  navItems.push({
    name: h.value,
    title: h.title,
    type: 'boolean',
    initialValue: false
  })
})

export default {
  title: "Hotel Navigation",
  name: "hotelNavigation",
  type: "document",
  fields: [
    {
      name: "navType",
      title: "Nav Type",
      type: "string",
      initialValue: "Hotel Default"
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
