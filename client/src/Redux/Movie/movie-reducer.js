import {LOAD_MOVIE} from "./types";

const initialState = {
    movies:[]
}

export default (state = initialState,action) => {
    switch (action.type){
        case LOAD_MOVIE:
            return {
                movies:action.payload
            }
        default: 
            return state
    }
}