import { flatten, jsonata, utils, writeFile } from "./deps.ts";
import { Configuration, Page, PageRow } from "./types.ts";
import { fetchFromSanity } from "./sanity.ts";

export class Exporter {
  static query = jsonata(`
{
    "path": path, 
    "title": title, 
    "nudges": **[_type = "nudge"].{
        "title": title, 
        "url": action.url, 
        "secondaryUrl": secondaryAction.url, 
        "metadata": metadata
    },
    "cards": **[_type = "card"].{
        "title": title, 
        "url": url, 
        "metadata": metadata
    }
}
`);

  constructor(private config: Configuration) {}

  async export() {
    const pages = await this.fetchPages();
    this.writeExcel(pages);
  }

  private async fetchPages(): Promise<PageRow[]> {
    const paths = this.config.paths.map((x) => `"${x}"`).join(", ");
    const data = await fetchFromSanity(
      this.config.dataset,
      `*[ _type == "page" && path in [${paths}] ]`,
    );

    const rows = data.map((x: any) => {
      const page: Page = Exporter.query.evaluate(x);
      return page.cards.map((card) => {
        return {
          pagePath: page.path,
          cardUrl: card.url,
          cardTitle: card.title ?? "",
          metadataBrand: card.metadata?.brand ?? "",
          metadataTitle: card.metadata?.title ?? "",
          metadataIdentifier: card.metadata?.identifier ?? "",
          metadataContentType: card.metadata?.contentType ?? "",
          metadataContentSubType: card.metadata?.contentSubType ?? "",
        } as PageRow;
      });
    });

    return flatten(rows);
  }

  private writeExcel(pages: PageRow[]) {
    const worksheet = utils.json_to_sheet(pages);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Pages");
    utils.sheet_add_aoa(
      worksheet,
      [
        [
          "Page",
          "Card Url",
          "Card Title",
          "Brand",
          "Title",
          "Identifier",
          "Content Type",
          "Content SubType",
        ],
      ],
      {
        origin: "A1",
      },
    );

    worksheet["!cols"] = [{ wch: 50 }, { wch: 50 }, { wch: 50 }];

    worksheet["!autofilter"] = { ref: `C1:C${pages.length}` };
    writeFile(workbook, this.config.outputPath);
  }
}
