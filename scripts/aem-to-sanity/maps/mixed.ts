import { asImageAssetUrl, fixURL } from "../../shared";
import { nanoid } from "nanoid";
import { extractApiSource } from "./apiContents";

export const mixed = {
  "tcp-pwa/components/tcp-pwa/offer-zone/oz-msd": (data) => {
    if (data.source === "msd") {
      return {
        _type: "apiContent",
        type: extractApiSource(data.source),
        url: data.api,
        payload: JSON.stringify({ recName: data.recName }),
        title: data.title,
      };
    } else if (data.source === "aem") {
      const hasAllLink = !!data.widgetCTAURL;
      const allLink = hasAllLink
        ? {
            _type: "link",
            url: fixURL(data.widgetCTAURL),
            type: data.widgetCTAType,
            title: data.widgetCTAText,
            active: true,
          }
        : undefined;

      return {
        _type: "group",
        title: data.title,
        hasAllLink,
        allLink,
        variant: "carousel",
        items: data.listItems.map((x) => {
          return {
            _type: "card",
            _key: nanoid(),
            title: x.offerTitle,
            url: fixURL(x.ctaURL),
            urlType: x.ctaType,
            variant: "offer",
            image: asImageAssetUrl(x.backgroundImageURL),
          };
        }),
      };
    }
  },
};
