export default {
  name: "propertyList",
  title: "Property List",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "giftCard",
      title: "Gift Card",
      type: "string",
      description: "This Field Specifies the usage of this Gift Card for this Particular Hotel",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "state",
      title: "State",
      type: "string",
    },
    {
      name: "ctaLabel",
      title: "CTA Label",
      type: "navigationItem",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "state",
    },
  }
};
