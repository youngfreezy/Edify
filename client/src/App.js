import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "typeface-roboto";
import Modal from 'react-modal';


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
  let [pageNumber, setSelectedPageNumber] = useState(0)
  
  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }


 const showIndividualView = (e, movie) => {
   setSelectedMovie(movie);
   openModal();
  }
  //convert this to infinite scroll.
  const loadMore = () => {
    setSelectedPageNumber(pageNumber++)
    axios.get('/movies', {params: {
      page: pageNumber
    }})
    .then(movieData => {
        //TODO: abstract filtering into a function
        movieData.data.results = movieData.data.results.filter((movie) => movie.poster_path)
        let newMovies = movies.concat(movieData.data.results);
        return setMovies(newMovies);
    })
  }
  const callApi = () => {
    const pageNumber = 2;
    return axios.get("/movies", {
      params: {
        page: pageNumber
      }
    });
  };

  useEffect(() => {
    console.log("CALLING...");
    callApi()
      .then(moviesData => {
        console.log(moviesData, 'data')
        setMovies(moviesData.data.results);
      })
      .catch(err => console.log(err, "THE ERROR YO"));
  }, []);


  return (
    <Router>
      <div className="App">
        {/* <NavigationMenu submitted={submitted} /> */}
        <Switch>
          <Route exact path="/movies-grid">
          <button onClick={loadMore}>Load More </button>

            <div className="grid">
              {movies && movies.map(movie => (
                <div key={movie.id} className="grid-item">
                  <div>{movie.title}</div>
                  {
                    <img
                      onClick={e => showIndividualView(e, movie)}
                      alt="movie"
                      src={
                        "http://image.tmdb.org/t/p/w185/" + movie.poster_path
                      }
                    ></img>
                  }
                </div>
              ))}
            </div>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          > 
          <button onClick={closeModal}>close</button>
            <div className="Aligner">
              <div className="Aligner-item">
                <img alt="movie" src={'http://image.tmdb.org/t/p/w342/' + selectedMovie.poster_path}></img>
                <div><b>overview: </b>{selectedMovie.overview}</div>
                <div><b>tagline:</b>{selectedMovie.title}</div>
                <div><b>status:</b>{selectedMovie.release_date}</div>
                <div><b>popularity score:</b>{selectedMovie.popularity}</div>
              </div>
            </div>
          </Modal>
          </Route>
        </Switch>
      </div>
      <Redirect exact from="/" to="movies-grid" />
    </Router>
  );
}
export default App;
