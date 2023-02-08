export default {
    name: "formGroup.inputObject",
    title: "[FormGroup] Input Object",
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
        name:"showLimit",
        title:"Show Limit",
        type:"boolean",
        initialValue:false,
      },
    //   {
    //     name: "",
    //     title: "",
    //     type: ""
    //   },
      {
        name: "errorList",
        title: "Errors List",
        type: "array",
        of: [
          {
            name: "errors",
            title: "Error Object",
            type: "formGroup.mapObject",
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