import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useGetIngredients } from "../../../services/IngredientsServices/ingredientServices";
import { useGetShapes } from "../../../services/shapesServices/shapesServices";
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
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Nature",
      show: true,
      value: "name",
      checked: true,
    },
    {
      id: "description",
      numeric: false,
      disablePadding: false,
      label: "Description Nature",
      show: true,
      value: "description",
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
    data: shapesData,
    isLoading: isLoadingShapes,
    isSuccess: isSuccessShapes,
    refetch: refetchShapes,
  } = useGetShapes();

  console.log("#shapesData", shapesData);

  return (
    <div>
      <PageHeader
        buttonLink="/Natures/Ajout_Nature"
        buttonText="Ajouter une Nature"
        titleValue="Natures"
      />
      {isLoadingShapes ? (
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
          shapesData={shapesData}
          headCells={headCells}
        />
        // <div>data</div>
      )}
    </div>
  );
};

export default ShapesList;
