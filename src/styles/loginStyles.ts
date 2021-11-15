import { makeStyles, createStyles } from "@material-ui/core";

export const useStylesLogin: any = makeStyles(() =>
  createStyles({
    login_container: {
      backgroundColor: "white",
      minHeight: "100vh",
      minWidth: "100vw",
      boxSizing: "border-box",
      display: "flex",
    },
    login_illustration_container: {
      position: "relative",
      width: "50%",
      backgroundColor: "rgba(222, 247, 229, 0.8)",
      borderRadius: "0 60px 60px 0",
    },
    login_illustration: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50% , -50%)",
      width: "80%",
    },
    login_form_container: {
      position: "relative",
      width: "50%",
      paddingLeft: "60px",
      boxSizing: "border-box",
    },
    login_form_content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50% )",
      boxSizing: "border-box",
      width: "60%",
    },
    login_form_content_seperator_container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      margin: "25px 0 ",
      width: "100%",
    },
    login_form_content_seperator: {
      flexGrow: 0.7,
      minHeight: "2px",
      maxHeight: "2px",
      backgroundColor: "rgb(146, 227, 169)",
    },
    login_form_title: {
      fontSize: "55px",
      fontWeight: 500,
      margin: "10px 0",
      fontFamily: "'Dancing Script', cursive",
      textAlign: "center",
      color: "rgb(146, 227, 169)",
    },
    login_form_message_type: {
      fontSize: "18px",
      textAlign: "center",
      "& span": {
        fontWeight: 500,
        textDecoration: "underline",
      },
    },
    login_form_content_seperator_text: {
      margin: "0px 12px",
      fontWeight: 500,
      fontSize: "18px",
    },
    login_form_inputs_container: {
      textAlign: "center",
      "& .MuiFormControl-root": {
        width: "100%",
      },
    },
    contact_text: {
      textAlign: "center",
      fontWeight: 500,
      fontSize: "18px",
      textDecoration: "underline",
    },
  })
);
