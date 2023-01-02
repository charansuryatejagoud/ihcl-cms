import React, { ForwardedRef, useCallback, useEffect, useState } from "react";
import FormField from "part:@sanity/components/formfields/default";
import { Autocomplete, Box, Card, Stack, Text, TextInput } from "@sanity/ui";
import sanityClient from "part:@sanity/base/client";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import { IoDocumentText } from "react-icons/io5";
import { useId } from "@reach/auto-id";

const client = sanityClient.withConfig({ apiVersion: "v2021-10-21" });

async function fetchResults(term: string | null, type = "page") {
  if (!term) {
    return [];
  }

  const query = `*[
        _type == "${type}" && 
        (title match "*${term}*" || path match "*${term}*")
    ][0..9]{title, path, _id}
    `;

  return client.fetch(query);
}

interface UserSelection {
  _id?: string;
  path: string;
  title?: string;
}
export const InternalPageLink = React.forwardRef(
  (props: any, ref: ForwardedRef<any>) => {
    const {
      type,
      value = "",
      onChange,
      onFocus,
      onBlur,
      markers,
      presence,
      changeIndicator,
    } = props;

    const [initialPath = "", initialParameters = ""] = value?.split("?");

    const [selection, setSelection] = useState<UserSelection | null>({
      path: initialPath,
    });
    const [isFetching, setIsFetching] = useState(false);
    const [query, setQuery] = useState(initialPath);
    const [parameters, setParamters] = useState(initialParameters);
    const [pages, setPages] = useState(null);

    useEffect(() => {
      executeFetch().finally(() => setIsFetching(false));

      async function executeFetch() {
        setIsFetching(true);
        const results = await fetchResults(query, props.type);
        const options = results.map((result) => {
          return {
            value: result._id, // this is used as the key when rendering in a list
            payload: result,
          };
        });

        if (initialPath && !selection?._id) {
          const option = options.find(
            (option) => option.payload.path === initialPath,
          );
          setSelection(option?.payload);
        }

        setPages(options);
      }
    }, [query]);

    useEffect(() => {
      if (selection?.path) {
        const path = `${selection?.path.split("?")[0]}${
          parameters.length ? `?${parameters}` : ""
        }`;
        onChange(PatchEvent.from(path ? set(path) : unset()));
      }
    }, [parameters, selection?.path]);

    const handleSelection = useCallback(
      (id: string, options) => {
        const option = options.find((option) => option.value === id);
        const path = option?.payload.path;
        setSelection(option?.payload);
      },
      [onChange],
    );

    const handleAutocompleteKeyDown = useCallback(
      (event) => {
        // escape
        if (event.keyCode === 27) {
          onFocus?.([]);
        }
      },
      [onFocus],
    );

    const inputId = useId();

    return (
      <FormField
        label={type.title}
        description={type.description}
        __unstable_markers={markers}
        __unstable_presence={presence}
        __unstable_changeIndicator={changeIndicator}
        inputId={inputId}
      >
        <Stack space={3}>
          <Autocomplete
            ref={ref}
            value={selection?.title}
            options={pages}
            onQueryChange={(query) => setQuery(query)}
            onChange={(value) => handleSelection(value, pages)}
            loading={isFetching}
            openButton
            placeholder={"Name of the page or path"}
            renderOption={({ payload }: any) => {
              return <PageLinkItem title={payload.title} path={payload.path} />;
            }}
            renderValue={(value, option) => {
              return option?.payload.title ?? selection.title ?? value;
            }}
            icon={<IoDocumentText />}
            id={inputId}
            filterOption={() => true}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleAutocompleteKeyDown}
          />

          {selection?.path ? (
            <Text weight={"semibold"}>{selection.path}</Text>
          ) : (
            <Text muted>No page selected</Text>
          )}
          <span />
          <span />
          <Text>Query Parameters</Text>
          <Text size={1}>
            Add query parameters only without question mark. For Example :
            <br></br>
            URL : /v1/swt?programId=tcfasfab&swtUrl=tataunistore.com<br></br>
            Query Parameters : programId=tcfasfab&swtUrl=tataunistore.com
          </Text>
          <TextInput
            onChange={(event) => setParamters(event.currentTarget.value)}
            value={parameters}
          />
        </Stack>
      </FormField>
    );
  },
);
InternalPageLink.displayName = "PageLink";

function PageLinkItem(props: { title; path }) {
  return (
    <Card as="button">
      <Box paddingX={3} paddingY={2}>
        <Text>{props.title}</Text>
        <Box marginTop={2}>
          <Text size={1} muted>
            {props.path}
          </Text>
        </Box>
      </Box>
    </Card>
  );
}
