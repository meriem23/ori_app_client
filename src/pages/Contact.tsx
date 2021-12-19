import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@mui/material";
import ContactIllistration from "../images/contactIllustration";
import { useStylesContact } from "../styles/contactStyles";
import { FormProvider, useForm } from "react-hook-form";
import Field from "../components/FormsElements/Field";
import { useStylesLogin } from "../styles/loginStyles";
import { useStylesButton } from "../styles/buttonStyles";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";
import { CircularProgress } from "@material-ui/core";

const Contact = () => {
  interface FormContactSchema {
    email: string;
    objet: string;
    message: string;
  }

  const methods = useForm<FormContactSchema>({
    defaultValues: {
      email: "",
      objet: "",
      message: "",
    },
  });

  const formContactInputs = [
    {
      type: "text",
      name: "email",
      label: "E-mail",
      disabled: false,
      rules: {
        required: "Ce champ est obligatoire",
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Veuillez saisir un E-mail valide!",
        },
      },
    },
    {
      type: "text",
      name: "objet",
      label: "Objet",
      disabled: false,
      typeValue: "objet",
      rules: {
        required: "Ce champ est obligatoire",
      },
    },
    {
      type: "text",
      name: "message",
      label: "Message",
      disabled: false,
      typeValue: "message",
      rules: {
        required: "Ce champ est obligatoire",
      },
    },
  ];

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { push } = useHistory();

  const [loading, setloading] = useState(false);

  function sendEmail(event: any, data: any) {
    setloading(true);
    emailjs
      .sendForm(
        "service_gu955wp",
        "template_79xxkei",
        data.target,
        "user_ZjUUyGQ5zEvyTMJbfikLt"
      )
      .then(
        (result) => {
          enqueueSnackbar("Message bien envoyé", {
            variant: "success",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
          });
          setTimeout(() => {
            closeSnackbar();
          }, 5000);
          setloading(false);
          methods.setValue("email", "");
          methods.setValue("objet", "");
          methods.setValue("message", "");
        },
        (error) => {
          enqueueSnackbar("Message non envoyé! réessayez ultérieurement.", {
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
      );
  }
  const loginClasses = useStylesLogin();
  const ButtonClasses = useStylesButton();

  return (
    <div className={loginClasses.login_container}>
      <div className={loginClasses.login_illustration_container}>
        <ContactIllistration className={loginClasses.login_illustration} />
      </div>
      <div className={loginClasses.login_form_container}>
        <div className={loginClasses.login_form_content}>
          <p
            style={{ marginBottom: "30px" }}
            className={loginClasses.login_form_title}
          >
            Contactez-nous
          </p>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(sendEmail)}
              className={loginClasses.login_form_inputs_container}
            >
              {formContactInputs.map((el: any) => (
                <Field name={el.name} {...el} />
              ))}
              <Button
                type="submit"
                className={ButtonClasses.BigBlueButton}
                disabled={loading}
              >
                <span style={loading ? { marginRight: "8px" } : {}}>
                  Envoyer
                </span>
                {loading && <CircularProgress />}
              </Button>
            </form>
          </FormProvider>
          <p className={loginClasses.contact_text} onClick={() => push("/")}>
            Se connecter
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
