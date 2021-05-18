import { remoteURL } from "./tools"

export const getAllLists = () => {
    return fetch(`${remoteURL}/movieLists?_expand=user`)
    .then(result => result.json())
}

export const getList = (id) => {
    return fetch(`${remoteURL}/movieLists/${id}`)
    .then(res => res.json())
}
export const getListingsbyMovieList = (id) => {
    return fetch(`${remoteURL}/movieLists/${id}?_embed=listings`)
    .then(res => res.json())
}

export const getMovieListsByUserId = (id) => {
    //console.log("ID PASSED INTO MOVIELIST BY ID FETCH",id)
    return fetch(`${remoteURL}/movieLists/?userId=${id}&_expand=user`)
    .then(res => res.json())
}
export const getListingByMovieListId = (id) => {
    //console.log("ID PASSED INTO MOVIELIST BY ID FETCH",id)
    return fetch(`${remoteURL}/listings/?movieListId=${id}&_expand=movie`)
    .then(res => res.json())
}

export const addList = (newList) => {
    return fetch(`${remoteURL}/movieLists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newList)
    }).then(response => response.json())
}
export const addListing = (newListing) => {
    return fetch(`${remoteURL}/listings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newListing)
    }).then(response => response.json())
}
  
export const updateList = (editedList) =>{
    return fetch(`${remoteURL}/movieLists/${editedList.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedList)
    }).then(data => data.json());
}
  
export const deleteList = (id) => {
    return fetch(`${remoteURL}/movieLists/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}
export const deleteListing = (id) => {
    return fetch(`${remoteURL}/listings/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}