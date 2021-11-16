import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStylesMenu = makeStyles((theme: Theme) =>
  createStyles({
    poper_menu_container: {
      // transform: "translateX(26px)",
      "& > div > ul": {
        padding: "6px !important",
      },
    },
    menu_delete_container: {
      "&:hover": {
        backgroundColor: "#fff",
      },
      padding: "0",
      "& > div": {
        padding: "8px 10px",
        width: "100%",
        backgroundColor: "#ffe2e2",
        borderRadius: "4px",
        "& .menu_title": {
          fontWeight: 500,
          marginRight: "20px",
          color: "rgb(236, 116, 116);",
        },
        "& svg": {
          width: "22px",
          marginRight: "10px",
          transform: "translate(-3px, 1px)",
        },
      },
    },
    menu_update_container: {
      "&:hover": {
        backgroundColor: "#fff",
      },
      padding: "0px",
      "& > div": {
        padding: "8px 10px",
        width: "100%",
        // backgroundColor: " #ffb1b1",
        borderRadius: "4px",
        "& .menu_title": {
          fontWeight: 500,
          marginRight: "20px",
        },
        "& svg": {
          width: "17px",
          marginRight: "10px",
          transform: "translateY(1px)",
        },
      },
    },
  })
);
