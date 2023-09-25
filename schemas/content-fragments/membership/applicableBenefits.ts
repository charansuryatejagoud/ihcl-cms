export default {
    title: "Applicable Benefits",
    name: "applicableBenefits",
    type: "object",
    fields: [
        {
            title: "Participating Hotel Name",
            name: "partipatingHotelName",
            type: "string"
        },
        {
            name: "participatingHotel",
            title: "Participating Hotel",
            type: "reference",
            to: [{ type: "hotel" }],
        },
        {
            title: "Membership Benefit",
            name: "membershipBenefit",
            type: "object",
            fields: [
                {
                    title: "Discounts on F&B",
                    name: "discountsOnFoodAndBeverage",
                    type: "boolean"
                },
                {
                    title: "Discounts on Spa",
                    name: "discountsOnSpa",
                    type: "boolean"
                }
            ]
        },
        {
            title: "Applicability of one time use vouchers",
            name: "applicableVouchers",
            type: "object",
            fields: [
                {
                    title: "One Night Stay",
                    name: "oneNightStay",
                    type: "boolean"
                },
                {
                    title: "60 Minute Spa Treatment",
                    name: "oneHourSpaTreatment",
                    type: "boolean"
                },
                {
                    title: "Meal for 2",
                    name: "mealForTwo",
                    type: "boolean"
                },
                {
                    title: "Celebration Cake",
                    name: "celebrationCake",
                    type: "boolean"
                },
                {
                    title: "20% off Best Available Rate",
                    name: "bestAvailableRate20",
                    type: "boolean"
                },
                {
                    title: "20% off Best Available Rate  @ Taj Palaces",
                    name: "bestAvailableRateTajPalaces20",
                    type: "boolean"
                },
                {
                    title: "20% off Best Available Rate  @ Taj Safaris",
                    name: "bestAvailableRateTajSafaris20",
                    type: "boolean"
                }
            ]
        },
    ],
    preview: {
      select: {
        title: "partipatingHotelName",
      },
      prepare({ title}) {
        return {
          title: title,
        };
      },
    },
}