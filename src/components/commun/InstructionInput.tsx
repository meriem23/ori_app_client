import React, { FC, useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Box, TextField, IconButton, Autocomplete } from "@mui/material";
import Plus from "../../icons/Plus";
import clsx from "clsx";
import ClearIcon from "@mui/icons-material/Clear";
import { nutritionInputStyles } from "../../styles/nutritionInputStyles";
import { useStylesTextField } from "../../styles/textFieldStyles";
import { nutritionTab } from "../nutritionData";

const InstructionInput = ({ updateMode }: any) => {
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
    name: "instructions",
  });

  console.log(errors);

  return (
    <>
      <Box>
        {fields.map((item, index) => (
          <Box className={nutritionClasses.field_nutrition_container}>
           { fields.length > 1 && <IconButton
              onClick={() => {
                remove(index);
              }}
              className={nutritionClasses.delete_button}
            >
              <ClearIcon />
            </IconButton>}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  // justifyContent: "space-between",
                  // width: "100%",
                  padding: "0px 0 8px",
                }}
              >
                <Box
                  sx={{
                    width: "50%",
                  }}
                >
                  <TextField
                    id="demo-helper-text-misaligned"
                    sx={{ minWidth: "30%" }}
                    placeholder="Titre"
                    className={clsx(textFieldClasses.second)}
                    {...register(`instructions.${index}.title`)}
                  />
                </Box>
                <Box
                  sx={{
                    width: "50%",
                  }}
                >
                  <TextField
                    id="demo-helper-text-misaligned"
                    sx={{ minWidth: "30%" }}
                    placeholder="Instruction"
                    className={clsx(textFieldClasses.second)}
                    {...register(`instructions.${index}.instruction`)}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                // justifyContent: "space-between",
                // width: "100%",
                padding: "0px 0 8px",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                }}
              >
                <TextField
                  id="demo-helper-text-misaligned"
                  sx={{ minWidth: "30%" }}
                  placeholder="Temps de cuisson"
                  className={clsx(textFieldClasses.second)}
                  {...register(`instructions.${index}.time`, {
                    required: "Saisir le Temps de cuisson",
                  })}
                />
                <p>{errors?.time?.message}</p>
              </Box>
              <Box
                sx={{
                  width: "50%",
                }}
              >
                <TextField
                  id="demo-helper-text-misaligned"
                  sx={{ minWidth: "30%" }}
                  placeholder="Temperature de cuisson"
                  className={clsx(textFieldClasses.second)}
                  {...register(`instructions.${index}.temperature`, {
                    required: "Saisir la Temperature de cuisson ",
                  })}
                />
                <p>{errors?.temperature?.message}</p>
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
          Ajouter de nouvelles instructions
        </p>
      </Box>
    </>
  );
};

export default InstructionInput;
