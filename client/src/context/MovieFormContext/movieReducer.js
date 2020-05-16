import {ADD_MOVIE} from "./types";

export default  (state,action) => {
    switch(action.type){
        case ADD_MOVIE: return {
            ...state,
            movie: action.payload,
            error:null
        }
        default: return state
    }
}