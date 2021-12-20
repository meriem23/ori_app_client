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

const IngredientInput: FC = () => {
  //styles
  const nutritionClasses = nutritionInputStyles();
  const textFieldClasses: any = useStylesTextField();
  const FormsClasses = Forms__styles();

  //state
  const [selectedFamily, setselectedFamily] = useState<any>(null);

  //react hook form
  const {
    control,
    register,
    watch,
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
  const {
    data: familiesData,
    isLoading: isLoadingfamilies,
    isSuccess: isSuccessfamilies,
    refetch: refetchIngredients,
  } = useGetFamilies();

  const { data: ingredientData } = useGetIngredients();

  //functions
  const onDeleteShapesTags = (item: any) => () => {
    const dishTags =
      dataWatch?.shapes?.filter((row: any) => row.name !== item.name) || [];
    setValue("shapes", dishTags as any);
  };

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
          <>
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
                        onChange={(_, data) =>
                          Change(data?._id ? data?._id : "")
                        }
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
                            label="Nom de la nature"
                          />
                        )}
                      />
                    )}
                    rules={{ required: "Veuillez choisir une nature" }}
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
                          <Box
                            className={clsx(
                              FormsClasses.chips__container__tags
                            )}
                          >
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
                    name={`ingredients.${index}.ingredient__label`}
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
                    {...register(`ingredients.${index}.ingredient__quantity`, {
                      required: "Saisir la quantité de l'ingrédient",
                    })}
                  />
                  <p>{errors?.ingredient__quantity?.message}</p>
                </Box>
              </Box>
            </Box>
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
