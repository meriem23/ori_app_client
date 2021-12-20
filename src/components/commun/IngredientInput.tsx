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
    setValue,
  } = useFormContext<any>();

  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "ingredients",
  });

  const dataWatch = useWatch({
    control,
  });
  //queries and mutations
  // const {
  //   data: familiesData,
  //   isLoading: isLoadingfamilies,
  //   isSuccess: isSuccessfamilies,
  //   refetch: refetchIngredients,
  // } = useGetFamilies();

  // const { data: ingredientData } = useGetIngredients();

  //functions
  // const onDeleteShapesTags = (item: any) => () => {
  //   const dishTags =
  //     dataWatch?.shapes?.filter((row: any) => row.name !== item.name) || [];
  //   setValue("shapes", dishTags as any);
  // };

  //use Effects
  // useEffect(() => {
  //   if (dataWatch.ingredients) {
  //     setselectedFamily(
  //       familiesData.filter((el: any) => el._id === dataWatch.family)[0]
  //     );
  //   } else if (!dataWatch.family) {
  //     setValue("shapes", []);
  //     setselectedFamily(undefined);
  //   }
  // }, [dataWatch.ingredients]);

  return (
    <>
      <Box>
        {fields.map((item, index) => (
          <OneIngredientInput remove={remove} index={index} />
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
