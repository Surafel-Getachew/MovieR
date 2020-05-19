import React from "react";
import "./MovieDetail.css";
const MovieDetail = ({ movies }) => {
  return (
    <div className="movie-detail">
      <article className="movie-item">
        <h4>Genere</h4>
        <p>{movies.genere}</p>
        <h4>Description</h4>
        <p>{movies.description}</p>
        <h4>Starting</h4>
        <p>{movies.starting}</p>
        <h4>Maturity Rating</h4>
        <span>{movies.maturity}</span>
      </article>
    </div>
  );
};

export default MovieDetail;
