import { styled } from "@mui/material/styles";
import {
  Theme,
  makeStyles,
  createStyles,
  TableContainer,
} from "@material-ui/core";

export const useStylesCommon: any = makeStyles((theme: Theme) =>
  createStyles({
    info_container: {
      marginBottom: "16px",
      display: "flex",
    },
  })
);

export const LabelContainer = styled("div")(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "18px",
  fontWeight: 500,
  marginRight: "8px",
  minWidth: "170px",
}));

export const ValueContainer = styled("div")(({ theme }) => ({
  color: "black",
  fontSize: "18px",
  fontWeight: 600,
  marginRight: "8px",
}));

export const TableContainerCustom = styled(TableContainer)(({ theme }) => ({
  marginTop: "12px",
  border: "2px solid rgb(231 231 231)",
  borderRadius: theme.shape.borderRadius,
}));
