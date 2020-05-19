import axios from "axios";

export const addMovie = (formData) => {
    const res = axios.post("/movieR/movie",formData);
    return {
        type:"ADDMOVIE",
        payload:res.data
    }
}

export const loadMovie = () => {
    const res = axios.get("/movieR/movie");
    return {
        type:"LOADMOVIE",
        payload:res.data
    }
}