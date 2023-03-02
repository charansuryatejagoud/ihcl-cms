import { BiBarChartAlt } from "react-icons/bi";
import { MdConfirmationNumber } from "react-icons/md";

import { VariantDefinition } from "schemas/types";
interface StepperProps {
  variants: VariantDefinition[];
}

const stepperItem = {
  name: "stepperItem",
  title: "Stepper Item",
  type: "object",
  icon: MdConfirmationNumber,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "stepNo",
      title: "Step No",
      type: "number",
    },
    {
      name: "id",
      title: "Id",
      type: "slug",
      options: {
        source: (doc, context) => context.parent.title,
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      description:
        "Static is a fixed step where as dynamic step will be managed by UI",
      options: {
        list: ["Dynamic", "Static"],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      type: "type",
    },
    prepare({ title, type }) {
      return {
        title,
        subtitle: `${type ?? ""}`,
      };
    },
  },
};

export const stepperComponent = (props: StepperProps) => {
  return {
    name: "stepper",
    title: "Stepper",
    type: "object",
    icon: BiBarChartAlt,
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "subTitle",
        title: "Sub Title",
        type: "string",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: [...props.variants],
        },
      },
      {
        name: "largeVariant",
        title: "Large Variant",
        type: "string",
        options: {
          list: [...props.variants],
        },
      },
      {
        name: "stepperItems",
        title: "Stepper Items",
        type: "array",
        of: [{ ...stepperItem }],
      },
      {
        name: "activeStep",
        title: "Active Step",
        type: "boolean",
        initialValue: false,
      },
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "description",
        media: "image",
        hidden: "isHidden",
      },
      prepare({ title, subtitle, hidden, media }) {
        const hiddenIndicator = hidden ? "🚫 " : "";

        return {
          title: `${hiddenIndicator}${title ?? "<stepper>"}`,
          subtitle,
          media,
        };
      },
    },
  };
};
