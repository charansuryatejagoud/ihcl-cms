/*
    Install Latest packages using npm install
    1. Open cmd.
    2. Check out to /api in cmd.
    3. Run node dummyApi.ts or ts-node dummyApi.ts
    4. Hit the url http://localhost:3000/dummy
*/

const express = require("express");
const sanityClient = require("@sanity/client");

const app = express();
const PORT = 3000;

app.get("/dummy", async (req, res) => {
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
    .fetch(`*[_type == "page" && path == "/testing"][0]{...}`)
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((error) => {
      console.log("error", error);
    });

  // console.log(req);
  //     axios.get(
  //         "https://dummyjson.com/products/1"
  // ).then(response => {
  //     console.log(response.data)
  //     res.send(response.data)

  // }).catch(error =>{

  //     console.log(error)

  // });
});

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
