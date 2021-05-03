import { remoteURL } from "./tools"

export const getAllLists = () => {
    return fetch(`${remoteURL}/movieLists`)
    .then(result => result.json())
}

export const getMovieListsByUserId = (id) => {
    return fetch(`${remoteURL}/movieLists/?creatorId=${id}`)
    .then(res => res.json())
}