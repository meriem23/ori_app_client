import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material";

export const useStylesFamily: any = makeStyles((theme: Theme) =>
  createStyles({
    add_form_container: {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%",
      width: "40%",
      backgroundColor: theme.palette.primary.main,
      padding: "10px 30px 20px ",
      borderRadius: "10px",
    },
    form_title: {
      fontSize: "18px",
      fontWeight: 600,
      color: theme.palette.primary.dark,
    },
    submit_button: {
      float: "right",
    },
    login_form_inputs_container: {
      "& .MuiFormControl-root": {
        width: "100%",
      },
      "& button": {
        textTransform: "none !important",
      },
    },
  })
);
