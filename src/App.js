import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route component={Home} exact path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
