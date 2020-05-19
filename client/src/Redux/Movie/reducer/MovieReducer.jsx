const initialstate = {
    movie:null,
    error:null
}

const MovieReducer = (state = initialstate,action) => {
    switch (action.type) {
        case "ADDMOVIE":
            return {...state}

        default: return state
    }
}