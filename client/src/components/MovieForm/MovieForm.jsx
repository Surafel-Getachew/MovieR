import React, { useState,useContext } from "react";
import MovieContext from "../../context/MovieFormContext/movieContext";
import "./MovieForm.css";

const MovieForm = () => {
  const [movie, setMovie] = useState({
    title: "",
    catagory: null,
    description: "",
    movieImage: null,
  });

  const movieContext = useContext(MovieContext);
  const {addMovie} = movieContext;

  const {title,description,movieImage} = movie

  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addMovie(movie)
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={onChange}
        />
        <br />
        <label htmlFor="catagory">Catagory:</label>
        <input
          type="radio"
          name="catagory"
          value="movie"
          placeholder="Catagory"
          onChange={onChange}
        />
        <label htmlFor="movie">Movie</label>
        <input
          type="radio"
          name="catagory"
          value="tvseries"
          placeholder="Catagory"
          onChange={onChange}
        />
        <label htmlFor="movie">Tv Series</label>
        <br />

        <label htmlFor="description">Description:</label>
        <input
          type="textarea"
          name="description"
          value={description}
          placeholder="Description"
          onChange={onChange}
        />
        <br />
        <label htmlFor="movieImage">Movie Image</label>
        <input
          type="file"
          enctype="multipart/form-data"
          name="movieImage"
          value={movieImage}
          onChange={onChange}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default MovieForm;
