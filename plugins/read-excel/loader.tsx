import { Card, Flex, Spinner, Text } from "@sanity/ui";
import React, { useState } from "react";

function Loader({ status, message }) {
  return (
    <Card padding={4}>
      <Flex
        align="center"
        direction="column"
        gap={3}
        height="fill"
        justify="center"
      >
        <Spinner muted={status} />
        {message && (
          <Text muted={status} size={4} weight="semibold">
            {message}
          </Text>
        )}
      </Flex>
    </Card>
  );
}

export { Loader };
