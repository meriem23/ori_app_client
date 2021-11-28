import React, { useEffect } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Button } from "@material-ui/core";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";
import Field from "../../FormsElements/Field";
import { useStylesButton } from "../../../styles/buttonStyles";
import { useStylesShape } from "../../../styles/shapeStyles";
import clsx from "clsx";
import { AddShape } from "../../../services/shapesServices/shapesServices";

function AddFormeForm() {
  const ButtonClasses = useStylesButton();
  const ShapeClasses = useStylesShape();

  interface FormShapeSchema {
    name: string;
    description: string;
  }

  const methods = useForm<FormShapeSchema>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const formInputs = [
    {
      type: "text",
      name: "name",
      label: "Nom de la forme",
      disabled: false,
      rules: {
        required: "Ce champ est obligatoire",
      },
    },
    {
      type: "text",
      name: "description",
      label: "Description",
      disabled: false,
      multiline: true,
      rows: 5,
      rules: {
        required: "Ce champ est obligatoire",
      },
    },
  ];

  const {
    mutateAsync: addShapeMutateAsync,
    isSuccess: isaddShapeSuccess,
    data: addShapeData,
    isError: isaddShapeError,
    isLoading: isLoadingaddShape,
    reset: resetaddShape,
  } = useMutation(AddShape);

  const onSubmit = (data: any) => {
    addShapeMutateAsync(data);
    console.log(data);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  useEffect(() => {
    if (isaddShapeSuccess && addShapeData) {
      enqueueSnackbar("forme ajoutée avec succès.", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
      push("/Formes");
      setTimeout(() => {
        closeSnackbar();
      }, 5000);
    }
  }, [isaddShapeSuccess, addShapeData]);

  useEffect(() => {
    if (isaddShapeError) {
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
  }, [isaddShapeError]);

  return (
    <div className={ShapeClasses.add_form_container}>
      <p className={ShapeClasses.form_title}>Ajout d'une forme</p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={ShapeClasses.login_form_inputs_container}
        >
          {formInputs.map((el: any) => (
            <Field name={el.name} {...el} />
          ))}
          <Button
            type="submit"
            className={clsx(
              ButtonClasses.BigBlueButton,
              ShapeClasses.submit_button
            )}
            disabled={isLoadingaddShape}
          >
            Ajouter
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddFormeForm;
