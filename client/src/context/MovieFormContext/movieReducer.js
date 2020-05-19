import { ADD_MOVIE, LOAD_MOVIE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movie: [...state.movie, action.payload],
        error: null,
      };
    case LOAD_MOVIE:
      return {
        ...state,
        movie: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
