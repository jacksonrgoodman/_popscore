import { remoteURL } from "./tools"

export const getAllLists = () => {
    return fetch(`${remoteURL}/meetups`)
    .then(result => result.json())
}

export const getMeetupsByUserId = (id) => {
    return fetch(`${remoteURL}/meetups/?creatorId=${id}`)
    .then(res => res.json())
}