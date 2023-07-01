const seatingStyles = [
  'Theatre', 'Circular', 'U Shaped', 'Boardroom', 'Classroom', 'Reception', 'Special'
]

export default {

  name: "eventVenueDetails",
  title: "Event Venue Details",
  type: "object",
  fields: [
    {
      name: "basicInfo",
      title: "Basic Info",
      type: "basicInfo"
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        { type: "string" }
      ]
    },
    { name: 'capacity', type: 'string', title: 'Capacity' },
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
  ],
  preview: {
    select: {
      title: 'basicInfo',
      // subtitle: 'releaseDate'
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title.title
      }
    }
  }

}