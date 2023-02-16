import { FeatureSchemaDefinition } from "schemas/types";

export const ihclForms: FeatureSchemaDefinition = {
  variants: {
    group: [
        {title:"Details Form",value:"ihclforms.details-form"},
        {title:"Payment Form",value:"ihclforms.payment-form"},
        { title: "Feedback Form", value: "ihclforms.group.feedback-form" },
        {title:"Personalize Form",value:"ihclforms.gift-form"}
    ],
    placeholder:[
        {title:"Login Form",value:"ihclforms.login-form"},
    ]
}
}