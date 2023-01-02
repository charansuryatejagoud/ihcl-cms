import { useEffect, useMemo, useState } from "react";
import { useDocumentOperation } from "@sanity/react-hooks";
import { FiZap, FiZapOff } from "react-icons/fi";
import { isAdminUser } from "../../schemas/shared-utils";

export function ToggleLiveAction({ id, type, draft, published, onComplete }) {
  const { patch, publish }: any = useDocumentOperation(id, type);
  const doc = useMemo(() => draft || published, [draft, published]);
  const [isPublishing, setIsPublishing] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (isPublishing && !draft) {
      setIsPublishing(false);
    }
  }, [draft]);

  const currentUser = window["_sanityUser"];
  if (!isAdminUser(currentUser)) {
    return null;
  }

  // Unsaved new document
  if (!draft && !published) {
    return null;
  }

  // Return null so the Action does not appear at all until published
  if (draft) {
    return null;
  }

  const isLive = Boolean(published?.isLive);

  return {
    disabled: false,
    dialog: dialogOpen && {
      type: "confirm",
      color: "success",
      onCancel: () => onComplete(),
      onConfirm: () => {
        patch.execute([{ set: { isLive: !isLive } }]);
        publish.execute();
        onComplete();
      },
      message: isLive
        ? `Hide ${
            `"${doc.title}"` ?? `this Document`
          } from being publicly available?`
        : `Make ${`"${doc.title}"` ?? `this Document`} publicly available?`,
    },

    // eslint-disable-next-line no-nested-ternary
    label: isPublishing ? "Updating..." : isLive ? `Remove Live` : `Make Live`,
    icon: isLive ? FiZapOff : FiZap,
    onHandle: () => {
      setIsPublishing(true);
      setDialogOpen(true);
    },
  };
}
