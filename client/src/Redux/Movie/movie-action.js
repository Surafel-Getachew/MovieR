import axios from "axios";
import {LOAD_MOVIE} from "./types";

export const loadMovie = () => async(dispatch) => {
    try {
        const res = await axios.get("/movieR/movie");
        dispatch({type:LOAD_MOVIE,payload:res.data.movie})
    } catch (error) {
        
    }
}