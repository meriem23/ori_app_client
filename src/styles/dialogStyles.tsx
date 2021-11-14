import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStylesDialog = makeStyles((theme: Theme) =>
  createStyles({
    dialog_container: {
      "& .MuiDialog-paperWidthSm": {
        minHeight: "350px",
        minWidth: "550px",
        padding: "20px",
      },
    },
    alert_dialog_title: {
      "& h2": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& svg": {
          minWidth: "fit-content",
          minHeight: "60px",
          marginBottom: "16px",
        },
        "& span": {
          minWidth: "fit-content",
          marginBottom: "10px",
        },
        "& .alert_dialog_title_text": {
          color: theme.palette.error.main,
          fontWeight: 500,
        },
      },
    },
    alert_dialog_content: {
      display: "flex",
      justifyContent: "center",
      "& p": {
        textAlign: "center",
        fontWeight: 500,
        fontSize: "22px",
        width: "80%",
        color: "black",
      },
    },
    alert_dialog_actions: {
      display: "flex",
      justifyContent: "center",
    },
  })
);
