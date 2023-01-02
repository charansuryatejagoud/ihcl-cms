import { Exporter } from "./exporter.ts";
import defaultConfig from "./default.config.json" assert { type: "json" };
import { Configuration } from "./types.ts";
import { spinner } from "./deps.ts";

spinner.start("Exporting...");
const config = await loadConfig();
try {
  await new Exporter(config).export();
  spinner.succeed(`Exported file ${config.outputPath}`);
} catch (e) {
  spinner.fail(e);
}

async function loadConfig(): Promise<Configuration> {
  try {
    const text = await Deno.readTextFile("./config.json");
    return {
      ...defaultConfig,
      ...JSON.parse(text),
    };
  } catch {
    return defaultConfig as Configuration;
  }
}
