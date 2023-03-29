export default {
    title:"Availability",
      name: 'availability',
      type: "object",
      fields: [
        {
          name: "checkinTime",
          title: "Checkin Time",
          type: "datetime",
        },
        {
          name: "checkoutTime",
          title: "Checkout Time",
          type: "datetime",
        },
        {
          name: "roomsInfo",
          title: "Rooms Info",
          type: "string",
        },
        {
          name: "diningInfo",
          title: "Dining Info",
          type: "string",
        },
        {
          name: "wellnessInfo",
          title: "Wellness Info",
          type: "string",
        },
        {
          name: "hotelEssentialInfo",
          title: "Hotel Essential Info",
          type: "string",
        },
      ],
  }