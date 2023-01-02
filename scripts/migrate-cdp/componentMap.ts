import { convertToBlocks } from "./convert-to-block";
import { nanoid } from "nanoid";

const domain = "https://www.tatadigital.com";
const imageRegex = /\.(jpe?g|png|gif|bmp)$/i;

export const componentMap = {
  unknown: (data) => {
    return {
      _type: "card",
      _key: nanoid(),
      variant: "card-default",
      title: "Unknown component",
      description: JSON.stringify(data),
    };
  },
  "tcp/components/content/swt-journey/stickybutton": (data) => undefined,
  "foundation/components/table": (data) => undefined,
  "foundation/components/text": (data) => undefined,
  "tcp/components/content/swt-journey/search-category-component": (data) =>
    undefined,
  "tcp/components/content/swt-journey/component9": (data) => undefined,
  "tcp/components/content/swt-journey/component9A": (data) => undefined,
  "tcp/components/content/swt-journey/component10": (data) => undefined,
  "tcp/components/content/swt-journey/header1": (data) => {
    return [
      asImageAsset(data.desktopBanner),
      asBlock({
        title: data.title,
        description: data.addInfo,
        content: data.description,
      }),
    ];
  },
  "tcp/components/content/swt-journey/header2": (data) => {
    return [
      asImageAsset(data.desktopBanner),
      asBlock({
        title: data.title,
        description: data.addInfo,
        content: data.description,
      }),
    ];
  },
  "tcp/components/content/swt-journey/header3": (data) => {
    return [
      asImageAsset(data.desktopBanner),
      asBlock({ title: data.title, content: data.description }),
    ];
  },
  "tcp/components/content/swt-journey/component1": (data) => {
    return {
      _type: "nudge",
      _key: nanoid(),
      variant: "default",
      action: {
        url: data.link,
        type: data.ctaType,
        title: data.button,
      },
    };
  },
  "tcp/components/content/swt-journey/component2": (data) => {
    return [
      asImageAsset(data?.slidesList?.item0.slidesImage),
      asBlock({ title: data.title, content: data.description }),
    ];
  },
  "tcp/components/content/swt-journey/component12": (data) => {
    return asBlock({ title: data.quote, content: data.description1 });
  },
  "tcp/components/content/swt-journey/component3": (data) => {
    const innerItem = data?.contentsList?.item0;

    return {
      _type: "nudge",
      _key: nanoid(),
      variant: "default",
      image: asImageAsset(data.backgroundImage),
      title: innerItem?.title,
      content: convertToBlocks(innerItem?.contentDescription),
      action: {
        url: data.ctaURL,
        type: data.ctaType,
        title: data.ctaLabel,
      },
    };
  },
  "tcp/components/content/swt-journey/component4": (data) => {
    return [
      groupFromList(data.slidesList),
      asBlock({ content: data.description }),
    ];
  },
  "tcp/components/content/swt-journey/component5": (data) => {
    return [
      groupFromList(data.slidesList),
      asBlock({ content: data.description }),
    ];
  },
  "tcp/components/content/swt-journey/component7": (data) => {
    return [
      groupFromList(data.slidesList),
      asBlock({ content: data.description }),
    ];
  },
  "tcp/components/content/swt-journey/component8": (data) => {
    return groupFromList(data.slidesList);
  },
  "tcp/components/content/swt-journey/component11": (data) => {
    return groupFromList(data.productList);
  },
  "tcp/components/content/swt-journey/component6": (data) => {
    return [
      asImageAsset(data.attachment),
      asBlock({ title: data.title, content: data.cons }),
    ];
  },
};

function asImageAsset(url: string) {
  if (!url) {
    return undefined;
  }

  const imageUrl = url.startsWith("https") ? url : `${domain}${url}`;

  if (imageRegex.test(imageUrl) === false) {
    return undefined;
  }

  return {
    _type: "image",
    _sanityAsset: `image@${imageUrl}`,
  };
}

function asBlock({
  title,
  description,
  content,
}: {
  title?: string;
  description?: string;
  content?: string;
}) {
  const text = [
    title ? `<h3>${title}</h3>` : "",
    description ? `<h4>${description}</h4>` : "",
    content ?? "",
  ].join("");

  return convertToBlocks(text);
}

function groupFromList(list) {
  if (!list) {
    return undefined;
  }

  const itemKeys = Object.keys(list).filter((key) => key.startsWith("item"));

  return {
    _type: "group",
    variant: "list",
    items: itemKeys.map((key) => {
      const item = list[key];

      return {
        _type: "card",
        variant: "card-default",
        image: asImageAsset(
          // NOTE: retain this order of checks
          item.backgroundImage ||
            item.slidesImage ||
            item.image ||
            item.productImage,
        ),
        title: item.productname || item.productName,
        content: convertToBlocks(item.description),
      };
    }),
  };
}
