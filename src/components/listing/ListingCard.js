import React, { useState } from 'react';
import "./ListingCard.css";

import { addListing } from "../../modules/ListManager"
import { useHistory } from "react-router-dom";




export const ListingCard = ({ movie, list }) => {
  ////console.log("Object Passed Into List Card:",list)
  const [listings] = useState({
    movieId: movie.id,
    movieListId: parseInt(list),
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date  
});
  const history = useHistory();

const printAPICallById = () => {
  
  addListing(listings)
  .then(() => history.push(`/lists/${list}/edit`))
}
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
          <button className="button-add-green" onClick={printAPICallById}>
            Add Movie!
          </button>
        </div>
        
    </div>
     }
    </>
  );
}