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
    label: "Eau (g/100 g)",
  },
  {
    value: "protéineJ",
    label: "Protéines, N x facteur de Jones (g/100 g)",
  },
  {
    value: "protéineN",
    label: "Protéines, N x 6.25 (g/100 g)",
  },
  {
    value: "glucides",
    label: "Glucides (g/100 g)",
  },
  {
    value: "lipides",
    label: "Lipides (g/100 g)",
  },
  {
    value: "sucres",
    label: "Sucres (g/100 g)",
  },
  {
    value: "fructose",
    label: "Fructose (g/100 g)	",
  },
  {
    value: "glucose",
    label: "Glucose (g/100 g)",
  },
  {
    value: "lactose",
    label: "Lactose (g/100 g)",
  },
  {
    value: "maltose",
    label: "Maltose (g/100 g)",
  },
  {
    value: "saccharose",
    label: "Saccharose (g/100 g)",
  },
  {
    value: "amidon",
    label: "Amidon (g/100 g)",
  },
  {
    value: "fibres",
    label: "Fibres alimentaires (g/100 g)	",
  },
  {
    value: "cendres",
    label: "Cendres (g/100 g)",
  },
  {
    value: "alcool",
    label: "Alcool (g/100 g)",
  },
  {
    value: "aorganique",
    label: "Acides organiques (g/100 g)",
  },
  {
    value: "agsaturés",
    label: "AG saturés (g/100 g)",
  },
  {
    value: "mono",
    label: "AG monoinsaturés (g/100 g)",
  },
  {
    value: "poly",
    label: "AG polyinsaturés (g/100 g)",
  },
  {
    value: "but",
    label: "AG 4:0, butyrique (g/100 g)",
  },
  {
    value: "capr",
    label: "AG 6:0, caproïque (g/100 g)",
  },
  {
    value: "capy",
    label: "AG 8:0, caprylique (g/100 g)",
  },
  {
    value: "cap",
    label: "AG 10:0, caprique (g/100 g)	",
  },
  {
    value: "lau",
    label: "AG 12:0, laurique (g/100 g)	",
  },
  {
    value: "myr",
    label: "AG 14:0, myristique (g/100 g)	",
  },
  {
    value: "pal",
    label: "AG 16:0, palmitique (g/100 g)	",
  },
  {
    value: "",
    label: "AG 18:0, stéarique (g/100 g)",
  },
  {
    value: "olé",
    label: "AG 18:1 9c (n-9), oléique (g/100 g)	",
  },
  {
    value: "lin",
    label: "AG 18:2 9c,12c (n-6), linoléique (g/100 g)",
  },
  {
    value: "al",
    label: "AG 18:3 c9,c12,c15 (n-3), alpha-linolénique (g/100 g)",
  },
  {
    value: "epa",
    label: "AG 20:5 5c,8c,11c,14c,17c (n-3) EPA (g/100 g)	",
  },
  {
    value: "dha",
    label: "AG 22:6 4c,7c,10c,13c,16c,19c (n-3) DHA (g/100 g)",
  },
  {
    value: "cholestérol",
    label: "Cholestérol (mg/100 g)",
  },
  {
    value: "scs",
    label: "Sel chlorure de sodium (g/100 g)",
  },
  {
    value: "calcium",
    label: "Calcium (mg/100 g)",
  },
  {
    value: "cuivre",
    label: "Cuivre (mg/100 g)",
  },
  {
    value: "fer",
    label: "Fer (mg/100 g)",
  },
  {
    value: "iode",
    label: "Iode (µg/100 g)	",
  },
  {
    value: "magnésium",
    label: "Magnésium (mg/100 g)",
  },
  {
    value: "manganèse",
    label: "Manganèse (mg/100 g)",
  },
  {
    value: "phosphore",
    label: "Phosphore (mg/100 g)	",
  },
  {
    value: "potassium",
    label: "Potassium (mg/100 g)",
  },
  {
    value: "sélénium",
    label: "Sélénium (µg/100 g)",
  },
  {
    value: "sodium",
    label: "Sodium (mg/100 g)",
  },
  {
    value: "zinc",
    label: "Zinc (mg/100 g)",
  },
  {
    value: "rétinol",
    label: "Rétinol (µg/100 g)",
  },
  {
    value: "bc",
    label: "Beta-Carotène (µg/100 g)",
  },
  {
    value: "vd",
    label: "Vitamine D (µg/100 g)",
  },
  {
    value: "ve",
    label: "Vitamine E (mg/100 g)",
  },
  {
    value: "vk1",
    label: "Vitamine K1 (µg/100 g)	",
  },
  {
    value: "vc",
    label: "Vitamine C (mg/100 g)	",
  },
  {
    value: "vb1",
    label: "Vitamine B1 ou Thiamine (mg/100 g)",
  },
  {
    value: "vb2",
    label: "Vitamine B2 ou Riboflavine (mg/100 g)",
  },
  {
    value: "vb3",
    label: "Vitamine B3 ou PP ou Niacine (mg/100 g)",
  },
  {
    value: "vb5",
    label: "Vitamine B5 ou Acide pantothénique (mg/100 g)	",
  },
  {
    value: "vb6",
    label: "Vitamine B6 (mg/100 g)	",
  },
  {
    value: "vb9",
    label: "Vitamine B9 ou Folates totaux (µg/100 g)",
  },
  {
    value: "vb12",
    label: "Vitamine B12 (µg/100 g)",
  },
];

const NutritionInput: FC = () => {
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
                      options={nutritionTab}
                      sx={{ width: "100%" }}
                      onChange={(_, data) => Change(data)}
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
                    // pattern: {
                    //   value: /^[0-9]*$/,
                    //   message: "Seul les chiffres sont acceptés",
                    // },
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
