import { makeStyles, Theme, createStyles, lighten } from "@material-ui/core";

export const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: "18px !important",
      paddingRight: theme.spacing(1),
      // maxHeight: "30px !important",
      borderBottom: "1px solid rgba(245, 238, 224, 1)",
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
      fontWeight: 500,
    },
    container: {
      ["@media (min-width:767px)"]: {
        minHeight: "40px !important",
      },
      ["@media (min-width:480px)"]: {
        minHeight: "40px !important",
      },
    },
  })
);
