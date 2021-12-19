import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import PageHeader from "../../PageHeader/PageHeader";
import RecepiesListEnhancedTable from "../IngredientsListTable/IngredientsListTable";
import { useGetIngredients } from "../../../services/IngredientsServices/ingredientServices";

const RecepiesList = () => {
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
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Recette",
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
      label: "Nature",
      show: true,
      value: "shape",
      checked: true,
    },
    {
      id: "actions",
      numeric: false,
      disablePadding: true,
      label: "Actions",
      show: true,
      value: "actions",
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
        buttonLink="/Ingredients/Ajout_Ingredient"
        buttonText="Ajouter un Ingrédient"
        titleValue="Ingrédients"
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
            <CircularProgress style={{ color: "grey" }} />
          </div>
        </div>
      ) : (
        <RecepiesListEnhancedTable
          recepiesData={recepiesData}
          headCells={headCells}
        />
        // <div>data</div>
      )}
    </div>
  );
};

export default RecepiesList;
