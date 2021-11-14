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
      transform: "translateY(-50% )",
      width: "100%",
      boxSizing: "border-box",
    },
    login_form_content_seperator_container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
    },
    login_form_content_seperator: {
      flexGrow: 0.8,
      minHeight: "1px",
      maxHeight: "1px",
      backgroundColor: "grey",
    },
    login_form_title: {
      fontSize: "30px",
      fontWeight: 500,
      margin: "10px 0",
    },
    login_form_message_type: {
      fontSize: "20px",
      fontWeight: 500,
      "& span": {},
    },
    login_form_content_seperator_text: {
      margin: "0px 8px",
      fontWeight: 500,
      fontSize: "18px",
    },
  })
);
