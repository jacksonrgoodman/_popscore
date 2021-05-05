import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addMeetup } from '../../modules/MeetupManager';

import './MeetupForm.css'

export const MeetupForm = () => {
	// State will contain both meetup data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))
	const [meetup, setMeetup] = useState({
		name: "",
		address: "",
        date:"",
        time:"",
        userId: currentUser,
        movieListId: 1,
        isFull: false
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section

	const history = useHistory();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newMeetup = { ...meetup }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Meetup is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newMeetup[event.target.id] = selectedVal
		// update state
		setMeetup(newMeetup)
	}

    useEffect(() => {
		
	}, []);


	const handleClickSaveMeetup = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const time = meetup.time
		const date = meetup.date

		if (time === " " || date === " ") {
			window.alert("Please select a date and a time")
		} else {
			//invoke addMeetup passing meetup as an argument.
			//once complete, change the url and display the meetup list
			addMeetup(meetup)
				.then(() => history.push("/"))
		}
	}

	return (
		<form className="meetupForm">
			<h2 className="meetupForm__title">New Meetup</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Meetup name" value={meetup.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="description">Description:</label>
					<input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Meetup description" value={meetup.description} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Address: </label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Meetup Address" value={meetup.address} />
					{/* <select value={meetup.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
                            <option key={l.id} value={l.id}>
                            {l.name}
							</option>
                            ))}
                        </select> */}
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Time: </label>
                    <input type="time" id="time" onChange={handleControlledInputChange} required autoFocus className="form-control" value={meetup.time} />
					{/* <select value={meetup.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
                            <option key={l.id} value={l.id}>
                            {l.name}
							</option>
                            ))}
                        </select> */}
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Date: </label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" value={meetup.date} />
					{/* <select value={meetup.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select> */}
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="employeeId">Add From My Movie List: </label>
					{/* <select value={meetup.employeeId} name="employee" id="employeeId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a employee</option>
						{employees.map(e => (
							<option key={e.id} value={e.id}>
								{e.name}
							</option>
						))}
					</select> */}
				</div>
			</fieldset>
			<button className="corner-button"
				onClick={handleClickSaveMeetup}>
				Save Meetup
          </button>
		</form>
	)
};