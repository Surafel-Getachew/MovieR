import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import {loadMovie} from "../../Redux/Movie/movie-action";

import "./home.css";
import Title from "../../components/TItle/Title";
import Catagory from "../../components/catagory/Catagory";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import MovieDetail from "../../components/MovieDetail/MovieDetail";

const Home = ({ movie, loadMovie }) => {
  useEffect(() => {
    loadMovie();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home">
      <Title />
      <Catagory />
      <div className="movie">
        <div>
          {movie.map((mov) => (
            <div className="section-center">
              <MovieDisplay movies={mov} className="movie-display" />
              <MovieDetail movies={mov} className="movie-detail" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie.movies,
});

export default connect(mapStateToProps, { loadMovie })(Home);
