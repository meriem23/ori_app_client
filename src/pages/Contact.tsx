import React from "react"
import emailjs from "emailjs-com";
import {
  Input,
  TextField,
  InputLabel,
  InputAdornment,
  Button,
} from "@mui/material";
import { MdAccountCircle, MdAlternateEmail } from "react-icons/md";
import ContactIllistration from "../images/contactIllustration";
import { useStylesContact } from "../styles/contactStyles";

const Contact = () => {
  function sendEmail(event: any) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_gu955wp",
        "template_79xxkei",
        event.target,
        "user_ZjUUyGQ5zEvyTMJbfikLt"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Votre message à bien été envoyer");
        },
        (error) => {
          console.log(error.text);
          alert("Votre message n'a pas bien été envoyer");
        }
      );
  }
  function okMessage() {
    alert("Votre message à bien été envoyer");
  }
  const contactClasses = useStylesContact();
  return (
    <div className={contactClasses.contact_container}>
      <div className={contactClasses.contact_illustration_container}>
        <ContactIllistration className={contactClasses.contact_illustration} />
      </div>
      <div className={contactClasses.contact_form_container}>
        <div className={contactClasses.contact_form_content}>
          <p className={contactClasses.contact_form_title}>Contactez-nous</p>
        </div>
        <div>
          {/* <form onSubmit={sendEmail} >
            <InputLabel htmlFor="input-with-icon-adornment">
              Votre Nom
            </InputLabel>
            <Input
              name="name"
              startAdornment={
                <InputAdornment position="start">
                  <MdAccountCircle />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="input-with-icon-adornment">
              Votre Email
            </InputLabel>
            <Input
              name="email"
              type="email"
              startAdornment={
                <InputAdornment position="start">
                  <MdAlternateEmail />
                </InputAdornment>
              }
            />
            <TextField
              name="message"
              label="Message"
              placeholder="Enovyez-nous un message"
              multiline
              maxRows={60}
            />
            <Button
              variant="contained"
              // onClick={okMessage}
             
            >
              Envoyer
            </Button>
          </form> */}
          <form onSubmit={sendEmail} className={contactClasses.contact_form}>
            <input
              //control={Input}
              //label="Email"
              name="email"
              placeholder="Write your Email..."
              type="email"
            />
            <input
              //control={Input}
              //label="Subject"
              name="nom"
              placeholder="Write your Subject..."
            />
            <input
              //control={TextArea}
              //label="Message"
              name="message"
              placeholder="Write your Message..."
            />
            <button
              type="submit"
              className={contactClasses.contact_form_button}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
