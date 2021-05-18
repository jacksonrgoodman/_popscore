import { tmdbAPIKey } from "./keys"
import { tmdbAPIAddress } from "./tools"

export const searchMovie = (term) => {
    return fetch(`${tmdbAPIAddress}?api_key=${tmdbAPIKey}&language=en-US&query=${term}&page=1&include_adult=false`)
    .then(result => result.json())
}
export const getMoviebyId = (movie_id) => {
    return fetch(`
    https://api.themoviedb.org/3/movie/${movie_id}?api_key=${tmdbAPIKey}&language=en-US`)
    .then(result => result.json())
}