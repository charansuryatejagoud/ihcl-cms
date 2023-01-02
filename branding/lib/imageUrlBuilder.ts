import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../schemas/shared-utils";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function imageUrlFromFilename(filename: string) {
  const query = `
    *[_type == "sanity.imageAsset" && originalFilename == "${filename}"] {
      _id
    }
  `;
  return client.fetch(query);
}
