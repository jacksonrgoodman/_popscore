import React, { useState, useEffect } from "react"
import {updateMeetup, getMeetup, deleteMeetup } from "../../modules/MeetupManager"
import { getMovieListsByUserId } from '../../modules/ListManager';
import { useHistory, useParams } from "react-router-dom"
import "./MeetupForm.css"


export const MeetupEditForm = () => {
const [lists, setLists] = useState([]);
  const [meetup, setMeetup] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {meetupId} = useParams();
  const {userId} = useParams();
  const history = useHistory();

  const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

  const handleFieldChange = evt => {
    const stateToChange = { ...meetup };
    stateToChange[evt.target.id] = evt.target.value;
    setMeetup(stateToChange);
  };

  const updateExistingMeetup = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedMeetup = {
        id:meetup.id,
        name: meetup.name,
        description: meetup.description,
		address: meetup.address,
        date:meetup.date,
        time:meetup.time,
        userId: currentUser,
        movieListId: parseInt(meetup.movieListId),
        isFull: meetup.isFull
    };

  updateMeetup(editedMeetup)
    .then(() => history.push("/mymeetups")
    )
  }
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteMeetup(meetupId).then(() =>
    history.push("/mymeetups")
    )
  };

  useEffect(() => {
    getMeetup(meetupId)
      .then(meetup => {
        setMeetup(meetup);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    getMovieListsByUserId(currentUser)
    .then(listsFromAPI => {
        setLists(listsFromAPI)
    })
}, []);

  return (
    <>
          {currentUser === meetup.userId 
            ?   
                <form className="meetupForm">
                    <div className="button-top">
                        <div className="alignLeft">
                            <button
                                type="button" disabled={isLoading}
                                onClick={handleDelete}
                                className="corner-button-delete"
                            >Delete</button>
                        </div>

                    </div>
                <h2 className="meetupForm__title">Edit Meetup</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Meetup name" value={meetup.name} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Meetup description" value={meetup.description} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="location">Address: </label>
                            <input type="text" id="address" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Meetup Address" value={meetup.address} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="location">Time: </label>
                            <input type="time" id="time" onChange={handleFieldChange} required autoFocus className="form-control" step="1800" value={meetup.time} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="customerId">Date: </label>
                            <input type="date" id="date" onChange={handleFieldChange} required autoFocus className="form-control" value={meetup.date} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="listId">Add From My Movie List: </label>
                            <select value={meetup.movieListId} name="list" id="movieListId" onChange={handleFieldChange} className="form-control" >
                                <option value="0">Select a Movie List</option>
                                {lists.map(l => (
                                    <option key={lists.id} value={l.id}>
                                        {l.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>
                    <div className="buttons">  
                        <div className="alignRight">
                            <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingMeetup}
                            className="corner-button"
                            >Submit</button>
                        </div>
                    </div>
                </form>
             :"" 
            }
    </>
  );
}