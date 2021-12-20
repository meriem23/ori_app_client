import React, { FC, useEffect, useState } from "react";
import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import clsx from "clsx";
import { Box, TextField, IconButton, Autocomplete } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Plus from "../../icons/Plus";
import { nutritionInputStyles } from "../../styles/nutritionInputStyles";
import { useStylesTextField } from "../../styles/textFieldStyles";
import { useGetIngredients } from "../../services/IngredientsServices/ingredientServices";
import { useGetFamilies } from "../../services/familyServices/familyServices";
import { Forms__styles } from "../../styles/Forms__styles";
import { Chip } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import OneIngredientInput from "./OneIngredientInput";

const IngredientInput: FC = () => {
  //styles
  const nutritionClasses = nutritionInputStyles();

  //state

  //react hook form
  const {
    control,
    formState: { errors },
  } = useFormContext<any>();

  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "ingredients",
  });

  return (
    <>
      <Box>
        {fields.map((item, index) => (
          <>
            <OneIngredientInput
              remove={remove}
              index={index}
              lengthFields={fields.length}
            />
            {fields.length > index + 1 && (
              <div
                style={{
                  minWidth: "100%",
                  height: 1,
                  backgroundColor: "grey",
                  marginBottom: 22,
                }}
              ></div>
            )}
          </>
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
