import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addList } from '../../modules/ListManager';

import './ListForm.css'

export const AddList = () => {
	// State will contain both list data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))
	const [list, setList] = useState({
		name: "",
		desc:"",
        userId: currentUser,
        listTheme:"XXX"
	});

	//const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section

	const history = useHistory();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newList = { ...list }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* List is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newList[event.target.id] = selectedVal
		// update state
		setList(newList)
	}

    useEffect(() => {
		
	}, []);


	const handleClickSaveList = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const name = list.name
		

		if (name === " ") {
			window.alert("Please Name Your List")
		} else {
			//invoke addList passing list as an argument.
			//once complete, change the url and display the list list
			addList(list)
				.then(() => history.push("/"))
		}
	}

	return (
		<form className="listForm">
			<h2 className="listForm__title">New List</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="List name" value={list.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="description">Description:</label>
					<input type="text" id="desc" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="List description" value={list.desc} />
				</div>
			</fieldset>
			
			<fieldset>
				<div className="form-group">
					<label htmlFor="employeeId">Add From My Movie List: </label>
					{/* <select value={list.employeeId} name="employee" id="employeeId" onChange={handleControlledInputChange} className="form-control" >
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
				onClick={handleClickSaveList}>
				Save List
          </button>
		</form>
	)
};