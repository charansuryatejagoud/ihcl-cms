import sanityClient from "@sanity/client";

/*
 Steps to run this script:
 1. Open cmd.
 2. Check out to scripts\type-migration in cmd.
 3. Run sanity exec index.ts
*/

run();

async function run() {
  const client = sanityClient({
    projectId: "ocl5w36p",
    dataset: "production",
    apiVersion: "v2021-10-21",
    token:
      "skIlzYEV0AyovwCGKc4uvF7kNe3IdAp3zI4yjdqSBAB9gpj9r4GnsCmYh9o7iRe9htOJCKdLiJBLpjAFnedjFoLiKujs6mvSmwzkvr0t5obhmsh6Gb6s0MOnarAkqzRikYgBYNkZdEEc7v8BtvywajXtW9A4DmxeZ41aYnJbowf8XOPVt5vc",
    useCdn: false,
  });
  console.log("Type migration starts");
  await client
    .fetch(`*[_type == "uiConfiguration"]{...}`)
    .then((response) => {
      console.log("response", response);
      response.map((data) => {
        if (typeof data.padding === "object") {
          console.log("Type migration not required for object", data._id);
        } else if (typeof data.padding === "string") {
          console.log("string", data._id);
          const doc = {
            _type: "uiConfiguration",
            ...data,
            padding: {
              mobile: "",
              desktop: data.padding,
            },
          };
          client
            .createOrReplace(doc)
            .then((response) => {
              console.log("updated successfully ", response);
            })
            .catch((error) => {
              console.log("failed to update", error);
            });
        } else {
          console.log("Padding not authored for object", data._id);
        }
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
}
