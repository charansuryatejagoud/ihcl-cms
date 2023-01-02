# Export Urls from Sanity pages

This script exports the urls and metadata associated with the various widgets.
Presently only cards and nudges are supported.

## Running the exporter

- Create a local `config.json` file to customize the output, dataset and paths.
  Here is the default config:

```json
{
  "dataset": "production",
  "paths": ["/homepage"],
  "outputPath": "./urls.xlsx"
}
```

- Place your custom `config.json` next to the exporter command-line tool. It
  will automatically be picked up.
- Run the tool on the command line. This has been specifically been created to
  run on **macOS**.

```text
$> ./sanity-export
```

- This will generate an Excel file containing the urls and metadata for cards
  and nudges. This is done for each page specified in the config.
