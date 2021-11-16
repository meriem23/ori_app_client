import { makeStyles, createStyles } from "@material-ui/core";

export const useStylesContact: any = makeStyles((theme) =>
  createStyles({
    contact_container: {
      backgroundColor: "white",
      minHeight: "100vh",
      minWidth: "90vw",
      boxSizing: "border-box",
      display: "flex",
    },
    contact_illustration_container: {
      position: "relative",
      width: "45%",
      backgroundColor: "rgba(222, 247, 229, 0.8)",
      borderRadius: "0 60px 60px 0",
    },
    contact_illustration: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50% , -50%)",
      width: "80%",
    },
    contact_form: {
      display:"flex",
      flexDirection:"column",
      gap:"30px"
    },
    contact_form_container: {
      width: "50%",
      paddingLeft: "60px",
      boxSizing: "border-box",
    },
    contact_form_content: {
      transform: "translateY(-50% )",
      width: "100%",
      boxSizing: "border-box",
    },
    contact_form_title: {
      fontSize: "55px",
      fontWeight: 400,
      margin: "30px 0",
      fontFamily: "'Dancing Script', cursive",
      textAlign: "center",
      color: theme.palette.secondary.main,
    },
    contact_form_button: {
      color:theme.palette.primary.main,
      background:`${theme.palette.secondary.main} !important`,
      border:`1px solid ${theme.palette.secondary.main} !important`,
      borderRadius:theme.shape.borderRadius,
      fontSize: "20px",
      fontWeight: 400,
      height: "50px",
      
     },
  })
);
