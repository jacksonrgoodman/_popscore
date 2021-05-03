import { remoteURL } from "./tools"

export const getAllMeetups = () => {
    return fetch(`${remoteURL}/meetups?_expand=user&_expand=movieList`)
    .then(result => result.json())
}

export const getMeetupsByUserId = (id) => {
    return fetch(`${remoteURL}/meetups/?userId=${id}`)
    .then(res => res.json())
}