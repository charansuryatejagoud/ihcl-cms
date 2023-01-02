export async function fetchFromSanity(
  dataset: "production" | "staging" | "develop" = "develop",
  query: string,
) {
  const config = {
    projectId: "nc2ghyne",
    dataset,
    apiVersion: "v2021-10-21", // use current UTC date - see "specifying API version"!
    token:
      "sko9WXE0dJpyP4dA4S8cTKNdYWe9gYWfmejRlC2d1oL41ZkT2j2DI1HTVjX6nEJoMEkesAxnvtfnaohtjUuiUikOJufbmBRhEBhTMjL6XTd7wzhMwRzyJprJdp6P9xyfTxwCtmzd89cfM4J4VQidhWZglKGrYgzB48Xrqu20eAGIKwbLhyZS", // or leave blank for unauthenticated usage
  };

  const url = `https://${config.projectId}.api.sanity.io/${
    config.apiVersion
  }/data/query/${config.dataset}?query=${encodeURIComponent(query)}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });

  const { result: data, error } = await response.json();
  if (error) {
    throw error;
  }

  return data;
}
