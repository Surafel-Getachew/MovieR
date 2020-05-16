import React from "react";
import "./MovieForm.css";
const MovieForm = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <label htmlFor="catagory">Catagory:</label>
        <input
          type="radio"
          name="catagory"
          value="movie"
          placeholder="Catagory"
        />
        <label htmlFor="movie">Movie</label>
        <input
          type="radio"
          name="catagory"
          value="tvseries"
          placeholder="Catagory"
        />
        <label htmlFor="movie">Tv Series</label>
        <br />

        <label htmlFor="description">Description:</label>
        <input type="textarea" name="description" placeholder="Description" />
        <br />
        <label htmlFor="movieImage">Movie Image</label>
        <input type="file" name="description" />
      </form>
    </div>
  );
};

export default MovieForm;
