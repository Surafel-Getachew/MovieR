import React from "react";
import "./home.css";
import Title from "../../components/TItle/Title";
import Catagory from "../../components/catagory/Catagory";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
const Home = () => {
  return (
    <div className="home">
      <Title />
      <Catagory />
      <div className="movie">
        <div className="section-center">
          <MovieDisplay className="movie-display" />
          <MovieDetail className="movie-detail" />
        </div>
      </div>
    </div>
  );
};

export default Home;
