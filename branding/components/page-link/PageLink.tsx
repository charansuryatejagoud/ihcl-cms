import React, { ForwardedRef } from "react";
import { RegularUrlInput } from "./RegularUrlInput";
import { InternalPageLink } from "./documentLink";

export const PageLink = (urlTypePropName: string) =>
  React.forwardRef((props: any, ref: ForwardedRef<any>) => {
    const { parent } = props;

    if (parent && parent[urlTypePropName] === "internal") {
      return <InternalPageLink ref={ref} {...props} type={"page"} />;
    } else if (parent && parent[urlTypePropName] === "dialog") {
      return <InternalPageLink ref={ref} {...props} type={"dialog"} />;
    }

    return <RegularUrlInput ref={ref} {...props} />;
  });
