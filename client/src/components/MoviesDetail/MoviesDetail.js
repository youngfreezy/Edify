import React, { useEffect } from "react";
import "./MoviesDetail.css";
import Modal from "react-modal";

export default function MoviesGrid({ isOpen, closeModal, selectedMovie }) {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  const fields = ["overview", "title", "release_date", "popularity"];
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Movide Detail"
    >
      <button onClick={closeModal}>close</button>

      <div className="content">
        <img
          alt="movie"
          src={`http://image.tmdb.org/t/p/w342/${selectedMovie.poster_path}`}
          className="detail-img"
        ></img>

        {fields.map(field => {
          return (
            <div className="field" key={field}>
              <b>{field}: </b>
              {selectedMovie[field]}
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
