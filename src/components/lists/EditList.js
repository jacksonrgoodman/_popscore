import React, { useState, useEffect } from "react"
import { updateList, getListingByMovieListId, getList, deleteList } from "../../modules/ListManager"
import { searchMovie } from "../../modules/APIManager"
import { useHistory, useParams } from "react-router-dom"
import "./ListForm.css"



export const ListEditForm = () => {
  const [list, setList] = useState({});
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState([])

  const { listId } = useParams();
  const history = useHistory();

  const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

  
  const updateExistingList = evt => {
    evt.preventDefault()
    setIsLoading(true);
    
    // This is an edit, so we need the id
    const editedList = {
      id: list.id,
      userId: currentUser,
      name: list.name,
      listTheme: list.listTheme,
      desc: list.desc
    };
    
    updateList(editedList)
    .then(() => history.push("/mylists")
    )
  }
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteList(listId).then(() =>
    history.push("/mylists")
    )
  };
  
  const printAPICall = (event) => {
    let searchMovieName = event.target.value
    console.log(searchMovieName)
    searchMovie(searchMovieName)
      .then(searchedmovies => {
        setSearchMovies(searchedmovies);
        setIsLoading(false);
      });
  };

  const handleFieldChange = evt => {
    const stateToChange = { ...list };
    stateToChange[evt.target.id] = evt.target.value;
    setList(stateToChange);
  };

  useEffect(() => {
    getList(
      listId
    )
      .then(list => {
        setList(list);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    getListingByMovieListId(
      listId
    )
      .then(listings => {
        setListings(listings);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {currentUser === list.userId
        ?
        <form className="listForm">
          <h2 className="listForm__title">Edit List Details</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="List name" value={list.name} />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="text" id="desc" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="List desc" value={list.desc} />
            </div>
          </fieldset>
          <div>
            {/* {listings.map(l => (
              <h3>{l.movie.name}
              </h3>
            ))} */}
          </div>
          {/* <fieldset>
            <div className="form-group">
              <label htmlFor="searchMovie">Add Movie To List: </label>
              <input  type="text" id="searchMovie" onChange={printAPICall} required autoFocus className="form-control" placeholder="Movie Title" />
            </div>
            <button className="corner-button-green" type="button" disabled={isLoading}
              onClick={printAPICall}>PRINT</button>
            {searchMovies.map(s =>(
          <h3>{s.movie.name}
          </h3>
        ))}
          </fieldset> */}

          <div className="buttons">
            <div className="alignRight">
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingList}
                className="corner-button"
              >Submit</button>
            </div>
            <div className="alignLeft">
              <button
                type="button" disabled={isLoading}
                onClick={handleDelete}
                className="corner-button-delete"
              >Delete</button>
            </div>
          </div>
        </form>
        : ""
      }
    </>
  );
}