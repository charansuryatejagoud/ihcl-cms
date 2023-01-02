// /src/MyCustomString.js

import React from "react";
import { FormField } from "@sanity/base/components";
import { TextInput } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import { useId } from "@reach/auto-id"; // hook to generate unique IDs

export const RegularUrlInput = React.forwardRef<HTMLInputElement>(
  (props: any, ref) => {
    const {
      type,
      value,
      readOnly,
      placeholder,
      markers,
      presence,
      onFocus,
      onBlur,
      onChange,
      changeIndicator,
    } = props;

    // Creates a unique ID for our input
    const inputId = useId();

    // Creates a change handler for patching data
    const handleChange = React.useCallback(
      // useCallback will help with performance
      (event) => {
        const inputValue = event.currentTarget.value; // get current value
        // if the value exists, set the data, if not, unset the data
        onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
      },
      [onChange],
    );

    return (
      <FormField
        description={type.description}
        title={type.title}
        __unstable_markers={markers}
        __unstable_presence={presence}
        __unstable_changeIndicator={changeIndicator}
        inputId={inputId}
      >
        <TextInput
          id={inputId}
          onChange={handleChange}
          value={value || ""}
          readOnly={readOnly}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
      </FormField>
    );
  },
);
