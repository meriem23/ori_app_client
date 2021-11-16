import { makeStyles, createStyles } from "@material-ui/core";

export const useStylesDashboard: any = makeStyles(() =>
  createStyles({
    dashboard_container: {
      minHeight: "calc(100vh - 100px)",
      minWidth: "100%",
      boxSizing: "border-box",
      textAlign: "center",
      position: "relative",
      "& > div": {
        width: "100%",
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50% , -50%)",
      },
      "&  svg": {
        width: "30%",
      },
    },
    under_construction_text: {
      fontSize: "30px",
      fontWeight: 500,
      transform: "translateY(-50px)",
    },
  })
);
