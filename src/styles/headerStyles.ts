import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import hexRgb from "hex-rgb";

export const useStylesHeader: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "100%",
      marginBottom: "20px",
      //   padding: "8px 12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(241, 245, 249, 1)",
      //   borderRadius: "8px",
      position: "sticky",
      top: "40px",
      "&::before": {
        content: '""',
        display: "block",
        height: "20px",
        width: "100%",
        backgroundColor: "rgba(241, 245, 249, 1)",
        position: "absolute",
        top: "-19px",
      },
      "&::after": {
        content: '""',
        display: "block",
        height: "10px",
        width: "100%",
        backgroundColor: "rgba(241, 245, 249, 1)",
        position: "absolute",
        top: "41px",
      },
      "& a": {
        textDecoration: "none !important",
      },
    },
    title: {
      fontSize: "22px",
      fontWeight: 500,
      color: theme.palette.text.primary,
    },
    main_button: {
      margin: "0 !important",
      fontSize: "16px",
      "& path": {
        fill: "white",
      },
      paddingRight: "26px",
      paddingLeft: "20px",
    },
  })
);
