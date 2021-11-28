import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useGetFamilies } from "../../../services/familyServices/familyServices";
import { useGetIngredients } from "../../../services/IngredientsServices/ingredientServices";
import PageHeader from "../../PageHeader/PageHeader";
import FamiliesListEnhancedTable from "../FamiliesListTable/FamiliesListTable";

const FamiliesList = () => {
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
      label: "Nom Famille",
      show: true,
      value: "name",
      checked: true,
    },
    {
      id: "description",
      numeric: false,
      disablePadding: false,
      label: "Description Famille",
      show: true,
      value: "description",
      checked: true,
    },
    {
      id: "actions",
      numeric: false,
      disablePadding: false,
      label: "Actions",
      show: true,
      value: "actions",
      checked: true,
    },
  ]);
  const {
    data: familiesData,
    isLoading: isLoadingfamilies,
    isSuccess: isSuccessfamilies,
    refetch: refetchIngredients,
  } = useGetFamilies();

  console.log("#familiesData", familiesData);

  return (
    <div>
      <PageHeader
        buttonLink="/Familles/Ajout_Famille"
        buttonText="Ajouter une famille"
        titleValue="Familles"
      />
      {isLoadingfamilies ? (
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
        <FamiliesListEnhancedTable
          familiesData={familiesData}
          headCells={headCells}
        />
        // <div>data</div>
      )}
    </div>
  );
};

export default FamiliesList;
