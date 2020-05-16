import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Landing/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dash" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// #FAED26 BRIGHT YELLOW
// #86C232 AVOCADO
// #ba274a MARRON
