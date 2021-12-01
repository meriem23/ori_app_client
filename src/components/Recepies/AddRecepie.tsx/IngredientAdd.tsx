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
import NutritionInput from "../../commun/NutritionInput";
import { useStylesShape } from "../../../styles/shapeStyles";
import { useStylesTextField } from "../../../styles/textFieldStyles";
import { useStylesButton } from "../../../styles/buttonStyles";
import { useGetShapes } from "../../../services/shapesServices/shapesServices";
import { useGetFamilies } from "../../../services/familyServices/familyServices";
import { AddIngredient } from "../../../services/IngredientsServices/ingredientServices";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";

type igredientProps = {
  name: string;
  fact: {
    fact__label: string;
    fact__quantity: string;
  }[];
  family: string;
  shape: string;
};

const AddIngredients = () => {
  const ShapeClasses = useStylesShape();
  const textFieldClasses: any = useStylesTextField();
  const ButtonClasses = useStylesButton();

  const methods = useForm<igredientProps>({
    defaultValues: {
      name: "",
      fact: [
        {
          fact__label: "",
          fact__quantity: "",
        },
      ],
      family: "",
      shape: "",
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

  const onSubmit: SubmitHandler<igredientProps> = (data) => {
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
      <p className={ShapeClasses.form_title}>Ajout d'un ingrédient</p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={clsx(textFieldClasses.fieldsMargins)}>
            {/* <p>Nom Ingrédient</p> */}
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Nom de l'Ingredient"
              label="Nom de l'Ingredient"
              className={clsx(textFieldClasses.second)}
              sx={{
                width: "100%",
              }}
              {...register("name", {
                required: "Saisir le nom de l'ingrédient",
                pattern: {
                  value: /^[a-zA-Z0-9_.-]*$/,
                  message: "Saisir un nom d'ingrédient valide",
                },
              })}
            />
            <p>{errors?.name?.message}</p>
          </div>

          <NutritionInput />

          <Box style={{ padding: "12px 0 8px" }}>
            <Controller
              name="shape"
              control={control}
              render={({
                field: { onChange: Change, value, ref, ...rest },
              }) => (
                <Autocomplete
                  {...rest}
                  freeSolo
                  options={shapesData ? shapesData : []}
                  disableCloseOnSelect
                  onChange={(_, data) => Change(data._id)}
                  getOptionLabel={(option: any) => option.name}
                  // placeholder="Nationality"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputRef={ref}
                      variant="outlined"
                      sx={{ width: "100%" }}
                      className={clsx(textFieldClasses.second)}
                      label="Nom de la forme"
                    />
                  )}
                />
              )}
              rules={{ required: "Veuillez choisir une forme" }}
            />
            <p>{errors?.shape?.message}</p>
          </Box>
          <Box style={{ padding: "12px 0 8px" }}>
            <Controller
              name="family"
              control={control}
              render={({
                field: { onChange: Change, value, ref, ...rest },
              }) => (
                <Autocomplete
                  {...rest}
                  freeSolo
                  options={familiesData ? familiesData : []}
                  disableCloseOnSelect
                  onChange={(_, data) => Change(data._id)}
                  getOptionLabel={(option: any) => option.name}
                  // placeholder="Nationality"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputRef={ref}
                      variant="outlined"
                      sx={{ width: "100%" }}
                      className={clsx(textFieldClasses.second)}
                      label="Nom de la famille"
                    />
                  )}
                />
              )}
              rules={{ required: "Veuillez choisir une famille" }}
            />
            <p>{errors?.family?.message}</p>
          </Box>

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

export default AddIngredients;
