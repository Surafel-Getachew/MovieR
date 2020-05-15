import React from "react";
import "./movieDisplay.css";

const MovieDisplay = () => {
  return (
    <div className="movie-card">
      <div>
        <img src={require("../../images/friends.jpg")} alt="" />
        
      </div>
      <h3 className="movie-title">Friends</h3>
      <div className="movie-info">
        <h4>Comedy</h4>
        <h4>TV Series</h4>
      </div>
      <div className = "like-icon">
        <i className="fas fa-heart"></i>
      </div>
    </div>
  );
};

export default MovieDisplay;
