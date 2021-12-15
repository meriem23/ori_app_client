import { createTheme } from "@material-ui/core";

export const theme = (dark: boolean) =>
  createTheme({
    breakpoints: {
      values: {
        xs: 480,
        sm: 767,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
    direction: "ltr",
    shape: {
      borderRadius: 10,
    },
    overrides: {
      MuiPaper: {
        root: {
          boxShadow: "none",
          "& .MuiPaper-elevation4": {
            boxShadow: "none",
          },
        },
      },
      MuiCircularProgress: {
        root: {
          color: "grey !important",
        },
      },
    },
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        light: "white",
        main: "#fff",
        dark: "#0072BC",
        contrastText: "#000",
      },
      secondary: {
        light: "#7986cb",
        main: "#f97e52",
        dark: "#303f9f",
        contrastText: "#000",
      },
      error: {
        light: "#7986cb",
        main: "#EC7474",
        dark: "#303f9f",
        contrastText: "#000",
      },
      warning: {
        light: "#7986cb",
        main: "#0072BC",
        dark: "#303f9f",
        contrastText: "#000",
      },
      info: {
        light: "#7986cb",
        main: "#bebebe",
        dark: "#303f9f",
        contrastText: "#000",
      },
      success: {
        light: "#7986cb",
        main: "#0072BC",
        dark: "#303f9f",
        contrastText: "#000",
      },
      text: {
        primary: "#000",
        secondary: "#0072BC",
        disabled: "#303f9f",
        hint: "#000",
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "#E8EDF1",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
    typography: {
      htmlFontSize: 16,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      fontFamily: "'Nunito', sans-serif",
      h1: {
        fontWeight: 300,
        fontSize: "6rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      h2: {
        fontWeight: 300,
        fontSize: "3.75rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      h3: {
        fontWeight: 300,
        fontSize: "3rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      h4: {
        fontWeight: 300,
        fontSize: "2.125rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      h5: {
        fontWeight: 300,
        fontSize: "1.5rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      h6: {
        fontWeight: 300,
        fontSize: "18px",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      subtitle1: {
        fontWeight: 300,
        fontSize: "1rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      subtitle2: {
        fontWeight: 300,
        fontSize: "0.875rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      body1: {
        fontWeight: 300,
        fontSize: "1rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      body2: {
        fontWeight: 300,
        fontSize: "0.875rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
    },
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
    zIndex: {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
  });
