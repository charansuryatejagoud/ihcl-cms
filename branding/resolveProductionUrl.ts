const hosts = {
  production: "https://prod-tneu-preview.tatadigital.com",
  staging: "https://staging-tneu-preview.tatadigital.com",
  develop: "https://dev-tneu-preview.tatadigital.com",
  local: "http://localhost:3000",
};

export default function resolveProductionUrl(document) {
  const path = document?.path?.replace(/^\//, "");

  if (!path) {
    return null;
  }

  const env = process.env["NODE_ENV"];
  const dataset = process.env["SANITY_STUDIO_API_DATASET"] ?? "develop";

  const host = env === "development" ? hosts["local"] : hosts[dataset];
  return `${host}/v2/${path}`;
}
