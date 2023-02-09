import { FeatureSchemaDefinition } from "schemas/types";

export const loyalty: FeatureSchemaDefinition = {
    variants: {
      group: [
        {title:"loyalty.Group With tiers",value:"loyalty.group-with-tiers"},
        {title:"loyalty.Group Preview Carousel",value:"loyalty.group-preview-carousel"},
        {title:"loyalty.Details Form",value:"loyalty.details-form"},
        {title:"loyalty.Payment Form",value:"loyalty.payment-form"}

    ],
    card:[
        {title:"loyalty.Image On Text",value:"loyalty.image-on-text"}
    ]
}
}