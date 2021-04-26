import {popscoreURL} from "./Manager"

export const getMovieById = (id) => {
    //be sure your movies have good data and related to a location and customer
    return fetch(`${popscoreURL}/movies/${id}`)
    .then(res => res.json())
}
  
export const getAllMovies = () => {
    return fetch(`${popscoreURL}/movies`)
    .then(result => result.json())
}
