export default {
    title: "Reservation",
    name: 'reservation',
    type: "object",
    fields: [
        {
          name: "guestDetails",
          title: "Guest Details",
          type: "guestDetails",
        },
        {
          name: "payOptions",
          title: "Pay Options",
          type: "payOptions",
        },
        {
          name: "paymentMethods",
          title: "Payment Methods",
          type: "paymentMethods",
        },
    ],
}