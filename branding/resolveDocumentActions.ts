import defaultResolve, {
  PublishAction,
} from "part:@sanity/base/document-actions";
import {ToggleLiveAction} from "./documentActions/ToggleLiveAction";
import {MigrateAction} from "sanity-plugin-migration";
import {isAdminUser, client} from "../schemas/shared-utils";
import {ScheduleAction} from "@sanity/scheduled-publishing";
import {ensureMetadataIdentifiersAreUnique} from "./lib/metadata-identifier";
import {useEffect, useState} from "react";
import {useValidationStatus} from "@sanity/react-hooks";
import {useRouter} from 'part:@sanity/base/router'
import {useToast} from "@sanity/ui";

const CustomPublishAction = (props) => {
  const defaultPublishAction = PublishAction(props);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const toast = useToast();
  const validationStatus = useValidationStatus(props.id, 'page');
  const hasValidationError = validationStatus.markers.some(marker => marker.level === 'error');
  const router = useRouter();

  useEffect(() => {
    if (props.draft) {
      setIsDraft(true);
    }
  }, [props.draft]);

  const onHandle = async () => {
    setIsPublishing(true);
    toast.push({
      status: "info",
      title: "Publishing in progress...",
      closable: true
    });
    const finalDocument = ensureMetadataIdentifiersAreUnique(props.draft);
    const draftId = finalDocument._id;

    finalDocument._id = _getPublishedId(draftId);

    await client.transaction().createOrReplace(finalDocument).delete(draftId).commit().catch((err) => {
      toast.push({
        status: "error",
        title: "Document publishing failed",
        description: err.message,
        closable: true
      });
      router.navigate(router.getState(), {replace: true});
      setIsPublishing(false);
      throw err;
    });

    toast.push({
      status: "success",
      title: "Document has been published successfully",
      closable: true
    });
    router.navigate(router.getState(), {replace: true});
    setIsPublishing(false);
  };
  return {
    ...defaultPublishAction,
    disabled: hasValidationError || !isDraft || isPublishing,
    label: isPublishing ? "Publishing" : "Publish",
    title: hasValidationError ? "This document has validation Error." : "",
    onHandle,
  };
};

function _getPublishedId(id: String) {
  return id.replace("drafts.", "");
}

export default function resolveDocumentActions(props) {
  const currentUser = window["_sanityUser"];
  const canShowMigrateAction =
    process.env["NODE_ENV"] === "development" && isAdminUser(currentUser);

  return [
    ToggleLiveAction,
    CustomPublishAction,
    ...defaultResolve(props).filter(
      (action) => action.name !== "PublishAction",
    ),
    // ...defaultResolve(props),
    ...(canShowMigrateAction ? [MigrateAction] : []),
    ScheduleAction,
  ];
}
