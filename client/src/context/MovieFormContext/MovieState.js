import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import { ADD_MOVIE, LOAD_MOVIE } from "./types";

const MovieState = (props) => {
  const initialState = {
    movie:[],
    error: null,
  };
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const addMovie = async (formData) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };
   
    const res = await axios.post("/movieR/movie", formData,);
    dispatch({ type: ADD_MOVIE, payload: res.data });
  };

  const loadMovie = async() => {
    const res = await axios.get("/movieR/movie");
    dispatch({ type: LOAD_MOVIE, payload: res.data.movie });
  };

  return (
    <MovieContext.Provider
      value={{
        movie: state.movie,
        error: state.error,
        addMovie,
        loadMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
