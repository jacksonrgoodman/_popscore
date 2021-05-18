// name of listing
// search for a movie
// input box

//UseRef, does not trigger re-render

import React, { useState, useEffect, useRef } from "react"
import { searchMovie} from "../../modules/APIManager"
import {  useParams } from "react-router-dom"
import { ListingCard } from "./ListingCard";
import "./ListingCard.css"
import { getListingByMovieListId } from "../../modules/ListManager";

export const ListingEditForm = () => {
    
    const [movies, setMovies] = useState([]);
    
    

    const { listingId } = useParams();
    

    const searchInput = useRef("");

    const handleSearch = () => {
        // console.log(searchInput.current.value)
        const searchedMovie = searchInput.current.value
        if (searchedMovie === "") {
			window.alert("Please Search For a Movie Title")
		} else {
			//invoke addList passing list as an argument.
			//once complete, change the url and display the list list
            searchMovie(searchedMovie)
            .then(res => {
                // console.log(res.results)
                setMovies(res.results)
    
            })
			
		}
    }

    

    return (
        <>
            <div className= "movie-bin">
                <h1 className="my-lists-title">Search For A Movie</h1>
                    <input ref={searchInput} type="text" className="form-control-search"></input>
                <div className= "container-cards cntr">
                    <button className="button-add-green" onClick={handleSearch} >SEARCH!</button>
                </div>
                <div>
                    {movies.map(m => (
                        <ListingCard key={m.id} movie={m} list ={listingId} />
                    ))}
                </div>
            </div>
        </>
    )













}