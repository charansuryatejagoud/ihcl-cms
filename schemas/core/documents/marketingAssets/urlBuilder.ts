import FormattedImageUrl from "../../../../branding/components/FormattedImageUrl";

export const urlBuilder = {
  title: "Url builder",
  type: "object",
  inputComponent: FormattedImageUrl,
  readonly: true,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      name: "width",
      title: "Width",
      description:
        "Width of the image in pixels. Scales the image to be that wide.",
      type: "string",
    },
    {
      name: "height",
      title: "Height",
      description:
        "Height of the image in pixels. Scales the image to be that tall.",
      type: "string",
    },
    {
      name: "quality",
      title: "Quality",
      description:
        "Quality 0-100. Specify the compression quality (where applicable). Defaults are 75 for JPG and WebP and 55 for AVIF.",
      type: "string",
    },
  ],
};
