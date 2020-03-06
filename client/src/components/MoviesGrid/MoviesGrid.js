import React from "react";
import "./MoviesGrid.css";

export default function MoviesGrid({ movies, loadMore, showIndividualView }) {
  window.onscroll = function(ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore()
    }
  };
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
                  src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                ></img>
              }
            </div>
          ))}
      </div>
    </div>
  );
}
