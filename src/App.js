import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollRestoration from "react-scroll-restoration";
import Home from "./components/Home.jsx";
import ShowMovie from "./components/ShowMovie.js";

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <div className="App">
        <Header />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={ShowMovie} path="/movie/:id" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
