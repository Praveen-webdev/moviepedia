import React, { useState } from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollRestoration from "react-scroll-restoration";
import Home from "./components/Home.jsx";
import ShowMovie from "./components/ShowMovie.js";
import MovieSearch from "./components/MovieSearch";
import Footer from "./components/Footer.jsx";

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  function setMovie(movie) {
    setMovieSearch(movie.toLowerCase());
  }
  return (
    <Router>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
