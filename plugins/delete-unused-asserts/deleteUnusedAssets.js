// This script will find and delete all assets that are not
// referenced (in use) by other documents. Sometimes refered
// to as "orphaned" assets.
//
// Place this script somewhere and run it through
// `sanity exec <script-filename.js> --with-user-token`
// Example: D:\ihcl-sanity\IHCLWebsites\ihcl-cms>sanity exec plugins\delete-unused-asserts\deleteUnusedAssets.js
/* eslint-disable no-console */
import { client } from "../read-excel/client";

const query = `*[ _type in ["sanity.imageAsset", "sanity.fileAsset"] ] 
{_id, "refs": count(*[ references(^._id) ])}
[ refs == 0 ][0..99]._id`              

client
  .fetch(query)
  .then(ids => {
    if (!ids.length) {
      console.log('No assets to delete')
      return true
    }
    console.log(`Deleting ${ids} assets`)
     return ids
        .reduce((trx, id) => trx.delete(id), client.transaction())
        .commit()
        .then(() => console.log('Done!'))
  })
  .catch(err => {
    if (err.message.includes('Insufficient permissions')) {
      console.error(err.message)
      console.error('Did you forget to pass `--with-user-token`?')
    } else {
      console.error(err.stack)
    }
  })