import sanityClient from "@sanity/client";

export const APIS = {
  ENV_HOST: "https://api-devv2.tajhotels.com",
  SEARCH_DATA_SYNC: "/searchService/v1/web-hook",
};

const client = sanityClient({
  projectId: "ocl5w36p",
  dataset: "production",
  apiVersion: "v2021-10-21",
  token:
    "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
  useCdn: false,
});

async function updateSeo({ _id, updateData }: any) {
  if (_id) {
    const response =
      _id &&
      (await client
        .patch(_id)
        .set({
          ...updateData,
        })
        .commit()
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.error("Update failed: ", _id, "Error : ", err.message);
          return null;
        }));
    return response;
  } else {
    return false;
  }
}

function getOriginalDoc(documents) {
  return documents.filter((data) => !data?._id?.includes("drafts."))?.[0];
}

export { client, updateSeo, getOriginalDoc };
