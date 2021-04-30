import { remoteURL } from "./tools"

export const getAllLists = () => {
    return fetch(`${remoteURL}/lists`)
    .then(result => result.json())
}

export const getListById = (id) => {
    return fetch(`${remoteURL}/lists/${id}`)
    .then(res => res.json())
}