import { Stack, Card, Grid, Text, Flex, Box, Badge, Heading } from "@sanity/ui";
import React from "react";
import { BiError } from "react-icons/bi";

function ViewResults({ results }) {
  return (
    <Stack space={[3, 3, 4]} marginTop={4}>
      {results?.length != 0 && (
        <Heading as="h4" size={2}>
          Response
        </Heading>
      )}
      {results?.length == 0 && (
        <Text align="center" size={[2, 2, 3]} style={{ padding: "8px 0px" }}>
          {`No records to display`}
        </Text>
      )}
      {results?.map((item, index) => {
        return (
          <Card
            padding={[3, 3, 4]}
            radius={2}
            shadow={1}
            tone={
              item?.status?.toLowerCase().includes("failed")
                ? "caution"
                : "default"
            }
            key={index}
          >
            <Grid
              column={[1, 3, 3, 3]}
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <Flex direction={"column"} style={{ alignItems: "flex-start" }}>
                <Flex direction={"row"} style={{ alignItems: "center" }}>
                  <Text
                    align="center"
                    size={[2, 2, 3]}
                    weight="bold"
                    style={{ paddingBottom: "8px" }}
                  >
                    {`[${index + 1}]`}
                  </Text>
                  <Badge tone="primary">
                    {item?.response?._type || "Document"}
                  </Badge>
                  <Text
                    align="center"
                    size={[2, 2, 3]}
                    weight="bold"
                    style={{ paddingBottom: "8px" }}
                  >
                    {`
                  ${
                    item?.response?.title ||
                    item?.response?.name ||
                    item?.response?.hotelName ||
                    ""
                  }`}
                  </Text>
                </Flex>

                <Text
                  align="center"
                  size={[2, 2, 3]}
                  style={{ padding: "8px 0px" }}
                >
                  {`Document Id - ${item?.response?._id}`}
                </Text>
                {item?.response?.error && (
                  <Text
                    size={[2, 2, 3]}
                    weight="semibold"
                    style={{
                      paddingTop: "8px",
                    }}
                  >
                    {`Error : ${item?.response?.error?.response?.body?.error?.items?.[0]?.error?.description}`}
                  </Text>
                )}
              </Flex>
              <Flex direction={"row"} style={{ alignItems: "center" }}>
                <Badge
                  padding={2}
                  tone={
                    item?.status?.toLowerCase().includes("failed")
                      ? "caution"
                      : "default"
                  }
                >
                  {item?.status}
                </Badge>
                {item?.response?.error && (
                  <Box marginLeft={1}>
                    <BiError />
                  </Box>
                )}
              </Flex>
            </Grid>
          </Card>
        );
      })}
    </Stack>
  );
}

export { ViewResults };
