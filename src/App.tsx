import React from "react";
import ResponsiveDrawer from "./components/LeftDrawer/LeftDrawer";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/customTheme";
import Homepage from "./components/Homepage/Homepage";
import { useState } from "react";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import FamiliesList from "./components/Families/FamiliesList.tsx/FamiliesList";
import ShapesList from "./components/Shapes/ShapesList.tsx/ShapesList";
import Register from "./pages/Register";
import AddFamily from "./components/Families/AddFamilies.tsx/AddFamily";
import AddFormeForm from "./components/Shapes/AddShape.tsx/AddShape";
import AddIngredients from "./components/Ingredients/AddIngredient.tsx/IngredientAdd";
import IngredientsList from "./components/Ingredients/IngredientsList.tsx/IngredientsList";
import RecipeAdd from "./components/Recepies/AddRecepie.tsx/RecipeAdd";
import DetailsIngredient from "./components/Ingredients/DetailsIngredient/DetailsIngredient";
import UpdateIngredient from "./components/Ingredients/UpdateIngredient.tsx/UpdateIngredient";
import RecepiesList from "./components/Recepies/RecepiesList.tsx/RecepiesList";

const queryClient = new QueryClient();

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={theme(dark)}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/contact" component={Contact} />
              <ResponsiveDrawer>
                <Route exact path="/Dashboard" component={Homepage} />
                {/* ingredients */}
                <Route exact path="/Ingredients" component={IngredientsList} />
                <Route
                  exact
                  path="/Ingredients/Ajout_Ingredient"
                  component={AddIngredients}
                />
                <Route
                  exact
                  path="/Ingredients/Details_Ingredient/:id"
                  component={DetailsIngredient}
                />
                <Route
                  exact
                  path="/Ingredients/Update_Ingredient/:id"
                  component={UpdateIngredient}
                />
                {/* familles */}
                <Route exact path="/Familles" component={FamiliesList} />
                <Route
                  exact
                  path="/Familles/Ajout_Famille"
                  component={AddFamily}
                />
                {/* formes */}
                <Route exact path="/Natures" component={ShapesList} />
                <Route
                  exact
                  path="/Natures/Ajout_Nature"
                  component={AddFormeForm}
                />
                {/* recette */}
                <Route exact path="/Recettes" component={RecepiesList} />
                <Route
                  exact
                  path="/Recettes/Ajout_Recette"
                  component={RecipeAdd}
                />
              </ResponsiveDrawer>
            </Switch>
          </Router>
          <ReactQueryDevtools initialIsOpen={false} />
        </SnackbarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
