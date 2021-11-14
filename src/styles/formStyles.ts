import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const formStyles = makeStyles((theme: Theme) =>
  createStyles({
    formContainerFlex: {
      display: "flex",
      alignItems: "start",
    },
    formContainerWhite: {
      padding: "44px 36px ",
      minWidth: "600px",
      maxWidth: "600px",
      backgroundColor: "white",
      borderRadius: "6px",
      margin: "0 auto",
      "& .MuiTextField-root": {
        width: "100%",
      },
    },
    form_title: {
      color: theme.palette.primary.main,
      marginBottom: "24px",
      fontWeight: 500,
      fontSize: "20px",
    },
    formFieldsContainerFlex: {
      display: "flex",
      alignItems: "center",
      "& .MuiFormControl-root": {
        marginRight: "10px",
      },
    },
    formFooter: {
      marginTop: "2px",
      "& button": {
        marginRight: "10px",
      },
    },
    formFooterRightPlacement: {
      textAlign: "end",
      "& .submit_button": {
        marginLeft: "10px",
      },
    },
  })
);
