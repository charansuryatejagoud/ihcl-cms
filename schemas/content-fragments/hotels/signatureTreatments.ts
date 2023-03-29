export default {
    title:"Signature Treatments",
      name: 'signatureTreatments',
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "string",
        },
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
          name: "specifications",
          title: "Specifications",
          type: "object",
          fields: [
            { name: 'key', type: 'string', title: 'Key' },
            { name: 'value', type: 'string', title: 'Value' },
          ]
        },
      ],
  } 