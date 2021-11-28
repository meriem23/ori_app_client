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
import RecepiesList from "./components/Recepies/RecepiesList.tsx/RecepiesList";
import FamiliesList from "./components/Families/FamiliesList.tsx/FamiliesList";
import ShapesList from "./components/Shapes/ShapesList.tsx/ShapesList";
import Register from "./pages/Register";
import AddFamily from "./components/Families/AddFamilies.tsx/AddFamily";
import AddFormeForm from "./components/Shapes/AddShape.tsx/AddShape";

const queryClient = new QueryClient();

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={theme(dark)}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/contact" component={Contact} />
              <ResponsiveDrawer>
                <Route exact path="/Dashboard" component={Homepage} />
                <Route exact path="/Recettes" component={RecepiesList} />
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
