import {popscoreURL} from "./Manager"

export const getMeetupById = (id) => {
    //be sure your meetups have good data and related to a location and customer
    return fetch(`${popscoreURL}/meetups/${id}`)
    .then(res => res.json())
}
  
export const getAllMeetups = () => {
    return fetch(`${popscoreURL}/meetups`)
    .then(result => result.json())
}


