import React, { useState, useEffect } from 'react';
import "./ListingCard.css";

import { addListing, getListingsbyMovieList } from "../../modules/ListManager"
import { useHistory } from "react-router-dom";




export const ListingCard = ({ movie, list }) => {
  const [movies] = useState({
    movieId: movie.id,
    movieListId: parseInt(list),
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date  
});
  const [listings, setListings] = useState([]); 
  const history = useHistory();

const addMovie = () => {
  const firstMovie =  parseInt(listings.listings[0].movieId)
  const secondMovie =  parseInt(listings.listings[1].movieId)
  const movieLength = listings.listings.length
  if (firstMovie === movie.id || secondMovie === movie.id) {
    window.alert("You Already Have That Movie!")
  } else if (movieLength >= 2) {
    window.alert("Too Many Movies!")
  } else {
    addListing(movies)
    .then(() => history.push(`/lists/${list}/edit`))
    
  }
}

useEffect(() => {
        
  getListingsbyMovieList(
      list
      )
      .then(listings => {
          setListings(listings);

  });
}, []);
const movieDesc = movie.overview.split(". ",1)

    const imageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  return (
    <>
      {
        movie.poster_path === null 
        ? "" 
        : 
    <div className="all-meetup-cards">
          <h3>
            {movie.title}
          </h3>
      <div className="container-cards-row cntr">
      
        
          <img className="moviePoster" src={imageURL} alt={movie.title} />
        
        
          <p className="movie-desc">
            {movieDesc}
          </p>
        
      </div>
      <div className="container-cards-rr cntr">
          
          <button className="button-add-green" onClick={addMovie}>
            Add Movie!
          </button>
          
        </div>
        
    </div>
     }
    </>
  );
}