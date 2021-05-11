// name of listing
// search for a movie
// input box

//UseRef, does not trigger re-render

import React, { useState, useEffect, useRef } from "react"
import { searchMovie, searchOtherMovie } from "../../modules/APIManager"
import { useHistory, useParams } from "react-router-dom"
import { ListingCard } from "./ListingCard";
import "./ListingCard.css"

export const ListingEditForm = () => {
    const [listing, setListing] = useState([]);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { listingId } = useParams();
    const history = useHistory();

    const searchInput = useRef("");

    const handleSearch = () => {
        console.log(searchInput.current.value)
        const searchedMovie = searchInput.current.value
        searchMovie(searchedMovie)
        .then(res => {
            console.log(res.results)
            setMovies(res.results)
            setIsLoading(false);
        })
    }

    return (
        <>
            <div className= "movie-bin">
                <h1 className="my-lists-title">Search For A Movie</h1>
                <div className= "movie-bin-search">
                    <input ref={searchInput} type="text" className="form-control-search"></input>
                    <button className="corner-button-purple" onClick={handleSearch} >SEARCH!</button>
                </div>
                <div>
                    {movies.map(m => (
                        <ListingCard key={m.id} movie={m}/>
                    ))}
                </div>
            </div>
        </>
    )













}