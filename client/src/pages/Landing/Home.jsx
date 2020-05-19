import React, { useContext, useEffect } from "react";
import "./home.css";
import Title from "../../components/TItle/Title";
import Catagory from "../../components/catagory/Catagory";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import MovieContext from "../../context/MovieFormContext/movieContext";
const Home = () => {
  const movieContext = useContext(MovieContext);
  const { loadMovie, movie } = movieContext;
  useEffect(() => {
    loadMovie();
  }, []);
  return (
    <div className="home">
      <Title />
      <Catagory />
      <div className="movie">
        <div >
          {movie.map((mov) => (
            <div className="section-center">
              <MovieDisplay movies = {mov} className="movie-display" />
              <MovieDetail movies={mov} className="movie-detail" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
