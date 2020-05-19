import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Landing/Home";
import Test from "./pages/Landing/Test";
import Dashboard from "./pages/Dashboard/Dashboard";

// context
import MovieState from "./context/MovieFormContext/MovieState";

const App = () => {
  return (
    <MovieState>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" component={Test} /> */}
            <Route exact path="/dash" component={Dashboard} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </MovieState>
  );
};

export default App;

// #FAED26 BRIGHT YELLOW
// #86C232 AVOCADO
// #ba274a MARRON
