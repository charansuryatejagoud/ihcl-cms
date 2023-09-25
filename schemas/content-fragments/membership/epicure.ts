export default {
    title: "Epicure",
    name: "epicure",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "identifier",
        title: "Identifier",
        type: "string",
      },
      {
        name: "tabularData",
        title: "Tabular Data",
        type: "array",
        of: [
          {
            name: "rowData",
            type: "applicableBenefits",
          },
        ],
      },
    ],
  };
  