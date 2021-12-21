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
import {
  useGetIngredients,
  useSearchIngredients,
} from "../../services/IngredientsServices/ingredientServices";
import { useGetFamilies } from "../../services/familyServices/familyServices";
import { Forms__styles } from "../../styles/Forms__styles";
import { Chip } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const OneIngredientInput = ({
  index,
  remove,
  lengthFields,
}: {
  index: number;
  lengthFields: number;
  remove: any;
}) => {
  //styles
  const nutritionClasses = nutritionInputStyles();
  const textFieldClasses: any = useStylesTextField();
  const FormsClasses = Forms__styles();

  //state
  const [selectedFamily, setselectedFamily] = useState<any>("");

  //react hook form
  const {
    control,
    register,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext<any>();

  const dataWatch = useWatch({
    control,
  });

  console.log("#dataWatch", dataWatch);

  //queries and mutations
  const {
    data: familiesData,
    isLoading: isLoadingfamilies,
    isSuccess: isSuccessfamilies,
    refetch: refetchIngredients,
  } = useGetFamilies();

  const { data: searchedResult, refetch } = useSearchIngredients(
    dataWatch.ingredients[index].family,
    dataWatch.ingredients[index].shape
  );

  console.log("#searchedResult", searchedResult);

  //functions
  const onDeleteShapesTags = (item: any) => () => {
    const dishTags =
      dataWatch?.shapes?.filter((row: any) => row.name !== item.name) || [];
    setValue("shapes", dishTags as any);
  };

  //use Effects
  useEffect(() => {
    // if (dataWatch.ingredients[index].family) {
    //   setselectedFamily(
    //     familiesData?.filter((el: any) => el._id === dataWatch.family)[0]
    //   );
    // }
    // else if (!dataWatch.family) {
    //   setValue("shapes", []);
    //   setselectedFamily(undefined);
    // }
    if (dataWatch.ingredients.family && dataWatch.ingredients.shape) {
      refetch();
    }
  }, [dataWatch]);

  useEffect(() => {
    if (!dataWatch.ingredients[index].family) {
      setValue(`ingredients.${index}.shape`, "");
      setValue(`ingredients.${index}.ingredient`, "");
    }
  }, [dataWatch.ingredients[index].family]);

  return (
    <>
      <Box>
        <>
          <Box className={nutritionClasses.field_nutrition_container}>
            {lengthFields > 1 && (
              <IconButton
                onClick={() => {
                  remove(index);
                }}
                className={nutritionClasses.delete_button}
              >
                <ClearIcon />
              </IconButton>
            )}
            <Box
              sx={{
                display: "flex",
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
                  name={`ingredients.${index}.family`}
                  control={control}
                  render={({
                    field: { onChange: Change, value, ref, ...rest },
                  }) => (
                    <Autocomplete
                      {...rest}
                      freeSolo
                      options={familiesData ? familiesData : []}
                      // disableCloseOnSelect
                      onChange={(_, data) => {
                        setselectedFamily(data);
                        Change(data?._id ? data?._id : "");
                      }}
                      getOptionLabel={(option: any) => option.name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          inputRef={ref}
                          variant="outlined"
                          sx={{ width: "100%" }}
                          className={clsx(textFieldClasses.second)}
                          label="Famille de l'ingrédient"
                        />
                      )}
                    />
                  )}
                  rules={{
                    required: "Veuillez choisir la famille de l'ingrédient",
                  }}
                />

                <p>{errors?.ingredient__label?.message}</p>
              </Box>
              <Box
                sx={{
                  width: "49.3%",
                }}
              >
                <Controller
                  name={`ingredients.${index}.shape`}
                  control={control}
                  render={({
                    field: { onChange: Change, value, ref, ...rest },
                  }) => (
                    <Autocomplete
                      {...rest}
                      freeSolo
                      options={selectedFamily ? selectedFamily?.shapes : []}
                      //   disableCloseOnSelect
                      //   value={`ingredients.${index}.shape`}
                      getOptionLabel={(option: any) => option.name}
                      onChange={(_, data) => Change(data?._id ? data?._id : "")}
                      //@ts-ignore
                      //   value={dataWatch?.shapes ? dataWatch?.shapes : []}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          inputRef={ref}
                          variant="outlined"
                          sx={{ width: "100%" }}
                          className={clsx(textFieldClasses.second)}
                          label="Nom de la nature"
                        />
                      )}
                    />
                  )}
                  rules={{ required: "Veuillez choisir une nature" }}
                />
              </Box>
              {/* <Box
                  sx={{
                    width: "49.3%",
                  }}
                >
                  <TextField
                    id="demo-helper-text-misaligned"
                    sx={{ minWidth: "100%" }}
                    placeholder="Quantité"
                    className={clsx(textFieldClasses.second)}
                    {...register(`ingredients.${index}.ingredient__quantity`, {
                      required: "Saisir la quantité de l'ingrédient",
                    })}
                  />
                  <p>{errors?.ingredient__quantity?.message}</p>
                </Box> */}
            </Box>
          </Box>
          <Box className={nutritionClasses.field_nutrition_container}>
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
                  name={`ingredients.${index}.ingredient`}
                  control={control}
                  render={({
                    field: { onChange: Change, value, ref, ...rest },
                  }) => (
                    <Autocomplete
                      {...rest}
                      freeSolo
                      disablePortal
                      options={searchedResult ? searchedResult : []}
                      getOptionLabel={(option: any) => option.name}
                      sx={{ width: "100%" }}
                      onChange={(_, data) => Change(data?._id ? data?._id : "")}
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
                  {...register(`ingredients.${index}.quantity`, {
                    required: "Saisir la quantité de l'ingrédient",
                  })}
                />
                <p>{errors?.ingredient__quantity?.message}</p>
              </Box>
            </Box>
          </Box>
        </>
      </Box>
    </>
  );
};

export default OneIngredientInput;
