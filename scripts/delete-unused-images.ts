import { getClient } from "./shared";

const client = getClient("develop");

const query = `
*[ _type in ["sanity.imageAsset", "sanity.fileAsset"] ]
  {_id, "refs": count(*[ references(^._id) ])}
  [ refs == 0 ]
  ._id
`;

client
  .fetch(query)
  .then((ids) => {
    if (!ids.length) {
      console.log("No assets to delete");
      return true;
    }

    console.log(`Deleting ${ids.length} assets`);

    return ids
      .reduce((trx, id) => trx.delete(id), client.transaction())
      .commit()
      .then(() => console.log("Done!"));
  })
  .catch((err) => {
    console.error(err);
  });
