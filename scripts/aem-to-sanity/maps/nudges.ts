import { nanoid } from "nanoid";
import { asImageAssetUrl, fixURL } from "../../shared";
import { extractApiSource } from "./apiContents";

export const nudgeMap = {
  "tcp-pwa/components/tcp-pwa/homepage/nudge": asApiContent,
  "tcp-pwa/components/tcp-pwa/homepage/nudge3": asApiContent,
  "tcp-pwa/components/tcp-pwa/homepage/nudge4": asApiContent,
  "tcp-pwa/components/tcp-pwa/homepage/nudge5": asApiContent,
  "tcp-pwa/components/tcp-pwa/homepage/nudge-component": (data) => {
    return {
      _type: "nudge",
      _key: nanoid(),
      title: data.title,
      image: asImageAssetUrl(data.backgroundImageURL),
      action: {
        url: fixURL(data.ctaURL),
        type: data.ctaType,
        title: data.ctaText,
      },
    };
  },

  "tcp-pwa/components/tcp-pwa/common/special-privileges": (data) => {
    return {
      _type: "nudge",
      _key: nanoid(),
      title: data.title,
      description: data.description,
      image: asImageAssetUrl(data.backgroundImage),
      action: {
        title: data.ctaLabel,
        url: data.ctaUrl || undefined,
        type: "external",
        variant: "text",
      },
    };
  },
  "tcp-pwa/components/tcp-pwa/reward-benefits/welcome-video": (data) => {
    return {
      _type: "nudge",
      _key: nanoid(),
      title: data.title || "",
      image: asImageAssetUrl(data.thumbnailURL),
      description: data.description || "",
      action: {
        title: data.customizedText,
        url: data.videoURL || undefined,
        type: "external",
        variant: data.offers.length ? "offer" : undefined,
      },
    };
  },
  "tcp-pwa/components/tcp-pwa/reward-benefits/elite-member": (data) => {
    return {
      _type: "nudge",
      _key: nanoid(),
      title: data.welcomeLabel || "",
      image: asImageAssetUrl(data.logo),
      description: data.description || "",
      action: {
        title: data.ctaLabel || data.customizedText || "",
        url: data.ctaUrl || undefined,
        type: "external",
        variant: "icon",
      },
    };
  },
};

function asApiContent(data) {
  return {
    _type: "apiContent",
    _key: nanoid(),
    type: extractApiSource(data.source),
    payload: JSON.stringify({ mbox: data.mBox }),
  };
}
