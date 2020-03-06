import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "typeface-roboto";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";
import get from "lodash/get";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const showIndividualView = (e, movie) => {
    setSelectedMovie(movie);
    openModal();
  };

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    let newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
    axios
      .get("/movies", {
        params: {
          page: newPageNumber
        }
      })
      .then(movieData => {
        const moviesWithPictures = get(movieData, "data.results", []).filter(
          movie => movie.poster_path
        );
        let newMovies = movies.concat(moviesWithPictures);
        setMovies(newMovies);
      });
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/movies-grid">
            <MoviesGrid
              movies={movies}
              loadMore={loadMore}
              showIndividualView={showIndividualView}
            />
            <MoviesDetail
              isOpen={modalIsOpen}
              closeModal={closeModal}
              selectedMovie={selectedMovie}
            />
          </Route>
        </Switch>
      </div>
      <Redirect exact from="/" to="movies-grid" />
    </Router>
  );
}
export default App;
