import React from "react";
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

export default function Login() {
  interface FormLoginSchema {
    email: string;
    password: string;
  }

  const methods = useForm<FormLoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formInputs = [
    {
      type: "text",
      name: "email",
      label: "E-mail",
      disabled: false,
      rules: {
        required: "Ce champ est obligatoire",
        pattern: {
          value:
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Veuillez saisir un E-mail valide!",
        },
      },
    },
    {
      type: "text",
      name: "password",
      label: "Mot de passe",
      disabled: false,
      rules: {
        required: "Ce champ est obligatoire",
        minLength: {
          value: 6,
          message: "Le mot de passe doit contenir au moins 6 caractéres",
        },
      },
    },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const loginClasses = useStylesLogin();
  return (
    <div className={loginClasses.login_container}>
      <div className={loginClasses.login_illustration_container}>
        <LoginIllustration className={loginClasses.login_illustration} />
      </div>
      <div className={loginClasses.login_form_container}>
        <div className={loginClasses.login_form_content}>
          <p className={loginClasses.login_form_title}>Bienvenue</p>
          <p className={loginClasses.login_form_message_type}>
            Vous n'avez pas de compte? <span> Créez un compte</span>
          </p>
          <div className={loginClasses.login_form_content_seperator_container}>
            <div className={loginClasses.login_form_content_seperator}></div>
            <span className={loginClasses.login_form_content_seperator_text}>
              Ou
            </span>
            <div className={loginClasses.login_form_content_seperator}></div>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {formInputs.map((el: any) => (
                <Field name={el.name} {...el} />
              ))}
              <Button type="submit">Submit</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
