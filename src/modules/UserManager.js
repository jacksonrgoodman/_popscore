import { remoteURL } from "./tools"

export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(result => result.json())
}

export const getUserById = (id) => {
    return fetch(`${remoteURL}/users/${id}`)
    .then(res => res.json())
}