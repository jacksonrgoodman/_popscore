import { remoteURL } from "./tools"

export const getAllLists = () => {
    return fetch(`${remoteURL}/movieLists?_expand=user`)
    .then(result => result.json())
}

export const getMovieListsByUserId = (id) => {
    return fetch(`${remoteURL}/movieLists/?creatorId=${id}`)
    .then(res => res.json())
}