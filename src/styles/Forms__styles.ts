import { lighten, makeStyles, Theme } from "@material-ui/core";
import { styled } from "@mui/material/styles";

export const Forms__styles = makeStyles((theme: Theme) => {
  return {
    chips__container__tags: {
      display: "flex",
      flexWrap: "wrap",
      overflowX: "auto",
      gap: "5px",
      maxWidth: "530px",
      maxHeight: "120px",
    },
    chips__tags: {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      color: `${theme.palette.primary.main} !important`,
      fontSize: `${theme.typography.subtitle1.fontSize} !important`,
      margin: "0 4px 4px 0",
    },
    chips__tags__icon: {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      fill: `${theme.palette.primary.main} !important`,
      fontSize: `18px !important`,
    },
    message__dropzone: {
      borderRadius: "6px",
      border: `2px solid ${theme.palette.secondary.main}`,
      borderStyle: "dashed",
      padding: "10px",
      backgroundColor: lighten(theme.palette.secondary.main, 0.8),
      color: theme.palette.secondary.main,
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
    },
    icon: {
      marginRight: "8px",
      "& path": { fill: theme.palette.secondary.main },
      height: "24px",
      width: "24px",
    },
  };
});
