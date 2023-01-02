import { Box, Card, Flex, Switch } from "@sanity/ui";
import React, {useCallback} from "react";
import { PatchEvent, set } from "part:@sanity/form-builder/patch-event";
import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import FormField from "part:@sanity/components/formfields/default";

export const LockFieldEditor = React.forwardRef<HTMLInputElement>(
  (props: any, ref) => {
    const { type, value, readOnly, placeholder, markers, presence, onChange,onFocus,onBlur } = props;

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const flag = Boolean(event.target.checked);
        onChange(PatchEvent.from(set(flag)));
    }, [onChange]);

    return (
      <Card padding={2} tone={value ? "critical" : "positive"} shadow={1}>
        <FormField
          label={type.title}
          description={type.description}
          presence={presence}
          markers={markers}
        >
          <Flex direction={"row"} align={"center"}>
            <Box marginRight={2}>
              {value ? <IoLockClosed /> : <IoLockOpen />}
            </Box>

            <Switch
              checked={value}
              readOnly={readOnly}
              placeholder={placeholder}
              ref={ref}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </Flex>
        </FormField>
      </Card>
    );
  },
);
