import React from "react";
import "./MoviesGrid.css";
import throttle from "lodash/throttle";

export default function MoviesGrid({ movies, loadMore, showIndividualView }) {
  const loadMoreMovies = ev => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMore();
    }
  };
  window.onscroll = throttle(loadMoreMovies, 1000);
  return (
    <div className="movies-grid">
      <div className="grid">
        {movies &&
          movies.map(movie => (
            <div key={movie.id} className="grid-item">
              <div>{movie.title}</div>
              {
                <img
                  onClick={e => showIndividualView(e, movie)}
                  alt="movie"
                  src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
                ></img>
              }
            </div>
          ))}
      </div>
    </div>
  );
}
