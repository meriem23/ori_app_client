import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core";

import List from "@material-ui/core/List";

import MenuItem from "./MenuItem";
import clsx from "clsx";
import { AiOutlineHome, AiOutlineGroup } from "react-icons/ai";
import {
  IoFastFoodOutline,
  IoShapesOutline,
  IoNewspaperOutline,
  IoCartOutline,
} from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";

const MenuComp = () => {
  const appMenuItemsAdherent = [
    {
      name: "Dashboard",
      link: "/dashboard",
      Icon: <RiDashboardLine />,
    },
    {
      name: "Ingrédients",
      link: "/Ingredients",
      Icon: <IoFastFoodOutline />,
      // items: [
      //   {
      //     name: "Test1.1",
      //     // link: "/setup/roles",
      //   },
      // ],
    },
    {
      name: "Familles",
      link: "/Familles",
      Icon: <AiOutlineGroup />,
    },
    {
      name: "Formes",
      link: "/Formes",
      Icon: <IoShapesOutline />,
    },
    {
      name: "Recettes",
      link: "/Recettes",
      Icon: <IoNewspaperOutline />,
    },
    {
      name: "Fournisseurs",
      link: "/Fournisseurs",
      Icon: <IoCartOutline />,
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
