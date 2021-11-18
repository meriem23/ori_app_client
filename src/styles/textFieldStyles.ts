import { makeStyles, createStyles } from "@material-ui/core";

export const useStylesTextField: any = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiFormLabel-root": {
        color: "#fff",
      },
      "& $notchedOutline": {
        borderColor: "white",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
        "& legend": {
          "& span": {
            fontWeight: 600,
          },
        },
      },
      "& .MuiOutlinedInput-root": {
        minWidth: "200px",
        "& fieldset": {},
        "&.Mui-focused fieldset": {
          borderColor: "white", // customized
          // color: "#fff ",
        },
      },
      "& .MuiOutlinedInput-input": {
        color: "white ",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
    },
    second: {
      "& .MuiFormLabel-root": {
        color: "#000",
        fontWeight: "500 !important",
        fontSize: 16,
      },
      "& $notchedOutline": {
        borderColor: "#B0B0B0",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#B0B0B0",
        border: "2px solid",
        "& legend": {
          "& span": {
            fontWeight: "500 !important",
          },
        },
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {},
        "&.Mui-focused fieldset": {
          borderColor: "#53596C !important", // customized
          // color: "#fff",
          backgroundColor: "transparent !important",
          fontWeight: "500 !important",
        },
      },
      "& .MuiOutlinedInput-input": {
        color: "#000",
        zIndex: "1",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#53596C",
      },
    },
    error: {
      height: 14,
      fontSize: "0.9em",
      letterSpacing: 0.4,
      color: "crimson",
      marginLeft: "16px !important",
      marginTop: "3px !important",
      marginBottom: 13,
    },
    marginBottom: {
      marginBottom: 10,
    },
    fieldsMargins: {
      "& .MuiTextField-root": {
        // margin: "0 !important",
      },
      "& .MuiFormControl-root": {
        // margin: "0 !important",
        minWidth: "300px",
      },
      "& .MuiFormControl-fullWidth": {
        width: "auto",
      },
    },
    checkBoxContainer: { display: "inline" },
    label: { fontSize: "1.1em", transform: "translateY(0.1em)" },
  })
);
