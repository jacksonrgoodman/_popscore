import React, { useState, useEffect } from 'react';
import "./ListingCard.css";
import { Link, useParams } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const ListingCard = ({ movie }) => {
  ////console.log("Object Passed Into List Card:",list)
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
//   useEffect(() => {
//     getListingByMovieListId(
//         list.id
//         )
//         .then(listings => {
//             setListings(listings);
//             setIsLoading(false);
//     });
// }, []);
const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))
    const imageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  return (
    <>
      {/* {
        movie.poster_path === null 
        ? "" 
        :  */}
    <div className="all-meetup-cards">
      <div className="movie-content">
      <div>
        </div>
        <picture>
          <img className="moviePoster" src={imageURL} alt={movie.title} />
        </picture>
        <span className="card-name">
          <h3>
            {movie.title}
          </h3>
          <p>
            {movie.overview}
          </p>
        </span>
      </div>
        <span className="">
          <button className="corner-button-delete">
            Add Movie!
          </button>
        </span>
    </div>
      {/* } */}
    </>
  );
}