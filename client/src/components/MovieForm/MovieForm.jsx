import React, { useState, useContext } from "react";
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
  const { addMovie } = movieContext;

  const { title, description, movieImage } = movie;

  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addMovie(movie);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit} className="movie-form-group">
        <div className = "inputs">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={onChange}
          />
        </div>
        
        <div className = "inputs">
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
        </div>
        
        <div  className = "inputs">
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            placeholder="Description"
            onChange={onChange}
          />
        </div>
     
        <div className = "inputs">
          <label htmlFor="movieImage">Movie Image</label>
          <input
            type="file"
            enctype="multipart/form-data"
            name="movieImage"
            value={movieImage}
            onChange={onChange}
          />
        
        </div>
        <div className = "inputs">
          <input className = "btn-submit" type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
