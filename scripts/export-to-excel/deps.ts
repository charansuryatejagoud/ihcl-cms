import jsonata from "https://cdn.skypack.dev/jsonata";
export { jsonata };

export { flatten } from "https://cdn.skypack.dev/lodash-es";
// @deno-types="https://cdn.sheetjs.com/xlsx-latest/package/types/index.d.ts"

export {
  writeFile,
  utils,
} from "https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs";

import Spinner from "https://deno.land/x/cli_spinners@v0.0.2/mod.ts";
export const spinner = Spinner.getInstance();
