export function fixURL(url: string) {
  return url?.replace(/\.html$/, "").replace("/content/tcp-pwa/pwa/en", "");
}

const domain = "https://www.tatadigital.com";

export function asImageAssetUrl(url: string) {
  if (!url) {
    return undefined;
  }

  const imageUrl = url.startsWith("https") ? url : `${domain}${url}`;
  return {
    _type: "image",
    _sanityAsset: `image@${imageUrl}`,
  };
}

import sanityClient from "@sanity/client";

export function getClient(
  dataset: "production" | "staging" | "develop" = "develop",
) {
  return sanityClient({
    projectId: "nc2ghyne",
    dataset,
    apiVersion: "2021-10-15", // use current UTC date - see "specifying API version"!
    token:
      "sko9WXE0dJpyP4dA4S8cTKNdYWe9gYWfmejRlC2d1oL41ZkT2j2DI1HTVjX6nEJoMEkesAxnvtfnaohtjUuiUikOJufbmBRhEBhTMjL6XTd7wzhMwRzyJprJdp6P9xyfTxwCtmzd89cfM4J4VQidhWZglKGrYgzB48Xrqu20eAGIKwbLhyZS", // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  });
}
