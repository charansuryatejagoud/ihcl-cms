import { client } from "./client";

async function Update({ id, diningRooms }) {
  try {
    const updateRes = await client.patch(id).set(diningRooms).commit();
    return updateRes;
  } catch (err) {
    console.error(err);
  }
}

async function Create({ doc }) {
  try {
    const createRes = await client.create(doc);
    return createRes;
  } catch (err) {
    console.error(err);
  }
}

async function fetchByType({ title, type }) {
  try {
    const res = await client.fetch(
      `*[_type == "${type}" && title == "${title}"][0]{...}`,
    );

    return res;
  } catch (err) {
    console.error(err);
  }
}

export { Update, Create, fetchByType };
