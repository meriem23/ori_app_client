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
import { Forms__styles } from "../../../styles/Forms__styles";
import CloseIcon from "@material-ui/icons/Close";

type igredientProps = {
  name: string;
  fact: {
    fact__label: string;
    fact__quantity: string;
  }[];
  family: string;
  shapes: string[];
};

const AddIngredients = () => {
  const ShapeClasses = useStylesShape();
  const textFieldClasses: any = useStylesTextField();
  const ButtonClasses = useStylesButton();
  const FormsClasses = Forms__styles();

  const [selectedFamily, setselectedFamily] = useState<any>(null);

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
      shapes: [],
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

  console.log("#errors", errors);

  const onSubmit: SubmitHandler<igredientProps> = (data) => {
    console.log("#data", data);
    addIngredientMutateAsync({
      name: data.name,
      fact: data.fact,
      family: data.family,
      shapes: data.shapes.map((el: any) => el._id),
    });
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  const onDeleteShapesTags = (item: any) => () => {
    const dishTags =
      dataWatch?.shapes?.filter((row: any) => row.name !== item.name) || [];
    methods.setValue("shapes", dishTags as any);
  };

  useEffect(() => {
    if (dataWatch.family) {
      setselectedFamily(
        familiesData.filter((el: any) => el._id === dataWatch.family)[0]
      );
    } else if (!dataWatch.family) {
      methods.setValue("shapes", []);
      setselectedFamily(undefined);
    }
  }, [dataWatch.family]);

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
              })}
            />
            <p className={clsx(textFieldClasses.error)}>
              {errors?.name?.message}
            </p>
          </div>

          <NutritionInput />

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
                  // disableCloseOnSelect
                  onChange={(_, data) => Change(data?._id ? data?._id : "")}
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
              {errors?.family?.message}
            </p>
          </Box>

          <Box style={{ padding: "0px 0 8px" }}>
            <Controller
              name="shapes"
              control={control}
              render={({
                field: { onChange: Change, value, ref, ...rest },
              }) => (
                <Autocomplete
                  {...rest}
                  multiple
                  options={selectedFamily ? selectedFamily?.shapes : []}
                  disableCloseOnSelect
                  getOptionLabel={(option: any) => option.name}
                  onChange={(_, data) => Change(data)}
                  renderTags={() => null}
                  //@ts-ignore
                  value={dataWatch?.shapes ? dataWatch?.shapes : []}
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
            {dataWatch?.shapes?.length
              ? dataWatch?.shapes?.length > 0 && (
                  <Box
                    mt={3}
                    // sx={{
                    //   "& > :not(:last-child)": {
                    //     marginRight: 1,
                    //     marginTop: 1,
                    //   },
                    //   "& > *": { marginBottom: 1, marginTop: 1 },
                    // }}
                  >
                    <Box className={clsx(FormsClasses.chips__container__tags)}>
                      {dataWatch.shapes.map((item: any) => (
                        <Chip
                          key={item.value}
                          label={`${item.name}`}
                          onDelete={onDeleteShapesTags(item)}
                          deleteIcon={
                            <CloseIcon
                              className={FormsClasses.chips__tags__icon}
                            />
                          }
                          className={FormsClasses.chips__tags}
                        />
                      ))}
                    </Box>
                  </Box>
                )
              : null}
            {/* <p className={clsx(textFieldClasses.error)}>
              {errors?.shapes?.message}
            </p> */}
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
