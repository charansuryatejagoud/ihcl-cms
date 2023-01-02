import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import Fieldset from "part:@sanity/components/fieldsets/default";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import { withDocument } from "part:@sanity/form-builder";
import sanityClient from "part:@sanity/base/client";

const client = sanityClient.withConfig({ apiVersion: "2021-03-25" });

const createPatchFrom = (options) => {
  return PatchEvent.from(
    options === "" ? unset() : set(options?.map((item) => item?.value)),
  );
};

const FrozenAndEmptyWarning = () => (
  <p>
    Objects of type tags must have a preload value if they're frozen, as no new
    tags may be added to a frozen tag set
  </p>
);

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
  onChange: any;
};

const AutocompleteTagsComponent = forwardRef((props: Props, ref) => {
  const {
    type: { options, title, description } = {},
    level,
    document: { _type: document, _id: id },
    onChange,
    value,
  } = props;
  const { frozen, preload, closeMenuOnSelect } = options;
  const [selected, setSelected] = useState(
    !value ? [] : value.map((item) => ({ label: item, value: item })),
  );
  const preloadedTags =
    preload?.map((item) => ({ label: item, value: item })) || [];
  useImperativeHandle(ref, () => ({
    focus() {
      this._inputElement.focus();
    },
  }));

  const handleChange = (value) => {
    setSelected(!value ? [] : value);
    onChange(createPatchFrom(!value ? [] : value));
  };

  const selectMenuProps: any = {
    value: selected ? selected : [],
    isMulti: true,
    options: preloadedTags || "",
    onChange: handleChange,
    closeMenuOnSelect,
  };
  if (!frozen) {
    selectMenuProps.onCreateOption = (inputValue) => {
      const newSelected = [...selected];
      newSelected.push({ value: inputValue, label: inputValue });
      setSelected(newSelected);

      client
        .patch(id)
        .append(document, [{ value: inputValue, label: inputValue }])
        .commit()
        .then(() => onChange(createPatchFrom(newSelected)));
    };
  }
  return (
    <Fieldset level={level} legend={title} description={description}>
      {frozen && !preloadedTags.length ? <FrozenAndEmptyWarning /> : null}
      {frozen ? (
        <Select {...selectMenuProps} />
      ) : (
        <CreatableSelect {...selectMenuProps} />
      )}
    </Fieldset>
  );
});

export default withDocument(AutocompleteTagsComponent);
