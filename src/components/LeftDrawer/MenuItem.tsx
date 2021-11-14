import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, createStyles } from "@material-ui/core";
// import { SvgIconProps } from '@material-ui/core/SvgIcon'

import List from "@material-ui/core/List";
import { useTheme } from "@material-ui/core";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

import MenuItemComp from "./MenuItemComp";

import clsx from "clsx";
import { useLocation } from "react-router";
import { LeftDrawer__styles } from "../../styles/LeftDrawer__styles";

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.any,
  items: PropTypes.array,
};

// TypeScript compile-time props type, infered from propTypes*
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>;
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, "items">;

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
  items?: AppMenuItemProps[];
};

const AppMenuItem: React.FC<AppMenuItemProps> = (props) => {
  const { name, link, Icon, items = [] } = props;
  const classes = useStyles();
  const LeftDrawerClasses = LeftDrawer__styles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  function handleClick() {
    setOpen(!open);
  }

  const { pathname } = useLocation();

  // console.log(pathname);

  useEffect(() => {
    if (pathname?.toLowerCase().includes(name.toLocaleLowerCase())) {
      setOpen(true);
    }
  }, []);

  const MenuItemRoot = (
    <MenuItemComp
      className={clsx(
        classes.menuItem,
        !Icon && classes.menuItemChild,
        "child"
      )}
      link={link}
      onClick={handleClick}
    >
      {/* Display an icon if any */}
      <div className={LeftDrawerClasses.menu_icon_container}>{Icon}</div>
      <ListItemText disableTypography primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && (
        <IconExpandMore
          style={{ height: "1.1em", width: "1.1em", marginRight: -10 }}
        />
      )}
      {isExpandable && open && (
        <IconExpandLess
          style={{ height: "1.1em", width: "1.1em", marginRight: -10 }}
        />
      )}
    </MenuItemComp>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItemChild: {
      margin: "0 !important",
      root: {
        paddingLeft: "35px",
      },
    },
    menuItem: {
      root: {
        margin: "12px 0",
        fontSize: "1em",
        // "&:hover": {
        //   color: "#fff",
        // },
        display: "flex",
        alignItems: "center",
      },
      "& > .icon_container > svg": {
        width: "1.9em",
        height: "1.9em",
        marginRight: "10px",
      },
      "&.active": {
        background: "rgba(0, 0, 0, 0.08)",
        "& text": {
          fill: "#000",
        },
      },
      // "&:hover": {
      //   color: theme.palette.action.hover,
      // },
      "& .MuiListItemText-root": {
        fontSize: "14px",
        fontWeight: 600,
      },
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "4px !important",
      paddingRight: "4px !important",
    },
    menuItemIcon: {
      //   color: "#97c05c",
    },
  })
);

export default AppMenuItem;
