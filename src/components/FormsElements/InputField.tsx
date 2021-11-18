import React from "react"
import {
  Controller,
  RegisterOptions,
  useFormContext,
  useFormState,
} from "react-hook-form";
import { OutlinedInputProps, TextField } from "@material-ui/core";

import clsx from "clsx";
import _ from "lodash";
import { useStylesTextField } from "../../styles/textFieldStyles";

interface PropType {
  name: string;
  label?: string;
  disabled?: boolean;
  typeValue?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  InputProps?: Partial<OutlinedInputProps>;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  disabledErrorMessage?: boolean;
}

const InputField = ({
  name,
  label,
  rules,
  InputProps,
  placeholder,
  multiline,
  rows,
  rowsMax,
  disabled = false,
  disabledErrorMessage = false,
  typeValue = "text",
}: PropType) => {
  const classes: any = useStylesTextField();
  const { control, watch } = useFormContext();
  const { errors } = useFormState({ control });

  return (
    <div className={clsx(classes.fieldsMargins)}>
      <Controller
        name={name}
        control={control}
        defaultValue={_.get(watch(), name)}
        render={({ field: { ref, ...rest } }) => (
          <>
            <TextField
              disabled={disabled}
              placeholder={placeholder}
              multiline={multiline}
              rows={rows}
              rowsMax={rowsMax}
              error={Boolean(_.get(errors, name))}
              inputRef={ref}
              {...rest}
              label={label}
              variant="outlined"
              className={clsx(classes.second)}
              InputProps={InputProps}
              type={typeValue}
            />
          </>
        )}
        rules={rules}
      />

      {!disabledErrorMessage ? (
        <div className={clsx(classes.error)}>
          {_.get(errors, name) ? _.get(errors, `${name}.message`) : null}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputField;
