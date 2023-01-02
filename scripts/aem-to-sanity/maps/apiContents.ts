export const apiContentMap = {
  "tcp-pwa/components/tcp-pwa/common/recent-deals": (data) => {
    return {
      _type: "apiContent",
      type: extractApiSource(data.source),
      url: data.link,
      payload: data.payload,
      title: data.title || data.headerText,
    }
  },
  "tcp-pwa/components/tcp-pwa/common/multi-card": (data) => {
    return {
      _type: "apiContent",
      type: extractApiSource(data.source),
      url: data.link,
      payload: data.payload,
      title: data.title || data.headerText,
    }
  },
  "tcp-pwa/components/tcp-pwa/reward-benefits/rnb-offer-carousel": (data) => {
    return {
      _type: "apiContent",
      type: extractApiSource(data.source),
      url: data.listLinks.length ? data.listLinks[0].link : data.link,
      payload: data.listLinks.length ? data.listLinks[0].payload : data.payload,
      title: data.title || data.headerText,
    }
  },
}

export function extractApiSource(source) {
  switch (source) {
    case "aem":
      return "adobe.aem"

    case "msd":
      return "msd.recommendation"

    case "target":
      return "adobe.target"

    default:
      return "unknown"
  }
}
