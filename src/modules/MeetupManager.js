import { remoteURL } from "./tools"

export const getAllMeetups = () => {
    return fetch(`${remoteURL}/meetups?_expand=user&_expand=movieList`)
    .then(result => result.json())
}

export const getMeetup = (id) => {
    return fetch(`${remoteURL}/meetups/${id}?_expand=user`)
    .then(res => res.json())
}

export const getMeetupsByUserId = (id) => {
    return fetch(`${remoteURL}/meetups/?userId=${id}&_expand=user&_expand=movieList`)
    .then(res => res.json())
}

export const addMeetup = (newMeetup) => {
    return fetch(`${remoteURL}/meetups`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMeetup)
    }).then(response => response.json())
}
  
export const updateMeetup = (editedMeetup) =>{
    return fetch(`${remoteURL}/meetups/${editedMeetup.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMeetup)
    }).then(data => data.json());
}
  
export const deleteMeetup = (id) => {
    return fetch(`${remoteURL}/meetups/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}