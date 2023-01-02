import _ from "lodash"
import { mkdir, writeFile } from "fs/promises"
import { createWriteStream, WriteStream } from "fs"
import fsPath from "path"
import { JSONPath } from "jsonpath-plus"
import fetch from "node-fetch"
import { AEMToSanityConverter } from "./AEMtoSanityConverter"
import ora from "ora"

const config = {
  debug: true,
  useLocal: false,
  file: process.env["MODEL_FILE"],
  outputDir: `${process.env.HOME}/Downloads`,
  outFile: () => {
    return `${config.outputDir}/pages.ndjson`
  },
}

const converter = new AEMToSanityConverter()

run()

async function run() {
  const stream = createWriteStream(config.outFile())
  const spinner = ora()

  try {
    const ignoredIds = ["_legal"]

    spinner.start("Loading AEM Models")
    const aemModel = await fetchModel()
    const pages = JSONPath({ path: `$.:children[*]`, json: aemModel })
    spinner.succeed()

    spinner.start("Converting to Sanity ndjson")

    _.chain(pages) // One element array to kick off the chain
      .map(converter.convert)
      .map(({ fileName, model, aemModel }) => {
        if (config.debug) {
          writeIntermediateFiles(fileName, model, aemModel)
        }

        return model
      })
      .filter((model) => !ignoredIds.includes(model._id))
      .map((model, index, list) => {
        stream.write(JSON.stringify(model))
        stream.write("\n")
      })
      .tap(() => spinner.succeed())
      .value()

    includeStandardDocuments(stream)
    spinner.succeed("Done.")
    spinner.succeed(`File written to ${config.outFile()}.`)
  } finally {
    spinner.stop()
    stream.close()
  }
}

function includeStandardDocuments(stream: WriteStream) {
  const legal = require("../pages-to-restore/legal.json")
  legal._id = "_legal"

  const settings = require("../pages-to-restore/settings.json")

  ;[legal, settings].forEach((doc) => {
    stream.write(JSON.stringify(doc))
    stream.write("\n")
  })
}

async function fetchModel() {
  if (config.useLocal) {
    if (!config.file) {
      throw new Error(`Please specify the en.model.json file using MODEL_FILE`)
    }

    return require(config.file)
  }

  return fetchAEMJson()
}

async function fetchAEMJson() {
  const response = await fetch(
    "https://author-tatadigital-prod.adobecqms.net/content/tcp-pwa/pwa/en.model.json",
    {
      headers: {
        Authorization:
          "Basic cGF2YW4ucG9kaWxhQHRhdGFkaWdpdGFsLmNvbTo9WDZHKDhTLio8eVIyTFY1",
      },
    },
  )

  const json = await response.json()
  await writeFile(
    fsPath.join(config.outputDir, "en.model.json"),
    JSON.stringify(json),
  )

  return json
}

async function writeIntermediateFiles(
  fileName: string,
  model: any,
  aemModel: any,
) {
  const outPath = fsPath.join(config.outputDir, "sanity-output", fileName)
  const dirName = fsPath.dirname(outPath)
  const baseName = fsPath.basename(outPath, ".json")

  await mkdir(dirName, { recursive: true })
  await writeFile(
    fsPath.join(dirName, `${baseName}.sanity.json`),
    JSON.stringify(model, null, 2),
  )
  await writeFile(
    fsPath.join(dirName, `${baseName}.aem.json`),
    JSON.stringify(aemModel, null, 2),
  )
}
