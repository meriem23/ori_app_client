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
              <Route exact path="/contact" component={Contact} />
              <ResponsiveDrawer>
                <Route exact path="/Dashboard" component={Homepage} />
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
