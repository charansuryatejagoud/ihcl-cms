import { nanoid } from "nanoid";
import { asImageAssetUrl, fixURL } from "../../shared";
import { extractApiSource } from "./apiContents";

export const groupMap = {
  "tcp-pwa/components/tcp-pwa/offer-zone/oz-brand-logo-card": (data) => {
    return {
      _type: "group",
      title: data.title,
      variant: "list",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "link",
          _key: nanoid(),
          title: x.title,
          url: x.redirectionUrl,
          type: "external",
          variant: "icon",
          image: asImageAssetUrl(x.logo),
          active: true,
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/content-zone/category-launcher": (data) => {
    return {
      _type: "group",
      title: data.headerText,
      variant: "list",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "link",
          _key: nanoid(),
          title: x.title,
          url: x.ctaURL,
          type: x.ctaType,
          variant: "icon",
          image: asImageAssetUrl(x.backgroundImageURL),
          active: true,
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/common/hero-banner": (data) => {
    return {
      _type: "group",
      title: data.headerText || undefined,
      hasAllLink: false,
      variant: "large-carousel",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: x.ctaUrl,
          urlType: x.ctaType,
          variant: x.contentFormatType,
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/common/high-level-categories": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      title: data.headerText || undefined,
      variant: "list",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: x.ctaUrl,
          urlType: x.ctaType,
          variant: x.type,
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/templates/component6": (data) => {
    if (
      data.source === "msd" &&
      !data.offers.length &&
      !data.listItems.length
    ) {
      return {
        _type: "apiContent",
        type: extractApiSource(data.source),
        url: data.listLinks.length ? data.listLinks[0].link : data.link,
        payload: data.listLinks.length
          ? data.listLinks[0].payload
          : data.payload,
        title: data.title || data.headerText,
      };
    }
    const items = data.offers.length > 0 ? data.offers : data.listItems;
    return {
      _type: "group",
      hasAllLink: false,
      title: data.headerText || undefined,
      variant: "list",
      items: (items || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: fixURL(x.ctaUrl),
          urlType: x.ctaType,
          variant: x.contentFormatType,
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/common/bundles-you-may-like": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      title: data.headerText || undefined,
      variant: "list",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: x.ctaUrl,
          urlType: x.ctaType,
          variant: x.type,
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/common/expert-reviews": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "carousel",
      title: data.headerText,
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: x.ctaUrl,
          urlType: x.ctaType,
          variant: x.type,
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/templates/top-brands": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.headerText || undefined,
      items: (data.listItems || []).map((x) => {
        return {
          _type: "link",
          _key: nanoid(),
          title: x.title,
          url: x.ctaUrl || undefined,
          type: x.ctaType,
          variant: x.type,
          image: asImageAssetUrl(x.backgroundImage),
          active: true,
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/common/simple-cards": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: x.ctaUrl,
          urlType: x.ctaType,
          variant: x.type,
          image: asImageAssetUrl(x.logo),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/common/categories-cards": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.headerText || "",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: x.ctaUrl,
          urlType: x.ctaType,
          variant: x.contentFormatType,
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/templates/component13": (data) => {
    const asLink = (x) => ({
      _type: "link",
      _key: nanoid(),
      title: x.title,
      url: x.ctaUrl,
      type: x.ctaType,
      variant: "text",
      image: asImageAssetUrl(x.logo),
    });
    const asCard = (x) => ({
      _type: "card",
      _key: nanoid(),
      title: x.title,
      url: x.ctaUrl,
      urlType: x.ctaType,
      image: x.logo
        ? asImageAssetUrl(x.logo)
        : asImageAssetUrl(x.backgroundImage),
    });

    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.headerText || undefined,
      items: (data.listItems || data.beans || data.offers || []).map((x) => {
        if ((data.listItems || data.offers || []).length > 0) {
          return asCard(x);
        }

        return asLink(x);
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/common/location": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.selectCityTitle,
      items: (data.listItems || []).map((x) => {
        return {
          _type: "link",
          _key: nanoid(),
          title: `${x.cityName} (${x.stateName})`,
          url: x.url,
          type: "internal",
          variant: "text",
          active: true,
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/content-zone/cz-comp6": (data) => {
    return {
      _type: "group",
      title: data.pageTitle,
      hasAllLink: false,
      variant: "carousel",
      items: (data?.contentTabItems[0]?.contentTileItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: fixURL(x.ctaURL),
          urlType: x.ctaType,
          variant: x.contentType,
          image: asImageAssetUrl(x.backgroundImageURL),
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/common/mcl": (data) => {
    return {
      _type: "group",
      title: data.headerText,
      subtitle: data.headerDescriptionText,
      hasAllLink: true,
      variant: "carousel",
      allLink: {
        _type: "link",
        title: data.widgetCTAText,
        url: fixURL(data.widgetCTAURL),
        type: data.widgetCTAType,
        active: true,
      },
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: fixURL(x.ctaURL),
          urlType: x.ctaType,
          variant: x.contentType,
          image: asImageAssetUrl(x.backgroundImageURL),
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/offer-zone/oz-banner": (data) => {
    return {
      _type: "group",
      title: "Offer Zone",
      hasAllLink: false,
      variant: "carousel",
      items: (data.offers || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          description: x.description,
          url: fixURL(x.ctaUrl),
          urlType: x.ctaType,
          variant: "offer",
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/common/just-out-component": (data) => {
    return {
      _type: "group",
      title: data.headerText,
      subtitle: data.headerDescriptionText,
      hasAllLink: false,
      variant: "carousel",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          description: x.description,
          url: fixURL(x.ctaURL),
          urlType: x.ctaType,
          variant: "polaroid",
          image: asImageAssetUrl(x.backgroundImageURL),
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/common/deals-you-might-like": (data) => {
    return {
      _type: "group",
      title: data.headerText,
      hasAllLink: false,
      variant: "carousel",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          title: x.title,
          url: fixURL(x.ctaURL),
          urlType: x.ctaType,
          variant: "landscape",
          image: asImageAssetUrl(x.backgroundImageURL),
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/homepage/misc-horizontal-list": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "nudge",
          _key: nanoid(),
          title: x.title,
          description: x.description,
          image: asImageAssetUrl(x.imageURL),
          action: {
            url: fixURL(x.ctaURL),
            type: x.ctaType,
            title: x.ctaText,
          },
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/common/exclusive-carousel": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "large-carousel",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          url: fixURL(x.ctaURL),
          urlType: x.ctaType,
          variant: "portrait",
          image: asImageAssetUrl(x.backgroundImageURL),
          largeImage: asImageAssetUrl(x.desktopBackgroundImageURL),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/common/tata-pay-ribbon": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      items: (data.listItems || []).map((x) => {
        return {
          _type: "link",
          _key: nanoid(),
          url: fixURL(x.ctaURL),
          type: x.ctaType,
          title: x.title,
          image: asImageAssetUrl(x.backgroundImageURL),
          variant: "icon",
          active: Boolean(x.isActive),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/templates/component11": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "grid-cols2",
      title: data.headerText,
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          url: fixURL(x.ctaURL),
          urlType: x.ctaType,
          title: x.title,
          image: asImageAssetUrl(x.backgroundImageURL),
          largeImage: asImageAssetUrl(x.desktopBackgroundImageURL),
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/content-zone/cz-comp3": asContentZoneArticle,
  "tcp-pwa/components/tcp-pwa/content-zone/cz-comp4": asContentZoneArticle,
  "tcp-pwa/components/tcp-pwa/content-zone/cz-comp8": asContentZoneArticle,

  "tcp-pwa/components/tcp-pwa/common/sub-categories-widget": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.headerText,
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          url: fixURL(x.ctaUrl),
          urlType: x.ctaType,
          title: x.title,
          variant: x.contentFormatType,
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/hotels/booking-component": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      items: (data.beans || []).map((x) => {
        return {
          _type: "link",
          _key: nanoid(),
          url: x.ctaUrl,
          title: x.ctaLabel,
          type: x.ctaType,
          image: asImageAssetUrl(x.logo),
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/common/card-with-carousel": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "carousel",
      title: data.headerText,
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          url: x.ctaUrl,
          title: x.title,
          urlType: x.ctaType,
          variant: x.contentFormatType,
          image: x.backgroundImage
            ? asImageAssetUrl(x.backgroundImage)
            : asImageAssetUrl(x.logo),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/food-and-beverage/qmin-or-starbucks": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.headerText || "",
      items: (data.items || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          url: x.redirectURL,
          title: x.title || x.text || "",
          urlType: x.type,
          variant: "icon",
          image: asImageAssetUrl(x.sideImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/quick-deilvery": (data) => {
    let categories = data.categories.length ? data.categories : [];
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.headerText,
      items: categories.map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          url: x.redirectURL,
          title: x.title,
          urlType: x.type,
          variant: "icon",
          image: asImageAssetUrl(x.sideImage),
        };
      }),
    };
  },
  "tcp-pwa/components/tcp-pwa/common/special-preview": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.headerText || "",
      items: (data.beans || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          url: x.ctaUrl,
          urlType: x.ctaType,
          variant: x.contentFormatType,
          image: asImageAssetUrl(x.backgroundImage),
        };
      }),
    };
  },

  "tcp-pwa/components/tcp-pwa/common/story-landing-page": (data) => {
    return {
      _type: "group",
      hasAllLink: false,
      variant: "list",
      title: data.link,
      items: (data.listItems || []).map((x) => {
        return {
          _type: "card",
          _key: nanoid(),
          url: x.ctaURL,
          urlType: x.ctaType,
          variant: x.type,
          image: asImageAssetUrl(x.backgroundImageURL),
          largeImage: asImageAssetUrl(x.desktopBackgroundImageURL),
        };
      }),
    };
  },
};

function asContentZoneArticle(data) {
  return {
    _type: "group",
    title: data.headerText,
    hasAllLink: false,
    variant: "large-carousel",
    items: data.content.map((x) => {
      return {
        _type: "card",
        _key: nanoid(),
        title: x.title,
        url: fixURL(x.ctaURL),
        urlType: x.ctaType,
        variant: x.contentType,
        image: asImageAssetUrl(x.backgroundImageURL),
      };
    }),
  };
}
