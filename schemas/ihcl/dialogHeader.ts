const dialogHeaderVariants = [
  {
    title: "Default Dialog Header",
    value: "default-dialog-header",
  },
  {
    title: "Dialog Header With Image Assets",
    value: "dialog-header-with-image-assets",
  },
];

export default {
  name: "dialogHeader",
  title: "Dialog Header",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [...dialogHeaderVariants],
      },
    },
    {
        name: "logo",
        title: "Logo",
        type: "image",
      },
    {
      title: "Image",
      name: "imageAsset",
      type: "imageAsset",
    },
    {
      title: "Language List",
      name: "languageList",
      type: "array",
      of: [{ type: "navigationItem" }],
    },
  ],
};
