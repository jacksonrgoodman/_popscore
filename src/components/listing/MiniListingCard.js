import React from 'react';
import "./ListingCard.css";




export const MiniListingCard = ({ movie }) => {
  
  

const imageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  return (
    <>
    
      <div 
      className="container-cards-rr"
      >
          <img className="miniMoviePoster" src={imageURL} alt={movie.title} /> 
          <h3 className="miniMovieTitle">
            {movie.title}
          </h3>
      </div>

    </>
  );
}