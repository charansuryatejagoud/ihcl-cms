import React, { useEffect, useState, useRef, useCallback } from "react";
import Papa from "papaparse";
import FormField from "part:@sanity/components/formfields/default";
import { withRouterHOC } from "@sanity/base/router";
import styled from "styled-components";
import { Flex, Box, TextInput, Text, Card, Button } from "@sanity/ui";
import { PublishIcon } from "@sanity/icons";
import sanityClient from "part:@sanity/base/client";
import { useToast } from "@sanity/ui";
import { imageUrlFromFilename } from "@branding/lib/imageUrlBuilder";
import Table from "./Table";

const client = sanityClient.withConfig({ apiVersion: "2021-03-25" });

const ToolRoot = styled(Box)`
  height: 100%;
  width: 100%;
`;

const Uploader = styled(TextInput)``;

function EmptyDataWarning() {
  return (
    <Card padding={4} height="fill">
      <Text align="center" size={[2, 2, 3, 4]}>
        Please select a .csv file
      </Text>
    </Card>
  );
}

function BulkUpload() {
  const toast = useToast();
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);
  const [pageId, setPageId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function changeHandler(event) {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  }

  function onPageIdChange(event) {
    const { value } = event.currentTarget;
    setPageId(value);
  }

  async function getValueByKeyType(key: string, item: any) {
    const [ref] = await imageUrlFromFilename(item[key]);
    console.log(ref);
    if (key?.toLowerCase().includes("image")) {
      return {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: ref?._id,
        },
      };
    } else {
      return item[key];
    }
  }

  async function onSubmit(params) {
    if (!pageId) {
      setError("Page Id is required");
      return;
    }

    if (!parsedData.length) {
      setError("No data to change!");
      return;
    }
    setLoading(true);
    let setValues = {};
    for await (const item of parsedData) {
      let identifier = null;
      const columns = {};
      for await (const key of Object.keys(item)) {
        if (key === "identifier") {
          identifier = item[key];
        } else {
          if (item[key]) {
            columns[`@..items[metadata.identifier=="${identifier}"].${key}`] =
              await getValueByKeyType(key, item);
          }
        }
      }
      setValues = { ...setValues, ...columns };
    }
    try {
      console.log(setValues);
      await client.patch(`drafts.${pageId}`).set(setValues).commit();
      toast.push({
        status: "success",
        title: "Bulk upload has been pushed successfully",
        closable: true,
      });
    } catch (e) {
      console.log(e);
      toast.push({
        status: "error",
        title: "Upload failed",
        description: e.message,
        closable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <ToolRoot>
      <Flex flex={1} justify="space-around" paddingTop={5}>
        <Box>
          <FormField
            label="Add a page id"
            description="This will always store on draft document"
            required
          >
            <TextInput placeholder="Page id" onChange={onPageIdChange} />
          </FormField>
        </Box>
        <Box>
          <FormField label="Add a CSV" description="Only csv file is accepted">
            <Uploader
              placeholder="Page id"
              type="file"
              name="file"
              onChange={changeHandler}
              accept=".csv"
            />
          </FormField>
        </Box>
        <Box>
          <Button
            fontSize={[2, 2, 3]}
            icon={PublishIcon}
            padding={[3, 3, 4]}
            text="Upload"
            tone="primary"
            onClick={onSubmit}
            loading={loading}
          />
          {error && (
            <Box paddingTop={2}>
              <Text>{error}</Text>
            </Box>
          )}
        </Box>
      </Flex>
      <Box padding={5} style={{ overflowX: "scroll" }}>
        {parsedData.length ? (
          <Table tableRows={tableRows} values={values} />
        ) : (
          <EmptyDataWarning />
        )}
      </Box>
    </ToolRoot>
  );
}

export default withRouterHOC(BulkUpload);
