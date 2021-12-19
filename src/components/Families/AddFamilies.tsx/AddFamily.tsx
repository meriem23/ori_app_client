import React, { useEffect } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
  Controller,
} from "react-hook-form";
import { Box, Button, Chip, TextField } from "@material-ui/core";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";
import Field from "../../FormsElements/Field";
import { useStylesLogin } from "../../../styles/loginStyles";
import { useStylesButton } from "../../../styles/buttonStyles";
import { useStylesFamily } from "../../../styles/familyStyles";
import clsx from "clsx";
import { AddFamily } from "../../../services/familyServices/familyServices";
import { useGetShapes } from "../../../services/shapesServices/shapesServices";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useStylesTextField } from "../../../styles/textFieldStyles";
import CloseIcon from "@material-ui/icons/Close";
import { Forms__styles } from "../../../styles/Forms__styles";

function AddFamilyForm() {
  const ButtonClasses = useStylesButton();
  const FamilyClasses = useStylesFamily();
  const textFieldClasses: any = useStylesTextField();
  const FormsClasses = Forms__styles();

  //queries and mutations
  const {
    data: shapesData,
    isLoading: isLoadingShapes,
    isSuccess: isSuccessShapes,
    refetch: refetchShapes,
  } = useGetShapes();

  interface FormFamilySchema {
    name: string;
    description: string;
    shapes: any;
  }

  const methods = useForm<FormFamilySchema>({
    defaultValues: {
      name: "",
      description: "",
      shapes: [],
    },
  });

  const dataWatch = useWatch({
    control: methods.control,
  });

  console.log("#dataWatch", dataWatch);

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
    addFamilyMutateAsync({
      ...data,
      shapes: data.shapes.map((el: any) => {
        return el._id;
      }),
    });
    console.log(data);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  const onDeleteShapesTags = (item: any) => () => {
    const dishTags =
      dataWatch?.shapes?.filter((row: any) => row.name !== item.name) || [];
    methods.setValue("shapes", dishTags as any);
  };

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
          <Controller
            name="shapes"
            control={methods.control}
            rules={{ required: "Choose Tags" }}
            render={({
              field: { onChange: Change, value, ref, ...rest },
              fieldState: { error },
            }) => (
              <React.Fragment>
                <Autocomplete
                  {...rest}
                  multiple
                  id="recipe-outlined"
                  value={dataWatch?.shapes ? dataWatch?.shapes : []}
                  options={shapesData ? shapesData : []}
                  getOptionLabel={(option) => option.name}
                  renderTags={() => null}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputRef={ref}
                      variant="outlined"
                      // sx={{ width: "100%" }}
                      className={clsx(textFieldClasses.second)}
                    />
                  )}
                  onChange={(_, data) => Change(data)}
                />
                <p className={clsx(textFieldClasses.error)}>{error?.message}</p>
              </React.Fragment>
            )}
          />
          {dataWatch?.shapes?.length > 0 && (
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
                      <CloseIcon className={FormsClasses.chips__tags__icon} />
                    }
                    className={FormsClasses.chips__tags}
                  />
                ))}
              </Box>
            </Box>
          )}
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
