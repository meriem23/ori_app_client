import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import PageHeader from "../../PageHeader/PageHeader";
import RecepiesListEnhancedTable from "../RecepiesListTable/RecepiesListTable";
import { useGetRecipes } from "../../../services/recipeServices/recipeServices";

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
  } = useGetRecipes();
  return (
    <div>
      <PageHeader
        buttonLink="/Recettes/Ajout_Recette"
        buttonText="Ajouter une Recette"
        titleValue="Recettes"
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
