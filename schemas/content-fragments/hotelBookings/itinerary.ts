export default {
    title: "Itinerary",
    name: 'itinerary',
    type: "object",
    fields: [
        {
          name: "itineraryNo",
          title: "Itinerary No",
          type: "string",
        },
        {
          name: "guestName",
          title: "Guest Name",
          type: "string",
        },
        {
          name: "bookingStatus",
          title: "Booking Status",
          type: "string",
        },
        {
          name: "paymentStatus",
          title: "Payment Status",
          type: "string",
        },
        {
          name: "checkIn",
          title: "Check In",
          type: "string",
        },
        {
          name: "checkout",
          title: "Check Out",
          type: "string",
        },
        {
          name: "roomCount",
          title: "No of Rooms",
          type: "number",
        },
        {
          name: "guestCount",
          title: "No of Guests",
          type: "number",
        }
    ],
}