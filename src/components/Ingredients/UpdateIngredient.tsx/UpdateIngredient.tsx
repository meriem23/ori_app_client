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
import {
  UpdateIngredientService,
  useGetIngredient,
} from "../../../services/IngredientsServices/ingredientServices";
import { useMutation } from "react-query";
import { useHistory, useLocation, useParams } from "react-router";
import { useSnackbar } from "notistack";

type igredientProps = {
  name: string;
  fact: {
    fact__label: string;
    fact__quantity: string;
  }[];
  family: {
    _id: string;
    name: string;
  };
  shape: {
    _id: string;
    name: string;
  };
};

const UpdateIngredient = () => {
  const ShapeClasses = useStylesShape();
  const textFieldClasses: any = useStylesTextField();
  const ButtonClasses = useStylesButton();

  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();

  const {
    data: IngredientData,
    isLoading: isLoadingIngredient,
    isSuccess: isSuccessIngredient,
    refetch: refetchIngredient,
  } = useGetIngredient(id);

  console.log("#", IngredientData);

  const methods = useForm<igredientProps>({
    defaultValues: {
      name: "",
      fact: [],
      family: {
        _id: "",
        name: "",
      },
      shape: {
        _id: "",
        name: "",
      },
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = methods;

  useEffect(() => {
    setValue("name", IngredientData?.name ? IngredientData?.name : "");
    setValue("fact", IngredientData?.fact ? IngredientData?.fact : []);
    setValue(
      "family",
      IngredientData?.family
        ? IngredientData?.family
        : {
            _id: "",
            name: "",
          }
    );
    setValue(
      "shape",
      IngredientData?.shape
        ? IngredientData?.shape
        : {
            _id: "",
            name: "",
          }
    );
  }, [IngredientData]);

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

  useEffect(() => {
    console.log("#shapesData", shapesData);
  }, [shapesData]);

  const {
    data: familiesData,
    isLoading: isLoadingfamilies,
    isSuccess: isSuccessfamilies,
    refetch: refetchIngredients,
  } = useGetFamilies();

  const {
    mutateAsync: UppdateIngredientMutateAsync,
    isSuccess: isUppdateIngredientSuccess,
    data: UppdateIngredientData,
    isError: isUppdateIngredientError,
    isLoading: isLoadingUppdateIngredient,
    reset: resetUppdateIngredient,
  } = useMutation(UpdateIngredientService);

  const onSubmit: SubmitHandler<igredientProps> = (data) => {
    // console.log("#data", data);
    UppdateIngredientMutateAsync({ data: data, id: id });
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  useEffect(() => {
    if (isUppdateIngredientSuccess && UppdateIngredientData) {
      enqueueSnackbar("ingrédient modifié avec succès.", {
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
  }, [isUppdateIngredientSuccess, UppdateIngredientData]);

  useEffect(() => {
    if (isUppdateIngredientError) {
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
  }, [isUppdateIngredientError]);

  return (
    <div className={ShapeClasses.add_form_container}>
      <p className={ShapeClasses.form_title}>Modification d'un ingrédient</p>
      {!isLoadingIngredient && (
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
                })}
              />
              <p className={clsx(textFieldClasses.error)}>
                {errors?.name?.message}
              </p>
            </div>

            <NutritionInput updateMode={true} />

            <Box style={{ padding: "0px 0 8px" }}>
              <Controller
                name="shape"
                control={control}
                render={({
                  field: { onChange: Change, value, ref, ...rest },
                }) => (
                  <Autocomplete
                    {...rest}
                    freeSolo
                    //@ts-ignore
                    defaultValue={
                      IngredientData?.shape ? IngredientData?.shape : {}
                    }
                    // value={}
                    options={shapesData || []}
                    disableCloseOnSelect
                    // onChange={(_, data) => Change(data._id)}
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
              <p className={clsx(textFieldClasses.error)}>
                {errors?.shape?.name?.message}
              </p>
            </Box>
            <Box style={{ padding: "0px 0 8px" }}>
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
                    // defaultValue={}
                    disableCloseOnSelect
                    onChange={(_, data) => Change(data._id)}
                    getOptionLabel={(option: any) => option.name}
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
              <p className={clsx(textFieldClasses.error)}>
                {errors?.family?.name?.message}
              </p>
            </Box>

            <Button
              type="submit"
              className={clsx(
                ButtonClasses.BigBlueButton,
                ShapeClasses.submit_button
              )}
              // disabled={isLoadingaddShape}
            >
              Modifier
            </Button>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default UpdateIngredient;
