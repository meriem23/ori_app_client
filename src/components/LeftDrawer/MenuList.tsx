import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core";

import List from "@material-ui/core/List";

import MenuItem from "./MenuItem";
import clsx from "clsx";
import { CircularProgress } from "@material-ui/core";
import { AiOutlineHome } from "react-icons/ai";
import Setup from "../../icons/Setup";
import Bag from "../../icons/Bag";
import ReportFile from "../../icons/ReportFile";
import DashBoard from "../../icons/DashBoard";

const styles = makeStyles(() =>
  createStyles({
    salonLogo: {
      "& path": {
        stroke: "white",
      },
    },
  })
);

const MenuComp = () => {
  const appMenuItemsAdherent = [
    {
      name: "Dashboard",
      link: "/dashboard",
      Icon: <DashBoard />,
    },
    {
      name: "Recepies",
      // link: "/dashboard",
      Icon: <Setup />,
      items: [
        {
          name: "Test1.1",
          // link: "/setup/roles",
        },
        {
          name: "Test 1.2",
          // link: "/dashboard/dash2",
        },
      ],
    },
    {
      name: "Test 2",
      // link: "/test",
      Icon: <Bag />,
    },
    {
      name: "Test 3",
      // link: "/test",
      Icon: <ReportFile />,
    },
  ];
  return (
    <>
      {appMenuItemsAdherent.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </>
  );
};

const MenuCompAdherent = () => {
  const classes = useStyles();

  const appMenuItems = [
    {
      name: "Dashboard",
      link: "/dashboard",
      Icon: <AiOutlineHome />,
    },
  ];

  return (
    <>
      {appMenuItems.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </>
  );
};

const AppMenu: React.FC = () => {
  const classes = useStyles();

  const [connectedUser, setConnectedUser] = useState<any>(undefined);

  // useEffect(() => {
  //   if (user) {
  //     user.hasOwnProperty("payment_mode")
  //       ? setConnectedUser("adherent")
  //       : setConnectedUser("admin");
  //   }
  // }, [user]);
  return (
    <List
      component="nav"
      className={clsx(classes.appMenu, classes.left_menu_wrapper)}
      disablePadding
    >
      {/* {connectedUser ? (
        connectedUser === "adherent" ? (
          <MenuCompTeam />
        ) : (
          <MenuCompAdherent />
        )
      ) : (
        <div
          style={{
            minHeight: "25em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      )} */}
      <MenuComp />
    </List>
  );
};

const drawerWidth = 400;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
      paddingBottom: 120,
      // paddingTop: 30,
    },
    left_menu_wrapper: {
      scrollbarColor: "transparent transparent",
      position: "relative",
      maxHeight: "72vh",
      overflow: "scroll",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: "0px",
      },

      /* Handle on hover */
      "&::-webkit-scrollbar-thumb:hover": {
        background: "transparent",
      },
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      minWidth: drawerWidth,
    },
    menuItemIcon: {
      color: "#97c05c",
    },
    salonLogo: {
      minWidth: "1.8em",
      "& path": {
        stroke: "white",
      },
    },
  })
);

export default AppMenu;
