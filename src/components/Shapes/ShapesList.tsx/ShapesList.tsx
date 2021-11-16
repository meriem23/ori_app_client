import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useGetIngredients } from "../../../services/IngredientsServices/ingredientServices";
import PageHeader from "../../PageHeader/PageHeader";
import ShapesListEnhancedTable from "../ShapesListTable/ShapesListTable";

const ShapesList = () => {
  interface HeadCell {
    disablePadding: boolean;
    id: any;
    label: string;
    numeric: boolean;
    show: boolean;
    value: any;
    checked: boolean;
  }

  const [headCells, setHeadCells] = useState<HeadCell[]>([
    {
      id: "_id",
      numeric: false,
      disablePadding: true,
      label: "Code Ingredient",
      show: true,
      value: "_id",
      checked: true,
    },
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Nom Ingredient",
      show: true,
      value: "name",
      checked: true,
    },
    {
      id: "family",
      numeric: false,
      disablePadding: false,
      label: "Famille",
      show: true,
      value: "family",
      checked: true,
    },
    {
      id: "shape",
      numeric: false,
      disablePadding: false,
      label: "Forme",
      show: true,
      value: "shape",
      checked: true,
    },
  ]);
  const {
    data: recepiesData,
    isLoading: isLoadingRecepies,
    isSuccess: isSuccessRecepies,
    refetch: refetchIngredients,
  } = useGetIngredients();

  console.log("#recepiesData", recepiesData);

  return (
    <div>
      <PageHeader
        buttonLink="/Ingredients/Ajout-Ingredient"
        buttonText="Ajouter une Ingredient"
        titleValue="Ingredients"
      />
      {isLoadingRecepies ? (
        <div style={{ width: "100%", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "50%",
              transform: "translateX(50%)",
            }}
          >
            <CircularProgress />
          </div>
        </div>
      ) : (
        <ShapesListEnhancedTable
          recepiesData={recepiesData}
          headCells={headCells}
        />
        // <div>data</div>
      )}
    </div>
  );
};

export default ShapesList;
