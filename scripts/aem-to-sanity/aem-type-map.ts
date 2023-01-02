import { nanoid } from "nanoid";
import { asImageAssetUrl } from "../shared";
import { nudgeMap } from "./maps/nudges";
import { groupMap } from "./maps/groups";
import { apiContentMap } from "./maps/apiContents";
import { mixed } from "./maps/mixed";

export const ignoredComponents = [
  "tcp-pwa/components/tcp-pwa/common/common-header",
];

export const typeMap = {
  ...nudgeMap,
  ...groupMap,
  ...apiContentMap,
  ...mixed,

  "tcp-pwa/components/tcp-pwa/common/page-spacer-component": (data) => {
    return {
      _type: "blockImage",
      height: Number(data.height),
      image: asImageAssetUrl(data.imageURL),
      largeImage: asImageAssetUrl(data.desktopImageURL),
    };
  },
};

export function convertSingle(item: any) {
  const aemType = item[":type"];

  if (ignoredComponents.includes(aemType)) {
    return null;
  }

  return !typeMap[aemType]
    ? {
        _type: "unknown",
        aemType,
      }
    : typeMap[aemType](item);
}

export function convertMultiple(items: any[]) {
  return items
    .map((x) => convertSingle(x))
    .filter((x) => x !== null)
    .map((x) => {
      return { ...x, _key: nanoid() };
    });
}
