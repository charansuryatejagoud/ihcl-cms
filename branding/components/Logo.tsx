import { Badge, Flex } from "@sanity/ui";
import React from "react";

// This value will be set during build time
const dataset = process.env.SANITY_STUDIO_API_DATASET || "develop";

const toneMap = {
  develop: "positive",
  staging: "caution",
  production: "critical",
};

export default function Logo() {
  const imageUrl = "/static/app_logo.png";

  return (
    <Flex direction={"row"} align={"center"}>
      <img src={imageUrl} alt="Tata Neu Logo" height={32} />
      <Badge
        tone={toneMap[dataset]}
        paddingX={2}
        style={{
          marginLeft: 10,
        }}
      >
        {dataset}
      </Badge>
    </Flex>
  );
}
