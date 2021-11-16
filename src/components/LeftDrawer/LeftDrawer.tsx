// react imports
import React, { useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory, useLocation } from "react-router";

// component imports
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  Button,
  Breadcrumbs,
} from "@material-ui/core";
import MenuList from "./MenuList";
import SearchInput from "./SearchInput";
import OnOff from "../../icons/OnOff";
import Loop from "../../icons/Loop";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../actions/auth-actions/actions";
import { Avatar, Tooltip } from "@material-ui/core";
import clsx from "clsx";
import { LeftDrawer__styles } from "../../styles/LeftDrawer__styles";
import useWindowDimensions from "../../customHooks/useWindowDimensions";

import Logo from "../../images/ori_logo.png";
import Bell from "../../icons/Bell";
import Flag from "../../icons/Flag";
import { formStyles } from "../../styles/formStyles";
import { useStylesButton } from "../../styles/buttonStyles";
import BlueArrow from "../../icons/BlueArrow";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: any;
}

export default function ResponsiveDrawer(props: Props) {
  const { window, children } = props;

  const theme = useTheme();

  // const dispatch = useDispatch();
  // const { push } = useHistory();

  // const { isLoggedIn, user, token, error } = useSelector(
  //   (state: any) => state.auth
  // );

  const [openDrawer, setOpenDrawer] = useState(true);
  const [openDrawerLeft, setOpenDrawerLeft] = useState(true);
  const [openDrawerRight, setOpenDrawerRight] = useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = LeftDrawer__styles(openDrawer);

  const [connectedUser, setConnectedUser] = useState<any>(undefined);

  // useEffect(() => {
  //   if (user) {
  //     user.hasOwnProperty("payment_mode")
  //       ? setConnectedUser("adherent")
  //       : setConnectedUser("admin");
  //   }
  // }, [user]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerToggleMobile = () => {
    setOpenDrawer(!openDrawer);
  };

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width < 767) {
      setOpenDrawer(true);
      // console.log(openDrawer);
    }
    // console.log(width);
  }, [width]);

  const drawer = (
    <div className={classes.sidebar_right_block}>
      {/* <div className={classes.toolbar} /> */}
      <div className={classes.logo_container}>
        {/* <span className={classes.financial_year}>Masters Logistics - 2021</span> */}
        <img src={Logo} alt="" />
      </div>
      <div className={classes.menu_list_container}>
        <MenuList />
      </div>

      {/* <div className={classes.deconnexion_container_wrapper}>
        <div
          className="deconnexion_container"
          // onClick={() => dispatch(logout())}
        >
          <p>Déconnexion</p>
          <OnOff />
        </div>
      </div> */}
    </div>
  );

  interface FormSearchRoleSchema {
    searchTerm: string;
  }

  const formClasses = formStyles();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [selectedElement, setSelectedElement] = useState<any>(undefined);

  const searchData = {
    type: "text",
    name: "searchTerm",
    label: "Search For Menu Name",
    disabled: false,
    disabledErrorMessage: true,
    // rules: {
    //   required: "This field is required",
    // },
  };

  const buttonClasses = useStylesButton();

  const { pathname } = useLocation();
  const { push } = useHistory();

  const pathnames = pathname.split("/").filter((el, i) => el && i < 4);
  console.log("#pathanmes", pathnames);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar)} elevation={0}>
        <Toolbar className={classes.navbar}>
          <div className={classes.navbar_left_side}>
            {/* icon displayed when desktop mode */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={clsx(
                classes.menuButton
                // (openDrawer || mobileOpen) && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            {/* icon displayed when mobile mode */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggleMobile}
              className={clsx(
                classes.menuButtonMobile
                // (openDrawer || mobileOpen) && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>

            <div>
              <Breadcrumbs separator={<BlueArrow />} aria-label="breadcrumb">
                {pathnames.map((pathnameValue: string) => (
                  <p className={classes.breadcrumb_value}>
                    {pathnameValue.replace("-", " ")}
                  </p>
                ))}
              </Breadcrumbs>
            </div>
          </div>

          <div className={classes.navbar_content_container}>
            {/* <SearchInput /> */}
            <div className="bell_user_img_container">
              <div className="bell_container icon_container">
                <div className="gold_dot"></div>
                <Bell />
              </div>
              <div className="flag_icon_container icon_container">
                <Flag />
              </div>

              {/* <img className="user_profile_img" src={user?.avatar} alt="user image" /> */}
              <span className={clsx(classes.avatar_container)}>
                <Avatar
                  // onClick={() =>
                  //   connectedUser === "adherent"
                  //     ? push("/adherent/profile")
                  //     : null
                  // }
                  className={clsx(classes.avatar)}
                  // alt={user ? user?.first_name + user?.last_name : ""}
                  // src={`${
                  //   process.env.NODE_ENV === "development"
                  //     ? process.env.REACT_APP_STORAGE_URL
                  //     : process.env.REACT_APP_STORAGE_URL_PROD
                  // }${user?.avatar}`}
                />
              </span>
              <Tooltip title="Se déconnecter" arrow>
                <div
                  className="onoff_icon_container icon_container"
                  onClick={() => {
                    localStorage.removeItem("token");
                    push("/login");
                  }}
                >
                  <OnOff />{" "}
                </div>
              </Tooltip>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div className={classes.sidebar_container}>{drawer}</div>
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.main}>{children}</div>
      </main>
    </div>
  );
}
