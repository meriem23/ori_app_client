import { Theme } from "@material-ui/core";
import hexRgb from "hex-rgb";
import { makeStyles, createStyles } from "@material-ui/core";

export const useStylesButton: any = makeStyles((theme: Theme) =>
  createStyles({
    BigBlueButton: {
      textTransform: "none",
      padding: "8px 24px !important",
      fontSize: "1.1em !important",
      width: "fit-content !important",
      minWidth: "7em !important",
      backgroundColor: `${theme.palette.secondary.main} !important`,
      color: "white !important",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: hexRgb(theme.palette.secondary.main, {
          format: "css",
          alpha: 0.9,
        }),
      },
    },
    ActionsButton: {
      border: "none !important",
      padding: "0px",
    },
    BlueButton: {
      textTransform: "none",
      padding: "6px 10px ",
      fontSize: "1em ",
      width: "fit-content ",
      minWidth: "6em ",
      backgroundColor: `${theme.palette.secondary.main} `,
      color: "white ",
      "&:hover": {
        backgroundColor: hexRgb(theme.palette.secondary.main, {
          format: "css",
          alpha: 0.9,
        }),
      },
    },
    LightBlueButton: {
      textTransform: "none",
      padding: "6px 10px",
      fontSize: "1em",
      // margin: "10px 0",
      width: "fit-content",
      minWidth: "6em",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      "&:hover": {
        backgroundColor: hexRgb(theme.palette.primary.main, {
          format: "css",
          alpha: 0.9,
        }),
      },
      // ["@media (max-width:1024px)"]: {
      //   padding: "0.35em 0.7em",
      // },
      // ["@media (max-width:768px)"]: {
      //   padding: "0.3em 0.6em",
      // },
    },
    RedButton: {
      textTransform: "none",
      padding: "6px 10px",
      fontSize: "1em",
      // margin: "10px 0",
      width: "fit-content",
      minWidth: "6em",
      backgroundColor: theme.palette.error.main,
      color: "white",
      "&:hover": {
        backgroundColor: hexRgb(theme.palette.error.main, {
          format: "css",
          alpha: 0.9,
        }),
      },
      // ["@media (max-width:1024px)"]: {
      //   padding: "0.35em 0.7em",
      // },
    },
    GreyButton: {
      textTransform: "none",
      padding: "6px 10px",
      fontSize: "1em",
      // margin: "10px 0",
      width: "fit-content",
      minWidth: "6em",
      backgroundColor: theme.palette.info.main,
      color: "white",
      "&:hover": {
        backgroundColor: hexRgb(theme.palette.info.main, {
          format: "css",
          alpha: 0.9,
        }),
      },
      // ["@media (max-width:1024px)"]: {
      //   padding: "0.35em 0.7em",
      // },
      // ["@media (max-width:768px)"]: {
      //   padding: "0.3em 0.6em",
      // },
    },
    rootGold: {
      textTransform: "none",
      borderRadius: 0,
      padding: "0.8em 2em",
      fontSize: "1.2em",
      margin: "10px 0",
      width: "fit-content",
      minWidth: "180px",
      backgroundColor: "#C09A3E",
      ["@media (max-width:1024px)"]: {
        padding: "12px 36px",
      },
      ["@media (max-width:768px)"]: {
        padding: "10px 32px",
      },
      marginRight: "auto",
      marginLeft: "auto",
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(192, 154, 62, 0.9)",
      },
    },
    rootBlack: {
      textTransform: "none",
      borderRadius: 0,
      padding: "0.8em 2em",
      fontSize: "1.2em",
      margin: "10px 0",
      width: "fit-content",
      minWidth: "180px",
      backgroundColor: "black",
      ["@media (max-width:1024px)"]: {
        padding: "12px 36px",
      },
      ["@media (max-width:768px)"]: {
        padding: "10px 32px",
      },
      marginRight: "auto",
      marginLeft: "auto",
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(0 , 0 , 0 , 0.9)",
      },
    },
    smallButton: {
      textTransform: "none",
      borderRadius: 0,
      padding: "0em",
      fontSize: "1em",
      // margin: "10px 0",
      width: "fit-content",
      minWidth: "10em",
      maxHeight: "3em",
      minHeight: "3em",
      // ["@media (max-width:768px)"]: {
      //   padding: "4px",
      // },
    },
    black: {
      backgroundColor: "#000",
      color: "white",
      border: "2px solid #000",
      "&:hover": {
        backgroundColor: "rgba(0 , 0 , 0 , 0.8)",
        borderColor: "rgba(0 , 0 , 0 , 0.8)",
      },
    },
    white: {
      backgroundColor: "#fff",
      color: "black",
      border: "2px solid #000",
      "&:hover": {
        backgroundColor: "rgba(255 , 255 , 255 , 0.9)",
        borderColor: "rgba(0 , 0 , 0 , 0.8)",
      },
    },
    gold: {
      backgroundColor: "#C09A3E",
      color: "white",
      border: "2px solid #C09A3E",
      "&:hover": {
        backgroundColor: "rgba(192, 154, 62, 0.9)",
        borderColor: "rgba(192, 154, 62, 0.9)",
      },
    },
    lightGold: {
      backgroundColor: "rgba(192, 154, 62, 0.6)",
      color: "white",
      border: "2px solid rgba(192, 154, 62, 0.6)",
      "&:hover": {
        backgroundColor: "rgba(192, 154, 62 , 0.5)",
        borderColor: "rgba(192, 154, 62 , 0.5)",
      },
    },
    customS: {
      padding: "40px ",
      ["@media (max-width:1024px)"]: {
        padding: "6px 18px",
      },
    },
    borderRightNone: {
      borderRight: "none",
    },
    borderNone: {
      border: "none",
    },
    grey: {
      color: "#B0B0B0",
      padding: "8px 20px",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  })
);
