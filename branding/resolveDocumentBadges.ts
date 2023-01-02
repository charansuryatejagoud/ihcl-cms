import defaultResolve from "part:@sanity/base/document-badges";
import { LiveBadge } from "./documentBadges/LiveBadge";
import { ScheduledBadge } from "@sanity/scheduled-publishing";

export default function resolveDocumentBadges(props: any) {
  const { draft, published } = props;
  const isLive = published !== null && published.isLive === true;

  const additionalBadges = isLive ? [LiveBadge] : [];

  return [...defaultResolve(props), ...additionalBadges, ScheduledBadge];
}
