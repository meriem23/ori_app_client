import React, { useEffect } from "react";
import LoginIllustration from "../images/loginIllustration";
import { useStylesLogin } from "../styles/loginStyles";
import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
} from "react-hook-form";
import Field from "../components/FormsElements/Field";
import { Button } from "@material-ui/core";
import { useStylesButton } from "../styles/buttonStyles";
import { useMutation } from "react-query";
import { login } from "../services/authServices";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";

export default function Register() {
  interface FormRegisterSchema {
    name: string;
    email: string;
    password: string;
    verifPassword: string;
  }

  const methods = useForm<FormRegisterSchema>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      verifPassword: "",
    },
  });

  const passwordValue = useWatch({
    control: methods.control,
    name: "password",
  });

  const validatePasswordValue = useWatch({
    control: methods.control,
    name: "password",
  });

  const formInputs = [
    {
      type: "text",
      name: "name",
      label: "Nom et prénom",
      disabled: false,
      rules: {
        required: "Ce champ est obligatoire",
        minLength: {
          value: 4,
          message: "Le nom doit contenir au moins 4 caractéres",
        },
      },
    },
    {
      type: "text",
      name: "email",
      label: "E-mail",
      disabled: false,
      rules: {
        required: "Ce champ est obligatoire",
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Veuillez saisir un E-mail valide",
        },
      },
    },
    {
      type: "text",
      name: "password",
      label: "Mot de passe",
      disabled: false,
      typeValue: "password",
      rules: {
        required: "Ce champ est obligatoire",
        minLength: {
          value: 6,
          message: "Le mot de passe doit contenir au moins 6 caractéres",
        },
        validate: (value: any) => value === validatePasswordValue,
      },
    },
    {
      type: "text",
      name: "verifPassword",
      label: "vérification mot de passe",
      disabled: false,
      typeValue: "password",
      rules: {
        required: "Ce champ est obligatoire",
        minLength: {
          value: 6,
          message: "Le mot de passe doit contenir au moins 6 caractéres",
        },
        validate: (value: any) => value === passwordValue || "doit",
      },
    },
  ];

  const {
    mutateAsync: LoginMutateAsync,
    isSuccess: isLoginSuccess,
    data: LoginData,
    isError: isLoginError,
    isLoading: isLoadingLogin,
    reset: resetLogin,
  } = useMutation(login);

  const onSubmit = (data: any) => {
    // LoginMutateAsync(data);
    console.log(data);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  useEffect(() => {
    if (isLoginSuccess && LoginData) {
      // @ts-ignore
      localStorage.setItem(
        "token",
        LoginData?.data?.token?.replace("Bearer ", "")
      );
      push("/dashboard");
    }
  }, [isLoginSuccess, LoginData]);

  useEffect(() => {
    if (isLoginError) {
      enqueueSnackbar("L'email ou le mot de passe est incorrecte", {
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
  }, [isLoginError]);

  const loginClasses = useStylesLogin();
  const ButtonClasses = useStylesButton();
  return (
    <div className={loginClasses.login_container}>
      <div className={loginClasses.login_illustration_container}>
        <LoginIllustration className={loginClasses.login_illustration} />
      </div>
      <div className={loginClasses.login_form_container}>
        <div className={loginClasses.login_form_content}>
          <p className={loginClasses.login_form_title}>Bienvenue</p>
          <p className={loginClasses.login_form_message_type}>
            Déja un membre ?{" "}
            <span
              onClick={() => {
                push("/login");
              }}
            >
              {" "}
              Connectez-vous
            </span>
          </p>
          <div className={loginClasses.login_form_content_seperator_container}>
            <div className={loginClasses.login_form_content_seperator}></div>
            <span className={loginClasses.login_form_content_seperator_text}>
              Ou
            </span>
            <div className={loginClasses.login_form_content_seperator}></div>
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className={loginClasses.login_form_inputs_container}
            >
              {formInputs.map((el: any) => (
                <Field name={el.name} {...el} />
              ))}
              <Button type="submit" className={ButtonClasses.BigBlueButton}>
                S'inscrire
              </Button>
            </form>
          </FormProvider>
          <p className={loginClasses.contact_text}>Contactez-nous</p>
        </div>
      </div>
    </div>
  );
}
