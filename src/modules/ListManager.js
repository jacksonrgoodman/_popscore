import {popscoreURL} from "./Manager"

export const getListById = (id) => {
    //be sure your lists have good data and related to a location and customer
    return fetch(`${popscoreURL}/lists/${id}`)
    .then(res => res.json())
}
  
export const getAllLists = () => {
    return fetch(`${popscoreURL}/lists`)
    .then(result => result.json())
}
