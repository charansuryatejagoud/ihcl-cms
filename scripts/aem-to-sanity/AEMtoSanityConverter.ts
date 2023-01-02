import _ from "lodash"
import { JSONPath } from "jsonpath-plus"
import slugify from "slugify"
import { convertMultiple } from "./aem-type-map"

const omittedItemProperties = [
  ":items",
  ":itemsOrder",
  "columnClassNames",
  "gridClassNames",
  "allowedComponents",
  "columnCount",
  "cssData",
]

const allowedPageProperties = [
  "templateName",
  "title",
  ":path",
  ":items",
  ":type",
  ":children",
]

export class AEMToSanityConverter {
  convert = (aemPage: any) => {
    const page = this.cleanAEMModel(aemPage)
    const pathName = page.path.replace("/content/tcp-pwa/pwa/en", "")

    return {
      fileName: `${pathName}.json`,
      model: {
        _type: "page",
        title: page.title,
        _id: slugify(pathName.replace(/\//g, "_")), // '/' becomes '_'
        path: pathName,
        items: convertMultiple(page.items),
      },
      aemModel: page,
    }
  }

  private cleanAEMModel(aemModel) {
    const aemJSON = _.pick(aemModel, allowedPageProperties)

    // If the :items and :path properties are not preset, exit.
    // This can happen if we are processing a record that is already cleaned.
    // This is an idempotency check.
    if (!_.has(aemJSON, ":items") || !_.has(aemJSON, ":path")) {
      return aemJSON
    }

    return {
      title: aemJSON["title"],
      path: aemJSON[":path"],
      items: this.cleanItems(aemJSON),
    }
  }

  private cleanItems(aemJSON) {
    const items = JSONPath({ path: `:items.root..:items`, json: aemJSON })

    return _.chain(items)
      .flatMap((x) => _.values(x))
      .map((x) => _.omit(x, omittedItemProperties))
      .filter((x) => Object.keys(x).length > 1)
      .value()
  }
}
