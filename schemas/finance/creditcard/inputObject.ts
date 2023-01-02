export default {
  name: "creditcard.inputObject",
  title: "[CreditCard] Input Object",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label text",
      type: "string",
    },
    {
      name: "id",
      title: "Identifier text",
      type: "string",
    },
    {
      name: "hintText",
      title: "Hint text",
      type: "string",
    },
    {
      name: "placeholder",
      title: "Placeholder text",
      type: "string",
    },
    {
      name: "errorList",
      title: "Errors List",
      type: "array",
      of: [
        {
          name: "errors",
          title: "Error Object",
          type: "creditcard.mapObject",
        },
      ],
    },
    {
      name: "inputIcon",
      title: "input Icon",
      description: "icon for input field",
      type: "image",
    },
  ],
};
