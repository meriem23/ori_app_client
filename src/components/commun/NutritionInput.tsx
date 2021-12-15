import React, { FC, useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Box, TextField, IconButton, Autocomplete } from "@mui/material";
import Plus from "../../icons/Plus";
import clsx from "clsx";
import ClearIcon from "@mui/icons-material/Clear";
import { nutritionInputStyles } from "../../styles/nutritionInputStyles";
import { useStylesTextField } from "../../styles/textFieldStyles";

const nutritionTab = [
  {
    value: "eau",
    fact__label: "Eau (g/100 g)",
  },
  {
    value: "protéineJ",
    fact__label: "Protéines, N x facteur de Jones (g/100 g)",
  },
  {
    value: "protéineN",
    fact__label: "Protéines, N x 6.25 (g/100 g)",
  },
  {
    value: "glucides",
    fact__label: "Glucides (g/100 g)",
  },
  {
    value: "lipides",
    fact__label: "Lipides (g/100 g)",
  },
  {
    value: "sucres",
    fact__label: "Sucres (g/100 g)",
  },
  {
    value: "fructose",
    fact__label: "Fructose (g/100 g)	",
  },
  {
    value: "glucose",
    fact__label: "Glucose (g/100 g)",
  },
  {
    value: "lactose",
    fact__label: "Lactose (g/100 g)",
  },
  {
    value: "maltose",
    fact__label: "Maltose (g/100 g)",
  },
  {
    value: "saccharose",
    fact__label: "Saccharose (g/100 g)",
  },
  {
    value: "amidon",
    fact__label: "Amidon (g/100 g)",
  },
  {
    value: "fibres",
    fact__label: "Fibres alimentaires (g/100 g)	",
  },
  {
    value: "cendres",
    fact__label: "Cendres (g/100 g)",
  },
  {
    value: "alcool",
    fact__label: "Alcool (g/100 g)",
  },
  {
    value: "aorganique",
    fact__label: "Acides organiques (g/100 g)",
  },
  {
    value: "agsaturés",
    fact__label: "AG saturés (g/100 g)",
  },
  {
    value: "mono",
    fact__label: "AG monoinsaturés (g/100 g)",
  },
  {
    value: "poly",
    fact__label: "AG polyinsaturés (g/100 g)",
  },
  {
    value: "but",
    fact__label: "AG 4:0, butyrique (g/100 g)",
  },
  {
    value: "capr",
    fact__label: "AG 6:0, caproïque (g/100 g)",
  },
  {
    value: "capy",
    fact__label: "AG 8:0, caprylique (g/100 g)",
  },
  {
    value: "cap",
    fact__label: "AG 10:0, caprique (g/100 g)	",
  },
  {
    value: "lau",
    fact__label: "AG 12:0, laurique (g/100 g)	",
  },
  {
    value: "myr",
    fact__label: "AG 14:0, myristique (g/100 g)	",
  },
  {
    value: "pal",
    fact__label: "AG 16:0, palmitique (g/100 g)	",
  },
  {
    value: "",
    fact__label: "AG 18:0, stéarique (g/100 g)",
  },
  {
    value: "olé",
    fact__label: "AG 18:1 9c (n-9), oléique (g/100 g)	",
  },
  {
    value: "lin",
    fact__label: "AG 18:2 9c,12c (n-6), linoléique (g/100 g)",
  },
  {
    value: "al",
    fact__label: "AG 18:3 c9,c12,c15 (n-3), alpha-linolénique (g/100 g)",
  },
  {
    value: "epa",
    fact__label: "AG 20:5 5c,8c,11c,14c,17c (n-3) EPA (g/100 g)	",
  },
  {
    value: "dha",
    fact__label: "AG 22:6 4c,7c,10c,13c,16c,19c (n-3) DHA (g/100 g)",
  },
  {
    value: "cholestérol",
    fact__label: "Cholestérol (mg/100 g)",
  },
  {
    value: "scs",
    fact__label: "Sel chlorure de sodium (g/100 g)",
  },
  {
    value: "calcium",
    fact__label: "Calcium (mg/100 g)",
  },
  {
    value: "cuivre",
    fact__label: "Cuivre (mg/100 g)",
  },
  {
    value: "fer",
    fact__label: "Fer (mg/100 g)",
  },
  {
    value: "iode",
    fact__label: "Iode (µg/100 g)	",
  },
  {
    value: "magnésium",
    fact__label: "Magnésium (mg/100 g)",
  },
  {
    value: "manganèse",
    fact__label: "Manganèse (mg/100 g)",
  },
  {
    value: "phosphore",
    fact__label: "Phosphore (mg/100 g)	",
  },
  {
    value: "potassium",
    fact__label: "Potassium (mg/100 g)",
  },
  {
    value: "sélénium",
    fact__label: "Sélénium (µg/100 g)",
  },
  {
    value: "sodium",
    fact__label: "Sodium (mg/100 g)",
  },
  {
    value: "zinc",
    fact__label: "Zinc (mg/100 g)",
  },
  {
    value: "rétinol",
    fact__label: "Rétinol (µg/100 g)",
  },
  {
    value: "bc",
    fact__label: "Beta-Carotène (µg/100 g)",
  },
  {
    value: "vd",
    fact__label: "Vitamine D (µg/100 g)",
  },
  {
    value: "ve",
    fact__label: "Vitamine E (mg/100 g)",
  },
  {
    value: "vk1",
    fact__label: "Vitamine K1 (µg/100 g)	",
  },
  {
    value: "vc",
    fact__label: "Vitamine C (mg/100 g)	",
  },
  {
    value: "vb1",
    fact__label: "Vitamine B1 ou Thiamine (mg/100 g)",
  },
  {
    value: "vb2",
    fact__label: "Vitamine B2 ou Riboflavine (mg/100 g)",
  },
  {
    value: "vb3",
    fact__label: "Vitamine B3 ou PP ou Niacine (mg/100 g)",
  },
  {
    value: "vb5",
    fact__label: "Vitamine B5 ou Acide pantothénique (mg/100 g)	",
  },
  {
    value: "vb6",
    fact__label: "Vitamine B6 (mg/100 g)	",
  },
  {
    value: "vb9",
    fact__label: "Vitamine B9 ou Folates totaux (µg/100 g)",
  },
  {
    value: "vb12",
    fact__label: "Vitamine B12 (µg/100 g)",
  },
];

const NutritionInput = ({ updateMode }: { updateMode?: boolean }) => {
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
    name: "fact",
  });

  console.log(errors);

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
                  name={`fact.${index}.fact__label`}
                  control={control}
                  render={({
                    field: { onChange: Change, value, ref, ...rest },
                  }) => (
                    <Autocomplete
                      {...rest}
                      freeSolo
                      disablePortal
                      //@ts-ignore
                      defaultValue={updateMode ? item : undefined}
                      options={nutritionTab}
                      getOptionLabel={(option) => option.fact__label}
                      sx={{ width: "100%" }}
                      //@ts-ignore
                      onChange={(_, data) => Change(data?.fact__label)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Facteur nutritionnel"
                          className={clsx(textFieldClasses.second)}
                        />
                      )}
                    />
                  )}
                  rules={{ required: "Choose one of the options" }}
                />

                <p>{errors?.fact__label?.message}</p>
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
                  {...register(`fact.${index}.fact__quantity`, {
                    required: "Saisir la quantité du facteur nutritionnel",
                  })}
                />
                <p>{errors?.fact__quantity?.message}</p>
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
          Ajouter un nouvel facteur nutritionnel{" "}
        </p>
      </Box>
    </>
  );
};

export default NutritionInput;
