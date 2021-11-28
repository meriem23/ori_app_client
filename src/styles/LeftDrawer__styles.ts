import { makeStyles, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";

const drawerWidth = "16.25em";
const navbarHeight = 80;
const navbarHeightSmallDesktop = 64;
const navbarHeightMobile = 50;

export const LeftDrawer__styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& .MuiToolbar-root": {
        paddingLeft: "0px",
      },
      "& .MuiDrawer-paper": {},
      "& .MuiDrawer-root": {
        position: "relative",
        paddingTop: "6px",
      },
      "& .MuiListItemText-inset": {
        paddingLeft: "30px !important",
      },
    },
    menu_list_container: {
      "& .MuiListItem-gutters": {
        paddingLeft: "6px ",
        paddingRight: "10px ",
      },
    },
    financial_year: {
      whiteSpace: "nowrap",
    },
    search_input_container: {
      display: "flex",
      minWidth: "45%",
      marginRight: "10px",
      ["@media (maxWidth: 1366px)"]: {
        minWidth: "52%",
      },
      // [theme.breakpoints.up('md')]
      "& button": {
        padding: "0.2em 12px",
        height: "2.8em",
        border: "none",
        backgroundColor: "blue",
      },
      "& input": {
        border: "none",
        width: "100%",
        height: "2.8em",
        "&:focus": {
          outline: "none",
        },
        padding: "0 0.6em",
      },
      "& .search_button": {
        "& svg": {
          fill: "#fff",
          height: "1.4em",
          width: "1.4em",
        },
      },
    },

    logo_container: {
      width: "100%",
      margin: "6px 0 12px 0",
      textAlign: "center",
      svg: {
        height: "7em",
        width: "inherit",
      },
      "& img": {
        maxHeight: "60px",
        width: "auto",
      },
    },

    deconnexion_container_wrapper: {
      position: "absolute",
      bottom: "0",
      left: "0",
      minWidth: "15em",
      minHeight: "5em",

      "& .deconnexion_container": {
        color: "white",
        position: "absolute",
        bottom: "18px",
        left: "18px",
        background: theme.palette.primary.main,
        minHeight: "2.4em",
        maxHeight: "2.4em",
        width: "3.2em",
        transition: "all 0.3s",
        padding: "1.6em 0.9em",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        "& p": {
          visibility: "hidden",
          opacity: 0,
          margin: 0,
        },
        "&:hover": {
          width: "84%",
          "& svg": {
            right: "8px",

            transform: "translate(0, -50%)",
          },
          "& p": {
            transition: "all 0.4s",
            visibility: "visible",
            opacity: 1,
          },
        },
        "& svg": {
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%)",
          transition: "all 0.3s",
          width: "1.5em",
          height: "1.5em",
        },
      },
    },

    sidebar_container: {
      display: "flex",
      width: "100%",
      overflowY: "hidden",
    },

    // sidebar_left_block: {
    //   minHeight: "100vh",
    //   minWidth: "49px",
    //   zIndex: 9999,
    //   borderRight: "1px solid rgba(180, 184, 199, 0.5)",
    //   overflowY: "hidden",
    // },

    sidebar_right_block: {
      width: (openDrawer) => (openDrawer ? `calc(${drawerWidth})` : `0px`),
      display: (openDrawer) => (openDrawer ? `block` : `none`),

      transition: "width 0.2s ease-in-out",
      overflowY: "hidden",
      // width: "inherit",
    },

    // logo_container: {
    //   minHeight: "50px",
    //   display: "flex",
    //   alignItems: "center",
    //   paddingLeft: "10px",
    //   "& span": {
    //     fontWeight: 600,
    //     fontSize: "14px",
    //   },
    // },
    menu_icon_container: {
      marginRight: "10px",
      marginLeft: "4px",

      "& svg": {
        fill: "#53596C !important",
        height: "24px",
        width: "26px",
        // transform: "translateY(2px)",
      },
      "& text": {
        fill: "#53596C !important",
      },
    },
    navbar_content_container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "& .bell_user_img_container": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "right",

        "& .icon_container": {
          margin: "0 14px",
          cursor: "pointer",
        },
        "& .loop_icon_container": {
          "& svg": {
            fill: "#53596C",
            height: "21px",
            width: "24px",
          },
        },
        "& .flag_icon_container": {
          marginRight: "20px",
          "& svg": {
            fill: "#53596C",
            height: "20px",
            width: "24px",
          },
        },
        "& .onoff_icon_container": {
          marginRight: "25px",
          "& svg": {
            fill: "#53596C",
            height: "26px",
            width: "26px",
            transform: "translateY(2px)",
          },
        },
        "& .menu_grid_container": {
          height: "2.8em",
          width: "2.8em",
          position: "relative",
          margin: "0 5px",
          cursor: "pointer",
          "& svg": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
            height: "1.6em",
            width: "1.6em",
          },
        },
        "& .bell_container": {
          height: "2.8em",
          width: "24px",
          // backgroundColor: "black",
          position: "relative",
          cursor: "pointer",

          "& .gold_dot": {
            height: "8px",
            width: "8px",
            backgroundColor: "rgb(249, 137, 107)",
            borderRadius: "50%",
            position: "absolute",
            top: "15px",
            left: "16px",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
            "@media screen and (max-width: 1366px)": {
              top: "14px",
              left: "17px",
              height: "6px",
              width: "6px",
            },
          },
          "& svg": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "1.6em",
            width: "1.6em",
            "@media screen and (max-width: 1366px)": {},
          },
        },
        "& .user_profile_img": {
          borderRadius: "50%",
          height: "2.8em",
          width: "24px",
          border: "2px solid white",
          margin: "0 20px 0 10px",
        },
      },
    },

    hide: {
      display: "none !important",
    },

    drawer: {
      paddingTop: "6px !important",
      zIndex: 1000,
      [theme.breakpoints.up("sm")]: {
        width: (openDrawer) => (openDrawer ? drawerWidth : "0px"),
        flexShrink: 0,
        transition: "width 0.2s ease-in-out",
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: (openDrawer) =>
          openDrawer ? `calc(100% - ${drawerWidth})` : `calc(100% )`,
        // marginLeft: (openDrawer) => (openDrawer ? drawerWidth : 0),
      },
      transition: "width 0.2s ease-in-out",
      borderBottom: "1px solid rgba(180, 184, 199, 0.5)",
      // backgroundColor: "#fff",
    },

    appBarShift: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    menuButton: {
      marginRight: theme.spacing(1),
      marginLeft: 0,
      "& svg": {
        fill: "rgb(45, 156, 219)",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      // display: (openDrawer) => (openDrawer ? "none" : "block"),
    },
    menuButtonMobile: {
      marginRight: theme.spacing(1),
      marginLeft: 0,
      "& svg": {
        fill: "rgb(45, 156, 219)",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },

      // display: (openDrawer) => (openDrawer ? "none" : "block"),
    },
    // necessary for content to be below app bar
    toolbar: {
      minHeight: `75px`,
      // ["@media (max-width:1366px)"]: {
      //   minHeight: `64px`,
      // },
      // ["@media (max-width:600px)"]: {
      //   minHeight: `50px`,
      // },
    },
    navbar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.up("sm")]: {
        width: "100%",
        // marginLeft: (openDrawer) => (openDrawer ? drawerWidth : 0),
      },
      minHeight: `47px`,
      ["@media (max-width:1366px)"]: {
        minHeight: `47px`,
      },
      ["@media (max-width:600px)"]: {
        minHeight: `47px`,
      },
      transition: "width 0.2s ease-in-out",
    },
    drawerPaper: {
      width: (openDrawer) => (openDrawer ? drawerWidth : "0"),
      transition: "width 0.2s ease-in-out",
      borderRight: "1px solid rgba(180, 184, 199, 0.5)",
      backgroundColor: theme.palette.primary.main,
      // color: theme.palette.primary.light,
    },
    content: {
      flexGrow: 1,
      // padding: theme.spacing(3),
      padding: "18px 18px 0 18px",
      ["@media (max-width:600px)"]: {
        padding: "18px 10px 0 10px",
      },
      backgroundColor: "rgba(241, 245, 249, 1)",
    },
    main: {
      minHeight: `calc(100vh - ${80 + 18}px)`,
      ["@media (max-width:1366px)"]: {
        minHeight: `calc(100vh - ${64 + 18}px) `,
      },
      ["@media (max-width:600px)"]: {
        minHeight: `calc(100vh - ${50 + 18}px) `,
      },
      position: "relative",
    },
    avatar_container: {
      border: "2px solid #53596C",
      borderRadius: "50%",
      backgroundColor: "#C09A3E",
      margin: "0 5px",
    },
    avatar: {
      border: "2px solid rgba(180, 184, 199, 0.5)",
      maxHeight: "1.4em",
      maxWidth: "1.4em",
      cursor: "pointer",
    },
    navbar_left_side: {
      display: "flex",
      alignItems: "center",
    },
    breadcrumb_value: {
      padding: "6px 10px",
      borderRadius: "4px",
      fontWeight: 500,
      backgroundColor: "#e6f4ff",
    },
  })
);
