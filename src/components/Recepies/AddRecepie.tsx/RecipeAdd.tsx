import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";

import {
  useForm,
  useWatch,
  SubmitHandler,
  FormProvider,
  Controller,
} from "react-hook-form";
import clsx from "clsx";
import { useSnackbar } from "notistack";
import { TextField, Button } from "@mui/material";
import IngredientInput from "../../commun/IngredientInput";
import { useStylesShape } from "../../../styles/shapeStyles";
import { useStylesTextField } from "../../../styles/textFieldStyles";
import { useStylesButton } from "../../../styles/buttonStyles";
import { addRecipe } from "../../../services/recipeServices/recipeServices";

type recipeProps = {
  name: string;
  ingredients: {
    family: string;
    shape: string;
    ingredient__label: string;
    ingredient__quantity: string;
  }[];
  instructions: {
    title: string;
    instruction: string;
    temperature: string;
    time: string;
  }[];
};

const AddRecipe = () => {
  const ShapeClasses = useStylesShape();
  const textFieldClasses: any = useStylesTextField();
  const ButtonClasses = useStylesButton();

  const methods = useForm<recipeProps>({
    defaultValues: {
      name: "",
      instructions: [{ title: "", instruction: "", temperature: "", time: "" }],
      ingredients: [
        {
          family: "",
          shape: "",
          ingredient__label: "",
          ingredient__quantity: "",
        },
      ],
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

  const {
    mutateAsync: addRecipeMutateAsync,
    isSuccess: isaddRecipeSuccess,
    data: addRecipeData,
    isError: isaddRecipeError,
    isLoading: isLoadingaddRecipe,
    reset: resetaddRecipe,
  } = useMutation(addRecipe);

  const onSubmit: SubmitHandler<recipeProps> = (data) => {
    console.log("#data", data);
    addRecipeMutateAsync(data);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  useEffect(() => {
    if (isaddRecipeSuccess && addRecipeData) {
      enqueueSnackbar("recette ajoutée avec succès.", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
      push("/Recettes");
      setTimeout(() => {
        closeSnackbar();
      }, 5000);
    }
  }, [isaddRecipeSuccess, addRecipeData]);

  useEffect(() => {
    if (isaddRecipeError) {
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
  }, [isaddRecipeError]);

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
              multiline
              rows={6}
              placeholder="Instructions de Cuissons"
              label="Instructions de Cuissons"
              className={clsx(textFieldClasses.second)}
              sx={{
                width: "100%",
              }}
              {...register("instructions", {
                required: "Saisir les Instructions de Cuissons",
              })}
            />
            {/* <p className={clsx(textFieldClasses.error)}>
              {errors?.instructions?.message}
            </p> */}
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
