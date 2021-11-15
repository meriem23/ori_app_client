import { makeStyles, createStyles } from "@material-ui/core";

export const useStylesTable = makeStyles(() =>
  createStyles({
    //style top page
    top: {
      margin: "18px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    h1: {
      fontWeight: "normal",
      fontSize: "1.4rem",
    },
    option: {
      width: "fit-content",
      minWidth: 100,
      margin: 0,
      "& .MuiSelect-select": {
        borderColor: "#110909",
      },
      "& .MuiOutlinedInput-input": {
        padding: "10px 32px 9px 14px",
      },
    },
    topRight: {
      display: "flex",
      alignItems: "center",
      "& .MuiButton-root": {
        fontWeight: 400,
      },
      "& button": {
        margin: 0,
      },
    },
    calendarConatiner: {
      position: "relative",
      marginLeft: 10,
      display: "flex",
    },
    calendar: {
      height: "1.6em",
      width: "1.6em",
      backgroundColor: "#000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    hiddenCalendar: {
      position: "absolute",
      top: 30,
      "& .MuiTextField-root": {
        margin: 0,
        width: 0,
      },
    },
    //table style
    root: {
      // backgroundColor: "#fcfaf5",
      // border: "1px solid #b98f3b3f",
      color: "black !important",
      "& .MuiTableCell-head": {
        fontWeight: 600,
        fontSize: "16px",
        color: "#909090",
      },
      "& .MuiTableCell-root": {
        // borderBottom: "1px solid #b98f3b3f",
        padding: "10px 16px",
      },
      "& .MuiTableCell-body": {
        fontWeight: 500,
        fontSize: "15px",
      },
    },
    paper: {
      width: "100%",
      "& ::-webkit-scrollbar": {
        width: 0,
      },
    },
    table: {
      minWidth: 750,
    },
    container: {
      maxHeight: "calc(100vh - 360px)",
    },
    greyTableCell: {
      color: "#606060",
    },
    tableCellVoirPlus: {
      fontSize: "18px",
    },
    rowHoverEffect: {
      "&:hover": {
        boxShadow: "0px 1px 1px 1px rgba(245, 238, 224, 1)",
        "& $btn_archive": {
          visibility: "visible",
        },
      },
    },
    black_text: {
      color: "black",
    },
    btn_archive: {
      visibility: "hidden",
    },
    menu_three_dots: {
      backgroundColor: "#EFEFEF",
      padding: "0.1em 0.6em",
      border: "0 !important",
      marginRight: "4px",
    },
    menu_container: {
      display: "flex",
      "& span": {
        marginLeft: "8px",
        fontWeight: "500",
      },
      "& svg": {
        // padding: " 0 5px",
        width: "18px",
        "& text": {
          fill: "#C09A3E",
        },
      },
      "& .MuiList-padding": {
        padding: "0px !important",
      },
      "& .MuiMenu-paper": {
        boxShadow: "1px 1px 3px 3px rgba(0,0,0,0.02)",
        borderRadius: "3px",
      },
      "& .MuiMenuItem-root": {
        paddingTop: "8px !important",
        paddingBottom: "8px !important",
      },
      "& .MuiListItem-root": {
        margin: "0px ",
      },
      "& .MuiListItem-gutters": {
        padding: "0 10px",
      },
    },
    align_items: {
      display: "flex",
      alignItems: "center",
      "& svg": {
        width: "18px",
        marginRight: "3px",
      },
    },
    button_svg_container: {
      fontSize: "1.1em",
      "& svg": {
        width: "22px",
        marginRight: "5px",
      },
    },
    add_new_guest_button: {
      position: "absolute",
      bottom: "10px",
      right: "18px",
    },
    nav_center_button: {
      borderRight: "0",
    },
    table_cell_many_elements: {
      display: "flex",
      alignItems: "center",
    },
    avatarContainer: {
      backgroundColor: "#000",
      maxHeight: "2em",
      maxWidth: "2em",
      minHeight: "2em",
      minWidth: "2em",
      // "& div": {
      //   maxHeight: "1em",
      //   maxWidth: "1.2em",
      //   minHeight: "1em",
      //   minWidth: "1.2em",
      // },
      // "& svg": {
      //   minWidth: "1.2em !important",
      //   minHeight: "1em !important",
      //   maxWidth: "1.2em !important",
      //   maxHeight: "1em !important",
      // },
    },
    empty_array: {
      minHeight: "16em",
      position: "relative",
      "& svg": {
        margin: "1em auto",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        height: "13em",
      },
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);
