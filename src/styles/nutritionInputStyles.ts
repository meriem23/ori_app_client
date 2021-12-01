import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const nutritionInputStyles = makeStyles((theme: Theme) =>
  createStyles({
    field_nutrition_container: {
      position: "relative",
      "& > .MuiButtonBase-root": {
        position: "absolute !important",
      },
    },
    delete_button: {
      top: "-8px",
      right: "-16px",
      backgroundColor: `#bfbfbf !important`,
      zIndex: 100,
      padding: "5px !important",
    },
    add_nutrition: {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      height: "28px",
      width: "28px",
      marginRight: "10px !important",
      "& svg": {
        height: "14px",
        width: "14px",
      },
    },
    add_nutrition_container: {
      display: "flex",
      alignItems: "center",
      width: "fit-content !important",
      cursor: "pointer",
    },
    add_nutrition_text: {
      fontWeight: 600,
      fontSize: "16px",
    },
  })
);
