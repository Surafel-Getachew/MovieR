import {combineReducers} from "redux";
import movieReducer from "./Movie/movie-reducer";

export default combineReducers({
    movie:movieReducer
})