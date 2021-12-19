import React from "react";
import { useParams } from "react-router";
import { useGetIngredient } from "../../../services/IngredientsServices/ingredientServices";
import {
  LabelContainer,
  TableContainerCustom,
  useStylesCommon,
  ValueContainer,
} from "../../../styles/commonStyles";
import { useStylesShape } from "../../../styles/shapeStyles";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DetailsIngredient() {
  const ShapeClasses = useStylesShape();
  const commonClasses = useStylesCommon();

  const { id } = useParams<{ id: string }>();
  // queries and mutations
  const {
    data: IngredientData,
    isLoading: isLoadingIngredient,
    isSuccess: isSuccessIngredient,
    refetch: refetchIngredient,
  } = useGetIngredient(id);

  console.log("#dataI", IngredientData);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // backgroundColor: theme.palette.common.black,
      // color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      // fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <div className={ShapeClasses.add_form_container}>
        <p className={ShapeClasses.form_title}>Détails Ingrédient</p>
        {IngredientData && (
          <>
            <div className={commonClasses.info_container}>
              <LabelContainer>Nom Ingrédient :</LabelContainer>
              <ValueContainer>{IngredientData?.name}</ValueContainer>
            </div>
            <div className={commonClasses.info_container}>
              <LabelContainer>Nom Famille :</LabelContainer>
              <ValueContainer>{IngredientData?.family?.name}</ValueContainer>
            </div>
            <div className={commonClasses.info_container}>
              <LabelContainer>Nature Ingrédient :</LabelContainer>
              <ValueContainer>{IngredientData?.shape?.name}</ValueContainer>
            </div>
            <div
              className={commonClasses.info_container}
              style={{ flexDirection: "column" }}
            >
              <LabelContainer>Facteurs nutrionnels :</LabelContainer>
              <TableContainerCustom>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Nutriment</StyledTableCell>
                      <StyledTableCell>Qauntité</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {IngredientData?.fact?.map(
                      (row: {
                        fact__label: string;
                        fact__quantity: string;
                      }) => (
                        <StyledTableRow key={row.fact__label}>
                          <StyledTableCell component="th" scope="row">
                            {row.fact__label}
                          </StyledTableCell>
                          <StyledTableCell>
                            {row.fact__quantity}
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainerCustom>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailsIngredient;
