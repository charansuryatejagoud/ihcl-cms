const seatingStyles = [
  'Theatre', 'Circular', 'U Shaped', 'Boardroom', 'Classroom', 'Reception', 'Special'
]

export default {

  name: "eventVenueDetails",
  titile: "Event Venue Details",
  type: "object",
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'code', type: 'string', title: 'Code' },
    { name: 'type', type: 'string', title: 'Type' },
    {
      name: "seatingStyles",
      title: "Seating Styles",
      type: "array",
      of: [
        {
          name: "style", type: "string", title: "Style",
          options: {
            list: seatingStyles,
          },
        }
      ]
    },
    { name: 'capacity', type: 'string', title: 'Capacity' },
    { name: 'subTitle', type: 'string', title: 'Sub Title' },
    { name: 'description', type: 'string', title: 'Description' },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        { type: "string"}
      ]
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        { name: 'roomImage', type: 'image', title: 'Room Image' },
      ]
    },
  ]

}