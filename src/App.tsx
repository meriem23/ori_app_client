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
import RecepiesList from "./components/Recepies/IngredientsList.tsx/RecepiesList";
import FamiliesList from "./components/Families/FamiliesList.tsx/FamiliesList";
import ShapesList from "./components/Shapes/ShapesList.tsx/ShapesList";
import Register from "./pages/Register";
import AddFamily from "./components/Families/AddFamilies.tsx/AddFamily";
import AddFormeForm from "./components/Shapes/AddShape.tsx/AddShape";
import AddIngredients from "./components/Recepies/AddIngredient.tsx/IngredientAdd";
import RecipeAdd from "./components/Recepiesp/AddRecepie.tsx/RecipeAdd";
import RecipesList from "./components/Recepiesp/RecepiesList.tsx/RecepiesList";
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
                <Route exact path="/Ingredients" component={RecepiesList} />
                <Route
                  exact
                  path="/Ingredients/Ajout_Ingredient"
                  component={AddIngredients}
                />
                <Route exact path="/Familles" component={FamiliesList} />
                <Route
                  exact
                  path="/Familles/Ajout_Famille"
                  component={AddFamily}
                />
                <Route exact path="/Formes" component={ShapesList} />
                <Route
                  exact
                  path="/Formes/Ajout_Forme"
                  component={AddFormeForm}
                />
                <Route exact path="/Recettes" component={RecipesList} />
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
