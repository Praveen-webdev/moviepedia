import React, { useState } from "react";
import Header from "./components/Header.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollRestoration from "react-scroll-restoration";
import Home from "./components/Home.jsx";
import ShowMovie from "./components/ShowMovie.js";
import MovieSearch from "./components/MovieSearch";

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  function setMovie(movie) {
    setMovieSearch(movie.toLowerCase());
  }
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <div className="App">
        <Header setMovie={setMovie} />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={ShowMovie} path="/movie/:id" />
          <Route path="/search">
            <MovieSearch movie={movieSearch} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
