import React, { useState, useEffect } from "react";
import {
  useForm,
  useWatch,
  SubmitHandler,
  FormProvider,
  Controller,
} from "react-hook-form";
import { Box, TextField, Autocomplete, Chip, Button } from "@mui/material";
import clsx from "clsx";
import IngredientInput from "../../commun/IngredientInput";
import { useStylesShape } from "../../../styles/shapeStyles";
import { useStylesTextField } from "../../../styles/textFieldStyles";
import { useStylesButton } from "../../../styles/buttonStyles";
import { useGetShapes } from "../../../services/shapesServices/shapesServices";
import { useGetFamilies } from "../../../services/familyServices/familyServices";
import { AddIngredient } from "../../../services/IngredientsServices/ingredientServices";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";

type recipeProps = {
  name: string;
  ingredient: {
    ingredient__label: string;
    ingredient__quantity: string;
  }[];
  instructions: string;
};

const AddRecipe = () => {
  const ShapeClasses = useStylesShape();
  const textFieldClasses: any = useStylesTextField();
  const ButtonClasses = useStylesButton();

  const methods = useForm<recipeProps>({
    defaultValues: {
      name: "",
      ingredient: [
        {
          ingredient__label: "",
          ingredient__quantity: "",
        },
      ],
      instructions: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = methods;

  const dataWatch = useWatch({
    control,
  });

  useEffect(() => {
    console.log("#dataWatch", dataWatch);
  }, [dataWatch]);

  const {
    data: shapesData,
    isLoading: isLoadingShapes,
    isSuccess: isSuccessShapes,
    refetch: refetchShapes,
  } = useGetShapes();

  const {
    data: familiesData,
    isLoading: isLoadingfamilies,
    isSuccess: isSuccessfamilies,
    refetch: refetchIngredients,
  } = useGetFamilies();

  const {
    mutateAsync: addIngredientMutateAsync,
    isSuccess: isaddIngredientSuccess,
    data: addIngredientData,
    isError: isaddIngredientError,
    isLoading: isLoadingaddIngredient,
    reset: resetaddIngredient,
  } = useMutation(AddIngredient);

  const onSubmit: SubmitHandler<recipeProps> = (data) => {
    console.log("#data", data);
    addIngredientMutateAsync(data);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  useEffect(() => {
    if (isaddIngredientSuccess && addIngredientData) {
      enqueueSnackbar("ingrédient ajoutée avec succès.", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
      push("/Ingredients");
      setTimeout(() => {
        closeSnackbar();
      }, 5000);
    }
  }, [isaddIngredientSuccess, addIngredientData]);

  useEffect(() => {
    if (isaddIngredientError) {
      enqueueSnackbar("Une erreur est survenue! veuillez réessayer.", {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
      setTimeout(() => {
        closeSnackbar();
      }, 5000);
    }
  }, [isaddIngredientError]);

  return (
    <div className={ShapeClasses.add_form_container}>
      <p className={ShapeClasses.form_title}>Ajout d'une Recette</p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={clsx(textFieldClasses.fieldsMargins)}>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Nom de la Recette"
              label="Nom de la Recette"
              className={clsx(textFieldClasses.second)}
              sx={{
                width: "100%",
              }}
              {...register("name", {
                required: "Saisir le nom de la recette",
              })}
            />
            <p className={clsx(textFieldClasses.error)}>
              {errors?.name?.message}
            </p>
          </div>
          <IngredientInput />
          <div className={clsx(textFieldClasses.fieldsMargins)}>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Instructions de Cuissons"
              label="Instructions de Cuissons"
              maxRows={5}
              className={clsx(textFieldClasses.second)}
              sx={{
                width: "100%",
              }}
              {...register("instructions", {
                required: "Saisir les Instructions de Cuissons",
              })}
            />
            <p className={clsx(textFieldClasses.error)}>
              {errors?.instructions?.message}
            </p>
          </div>
          <Button
            type="submit"
            className={clsx(
              ButtonClasses.BigBlueButton,
              ShapeClasses.submit_button
            )}
            // disabled={isLoadingaddShape}
          >
            Ajouter
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddRecipe;
