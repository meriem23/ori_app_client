import React, { FC, useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import clsx from "clsx";
import { Box, TextField, IconButton, Autocomplete } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Plus from "../../icons/Plus";
import { nutritionInputStyles } from "../../styles/nutritionInputStyles";
import { useStylesTextField } from "../../styles/textFieldStyles";
import { useGetIngredients } from "../../services/IngredientsServices/ingredientServices";

const IngredientInput: FC = () => {
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
    name: "ingredient",
  });

  const { data: ingredientData } = useGetIngredients();
  console.log("#", ingredientData);
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
                  name={`ingredient.${index}.ingredient__label`}
                  control={control}
                  render={({
                    field: { onChange: Change, value, ref, ...rest },
                  }) => (
                    <Autocomplete
                      {...rest}
                      freeSolo
                      disablePortal
                      options={ingredientData ? ingredientData : []}
                      getOptionLabel={(option: any) => option.name}
                      sx={{ width: "100%" }}
                      onChange={(_, data) => Change(data)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Nom de l'ingrédient"
                          className={clsx(textFieldClasses.second)}
                        />
                      )}
                    />
                  )}
                  rules={{ required: "Choisir un ingrédient" }}
                />

                <p>{errors?.ingredient__label?.message}</p>
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
                  {...register(`ingredient.${index}.ingredient__quantity`, {
                    required: "Saisir la quantité de l'ingrédient",
                  })}
                />
                <p>{errors?.ingredient__quantity?.message}</p>
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
          Ajouter un nouvel ingrédient
        </p>
      </Box>
    </>
  );
};

export default IngredientInput;
