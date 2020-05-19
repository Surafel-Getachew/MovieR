import React, { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieFormContext/movieContext";

const Test = () => {
  const movieContext = useContext(MovieContext);
  const { loadMovie, movie } = movieContext;
  useEffect(() => {
    loadMovie();
  }, []);
  return (
    <div>
      {movie.map((mov) => (
        <div>
       
        </div>
      ))}
    </div>
  );
};

export default Test;
