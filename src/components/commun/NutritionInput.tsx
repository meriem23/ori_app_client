import React, { FC, useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Box, TextField, IconButton, Autocomplete } from "@mui/material";
import Plus from "../../icons/Plus";
import clsx from "clsx";
import ClearIcon from "@mui/icons-material/Clear";
import { nutritionInputStyles } from "../../styles/nutritionInputStyles";
import { useStylesTextField } from "../../styles/textFieldStyles";
import { nutritionTab } from "../nutritionData";
const NutritionInput = ({ updateMode }: any) => {
  const nutritionClasses = nutritionInputStyles();
  const textFieldClasses: any = useStylesTextField();

  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext<any>();
  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "fact",
  });

  console.log(errors);

  return (
    <>
      <Box>
        {fields.map((item, index) => (
          <Box className={nutritionClasses.field_nutrition_container}>
            <IconButton
              onClick={() => {
                remove(index);
              }}
              className={nutritionClasses.delete_button}
            >
              <ClearIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "0px 0 8px",
              }}
            >
              <Box
                sx={{
                  width: "49.3%",
                }}
              >
                <Controller
                  name={`fact.${index}.fact__label`}
                  control={control}
                  render={({
                    field: { onChange: Change, value, ref, ...rest },
                  }) => (
                    <Autocomplete
                      // {...rest}
                      freeSolo
                      disablePortal
                      //@ts-ignore
                      defaultValue={updateMode ? item : undefined}
                      options={nutritionTab}
                      getOptionLabel={(option) => option.fact__label}
                      sx={{ width: "100%" }}
                      //@ts-ignore
                      onChange={(_, data) => {
                        console.log("#", data);
                        //@ts-ignore
                        Change(data?.fact__label);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Composition Nutritionnelle"
                          className={clsx(textFieldClasses.second)}
                        />
                      )}
                    />
                  )}
                  rules={{ required: "Choisir au moins un composant" }}
                />

                <p>{errors?.fact__label?.message}</p>
              </Box>
              <Box
                sx={{
                  width: "49.3%",
                }}
              >
                <TextField
                  id="demo-helper-text-misaligned"
                  sx={{ minWidth: "100%" }}
                  placeholder="Quantité"
                  className={clsx(textFieldClasses.second)}
                  {...register(`fact.${index}.fact__quantity`, {
                    required: "Saisir la valeur du composant nutritionnel",
                  })}
                />
                <p>{errors?.fact__quantity?.message}</p>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        onClick={() => {
          append({});
        }}
        className={nutritionClasses.add_nutrition_container}
      >
        <IconButton
          size="small"
          color="inherit"
          className={nutritionClasses.add_nutrition}
        >
          <Plus />
        </IconButton>
        <p className={nutritionClasses.add_nutrition_text}>
          Ajouter un nouvel facteur nutritionnel{" "}
        </p>
      </Box>
    </>
  );
};

export default NutritionInput;
