import React from "react";
import "./movieDisplay.css";

const MovieDisplay = ({ movies }) => {
  return (
    <div className="movie-card">
      <div>
        <img src={require("../../images/friends.jpg")} alt="" />
      </div>
      <h3 className="movie-title">{movies.title}</h3>
      <div className="movie-info">
        <h4>{movies.genere}</h4>
        <h4>{movies.catagory}</h4>
      </div>
      <div className="like-icon">
        <i className="fas fa-heart"></i>
      </div>
    </div>
  );
};

export default MovieDisplay;
