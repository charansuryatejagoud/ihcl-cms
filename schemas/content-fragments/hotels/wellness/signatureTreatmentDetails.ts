export default {
    title:"Signature Treatment Details",
      name: 'signatureTreatmentDetails',
      type: "object",
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
          name: "specifications",
          title: "Specifications",
          type: "array",
          of: [{ type: "specifications" }]
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                { name: 'roomImage', type: 'image', title: 'Room Image' },
            ]
        },
      ],
  } 