import { tmdbAPIKey } from "./keys"
import { tmdbAPIAddress } from "./tools"

export const searchMovie = (term) => {
    return fetch(`${tmdbAPIAddress}?api_key=${tmdbAPIKey}&language=en-US&query=${term}&page=1&include_adult=false`)
    .then(result => result.json())
}