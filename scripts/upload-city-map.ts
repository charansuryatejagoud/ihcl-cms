import { getClient } from "./shared";
import { nanoid } from "nanoid";

const client = getClient("develop");

import cities from "./cities.json";

const cityMap = Object.keys(cities).map((cityIdentifier) => ({
  cityIdentifier,
  cities: cities[cityIdentifier].join(","),
  _key: nanoid(),
}));

client
  .patch("drafts.appConfig")
  .set({
    cityMap,
  })
  .commit()
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.error(err);
  });
