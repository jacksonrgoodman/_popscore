import {popscoreURL} from "./Manager"

export const getUserById = (id) => {
    //be sure your users have good data and related to a location and customer
    return fetch(`${popscoreURL}/users/${id}`)
    .then(res => res.json())
}
  
export const getAllUsers = () => {
    return fetch(`${popscoreURL}/users`)
    .then(result => result.json())
}
