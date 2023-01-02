import React, { ForwardedRef, forwardRef, useCallback, useState } from "react";
import { withDocument } from "part:@sanity/form-builder";
import { Heading, Box, Button, Flex, TextInput, useToast } from "@sanity/ui";
import { FormBuilderInput } from "@sanity/form-builder/lib/FormBuilderInput";
import { urlFor } from "../lib/imageUrlBuilder";
import { IoCopyOutline } from "react-icons/io5";
import Fieldset from "part:@sanity/components/fieldsets/default";
import _ from "lodash";
import { setIfMissing } from "@sanity/form-builder/PatchEvent";

const FormattedImageUrl = forwardRef((props: any, ref: ForwardedRef<any>) => {
  const {
    type,
    value,
    compareValue,
    focusPath,
    markers,
    presence,
    level,
    onFocus,
    onBlur,
    onChange,
  } = props;
  const { image, width, height, quality } = props.value;
  const toast = useToast();
  const formattedUrl = image?.asset?._ref
    ? urlFor(image?.asset?._ref)
        .withOptions(
          _.omitBy(
            {
              width,
              height,
              quality,
            },
            (v) => !v,
          ),
        )
        .url()
    : null;

  const fieldNames = type.fields.map((f) => f.name);
  const childPresence =
    presence.length === 0
      ? presence
      : presence.filter((item) => fieldNames.includes(item.path[0]));
  const childMarkers =
    markers.length === 0
      ? markers
      : markers.filter((item) => fieldNames.includes(item.path[0]));
  const handleFieldChange = useCallback(
    (field, fieldPatchEvent) => {
      onChange(
        fieldPatchEvent.prefixAll(field.name).prepend(
          setIfMissing({
            _type: type.name,
          }),
        ),
      );
    },
    [onChange],
  );

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(formattedUrl);
    toast.push({
      status: "info",
      title: "Url copied successfully.!",
    });
  }, [formattedUrl]);

  return (
    <>
      <Box marginBottom={4}>
        <Fieldset
          legend={type.title}
          description={type.description}
          markers={childMarkers}
          presence={childPresence}
        >
          {type.fields.map((field) => (
            <FormBuilderInput
              key={field.name}
              level={level + 1}
              type={field.type}
              value={value && value[field.name]}
              onChange={(patchEvent) => handleFieldChange(field, patchEvent)}
              path={[field.name]}
              markers={markers}
              focusPath={focusPath}
              readOnly={field.type.readOnly}
              presence={presence}
              onFocus={onFocus}
              onBlur={onBlur}
              compareValue={compareValue}
            />
          ))}
        </Fieldset>
      </Box>
      <Heading as="h5" size={1}>
        Formatted Image Url:
      </Heading>
      {formattedUrl && (
        <Flex marginTop={4}>
          <Box>
            <a
              href={formattedUrl}
              target="_blank"
              style={{
                wordBreak: "break-all",
              }}
            >
              {formattedUrl}
            </a>
          </Box>
          <Box marginLeft={4}>
            <Button
              style={{
                cursor: "pointer",
              }}
              fontSize={2}
              icon={IoCopyOutline}
              mode="ghost"
              padding={2}
              onClick={copyToClipboard}
            />
          </Box>
        </Flex>
      )}
    </>
  );
});

export default withDocument(FormattedImageUrl);
