import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import City from "./components/city";
import Hotels from "./components/hotels";

export default function App() {
  return (
    <>
      <Router>
        <div>
          {/* <NavigationBar /> */}

          <Switch>
            <Route path="/hotels/:slug" component={Hotels} />
            <Route path="/city/:slug" component={City} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
