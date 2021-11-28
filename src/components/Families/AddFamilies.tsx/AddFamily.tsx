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
import { useStylesLogin } from "../../../styles/loginStyles";
import { useStylesButton } from "../../../styles/buttonStyles";
import { useStylesFamily } from "../../../styles/familyStyles";
import clsx from "clsx";
import { AddFamily } from "../../../services/familyServices/familyServices";

function AddFamilyForm() {
  const ButtonClasses = useStylesButton();
  const FamilyClasses = useStylesFamily();

  interface FormFamilySchema {
    name: string;
    description: string;
  }

  const methods = useForm<FormFamilySchema>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const formInputs = [
    {
      type: "text",
      name: "name",
      label: "Nom de la famille",
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
    mutateAsync: addFamilyMutateAsync,
    isSuccess: isaddFamilySuccess,
    data: addFamilyData,
    isError: isaddFamilyError,
    isLoading: isLoadingaddFamily,
    reset: resetaddFamily,
  } = useMutation(AddFamily);

  const onSubmit = (data: any) => {
    addFamilyMutateAsync(data);
    console.log(data);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  useEffect(() => {
    if (isaddFamilySuccess && addFamilyData) {
      enqueueSnackbar("Famille ajoutée avec succès.", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
      push("/Familles");
      setTimeout(() => {
        closeSnackbar();
      }, 5000);
    }
  }, [isaddFamilySuccess, addFamilyData]);

  useEffect(() => {
    if (isaddFamilyError) {
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
  }, [isaddFamilyError]);

  return (
    <div className={FamilyClasses.add_form_container}>
      <p className={FamilyClasses.form_title}>Ajout d'une famille</p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={FamilyClasses.login_form_inputs_container}
        >
          {formInputs.map((el: any) => (
            <Field name={el.name} {...el} />
          ))}
          <Button
            type="submit"
            className={clsx(
              ButtonClasses.BigBlueButton,
              FamilyClasses.submit_button
            )}
            disabled={isLoadingaddFamily}
          >
            Ajouter
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddFamilyForm;
