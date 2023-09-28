import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "ocl5w36p",
  dataset: "production",
  apiVersion: "v2021-10-21",
  token:
    "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
  useCdn: false,
});
