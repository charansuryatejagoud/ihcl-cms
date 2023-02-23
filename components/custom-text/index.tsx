import React, { useState } from "react";
import {
  Box,
  Card,
  Dialog,
  Flex,
  Select,
  Stack,
  TextInput,
  Label,
} from "@sanity/ui";
import { FormField } from "@sanity/base/components";
import { useId } from "@reach/auto-id";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import sanityClient from "part:@sanity/base/client";
import { withDocument } from "part:@sanity/form-builder";
import { EditIcon } from "@sanity/icons";
const client = sanityClient.withConfig({ apiVersion: "2021-03-25" });
type OptionsType = {
  options: any;
  title: string;
  description: string;
};
type Props = {
  type: OptionsType;
  level: any;
  document: any;
  value: any;
  readOnly: any;
  markers: any;
  placeholder: any;
  presence: any;
  onFocus: any;
  onChange: any;
  onBlur: any;
  parent: any;
  options: any;
};
const fontWeights = [
  {
    title: "Normal",
    value: "normal",
  },
  {
    title: "Bold",
    value: "bold",
  },
];
const textVariant = [
  {
    title: "Heading XL",
    value: "headingXL",
  },
  {
    title: "Heading L",
    value: "headingL",
  },
  {
    title: "Heading M",
    value: "headingM",
  },
  {
    title: "Heading S",
    value: "headingS",
  },
  {
    title: "Body L",
    value: "bodyL",
  },
  {
    title: "Body M",
    value: "bodyM",
  },
  {
    title: "Body S",
    value: "bodyS",
  },
];
const CustomText = React.forwardRef((props: Props, ref) => {
 
  const {
    type,
    level,
    value,
    readOnly,
    placeholder,
    markers,
    presence,
    onFocus,
    onBlur,
    onChange,
    document: { _type: document, _id: id },
    parent,
    options,
  } = props;
  // const index = 
  const currentItemIndex = props?.document?.items?.findIndex(
    (x) => x?._key === parent?._key,
    );
    console.log("parent",parent, props);
  console.log("currentItemIndex", currentItemIndex);
  const inputId = useId();
  const colorId = useId();
  const fontWeightId = useId();
  const varitantId = useId();
  const [open, setOpen] = useState<boolean>(false);
  const [color, setColor] = useState(
    props?.document?.items[currentItemIndex]?._textProperties?.color
      ? props?.document?.items[currentItemIndex]?._textProperties?.color
      : "",
  );
  const [fontWeight, setFontWeight] = useState(
    props?.document?.items[currentItemIndex]?._textProperties?.fontWeight
      ? props?.document?.items[currentItemIndex]?._textProperties?.fontWeight
      : "",
  );
  const [variant, setVariant] = useState(
    props?.document?.items[currentItemIndex]?._textProperties?.variant
      ? props?.document?.items[currentItemIndex]?._textProperties?.variant
      : "",
  );
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  console.log("==", props?.document?.items[currentItemIndex]?._textProperties);
  const getUpdatedData = (value, title) => {
    console.log("--> value", value, title);
    const data = {
      ...props?.document?.items[currentItemIndex],
      _textProperties: {
        ...props?.document?.items[currentItemIndex]?._textProperties,
        [title]: value,
      },
    };
    console.log("--> data", data._textProperties);
    return data;
  };
  const handleChange = React.useCallback(
    (event) => {
      const inputValue = event.currentTarget.value;
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange],
  );
  const handleChangeColor = React.useCallback(
    async (event) => {
      const inputValue = event?.currentTarget?.value;
      setColor(inputValue);
      try {
        await client
          .patch(id)
          .insert("replace", `items[${currentItemIndex}]`, [
            getUpdatedData(inputValue, event?.currentTarget?.title),
          ])
          .commit();
      } catch (error) {
        console.log("--> error", error);
      }
    },
    [onChange],
  );
  const handleFontWeight = React.useCallback(
    async (event) => {
      const inputValue = event?.currentTarget?.value;
      setFontWeight(inputValue);
      try {
        await client
          .patch(id)
          .insert("replace", `items[${currentItemIndex}]`, [
            getUpdatedData(inputValue, event?.currentTarget?.title),
          ])
          .commit();
      } catch (error) {
        console.log("--> error", error);
      }
    },
    [onChange],
  );
  const handleVariant = React.useCallback(
    async (event) => {
      const inputValue = event?.currentTarget?.value;
      setVariant(inputValue);
      try {
        await client
          .patch(id)
          .insert("replace", `items[${currentItemIndex}]`, [
            getUpdatedData(inputValue, event?.currentTarget?.title),
          ])
          .commit();
      } catch (error) {
        console.log("--> error", error);
      }
    },
    [onChange],
  );
  console.log("value", value);
  return (
    <Box>
      {" "}
      {/* <Fieldset level={level} legend={type?.title}> */}
      <Flex align="flex-end">
        {" "}
        <Card flex={[1, 2, 3, 4]}>
          {" "}
          <FormField
            description={type.description}
            title={type.title}
            __unstable_markers={markers}
            __unstable_presence={presence}
            inputId={inputId}
          >
            {" "}
            <TextInput
              id={inputId}
              onChange={handleChange}
              value={value || ""}
              readOnly={readOnly}
              placeholder={placeholder}
              onFocus={onFocus}
              onBlur={onBlur}
            />{" "}
          </FormField>{" "}
        </Card>{" "}
        {value && (
          <Card marginLeft={1} flex={1}>
            {" "}
            <EditIcon height={"2rem"} width={"2rem"} onClick={onOpen} />{" "}
          </Card>
        )}
      </Flex>{" "}
      {/* </Fieldset> */}
      {open && (
        <Dialog
          header="Edit Custom Text"
          id="dialog-custom-text"
          onClose={onClose}
          zOffset={1000}
        >
          {" "}
          <Stack padding={4}>
            {" "}
            <Label size={1}>color</Label>{" "}
            <Card marginY={2}>
              {" "}
              {/* <FormField title="Color" inputId={colorId}> */}
              <TextInput
                id={colorId}
                title="color"
                onChange={handleChangeColor}
                value={color}
                readOnly={readOnly}
              />{" "}
              {/* </FormField> */}
            </Card>{" "}
            <Label size={1}>Font Weight</Label>{" "}
            <Card marginY={2}>
              {" "}
              {/* <FormField
                title="Font Weight"
                inputId={fontWeightId}
                __unstable_markers={markers}
                __unstable_presence={presence}
              > */}
              <Select
                id={fontWeightId}
                onChange={handleFontWeight}
                title="fontWeight"
                value={fontWeight}
              >
                {" "}
                <option></option>{" "}
                {fontWeights.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={item.value}
                      // selected={
                      //   props.document.items[currentItemIndex]._textProperties
                      //     ?.fontWeight === item.value
                      // }
                    >
                      {" "}
                      {item.title}
                    </option>
                  );
                })}
              </Select>{" "}
              {/* </FormField> */}
            </Card>{" "}
            <Label size={1}>Variant</Label>{" "}
            <Card marginY={2}>
              {" "}
              {/* <FormField
                title="Variant"
                inputId={varitantId}
                __unstable_markers={markers}
                __unstable_presence={presence}
              > */}
              <Select onChange={handleVariant} title="variant" value={variant}>
                {" "}
                <option></option>{" "}
                {textVariant.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {" "}
                      {item.title}
                    </option>
                  );
                })}
              </Select>{" "}
              {/* </FormField> */}
            </Card>{" "}
          </Stack>{" "}
        </Dialog>
      )}
    </Box>
  );
});
export default withDocument(CustomText);
