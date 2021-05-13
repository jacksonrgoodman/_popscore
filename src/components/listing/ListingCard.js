import React, { useState, useEffect } from 'react';
import "./ListingCard.css";
import { getMoviebyId } from "../../modules/APIManager"
import { addListing } from "../../modules/ListManager"
import { Link, useHistory, useParams } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const ListingCard = ({ movie, list }) => {
  ////console.log("Object Passed Into List Card:",list)
  const [listings, setListings] = useState({
    movieId: movie.id,
    movieListId: parseInt(list),
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date
		
    
    
});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
//   useEffect(() => {
//     getListingByMovieListId(
//         list.id
//         )
//         .then(listings => {
//             setListings(listings);
//             setIsLoading(false);
//     });
// }, []);
const printAPICallById = () => {
  const searchedId = movie.id
  addListing(listings)
  .then(() => history.push(`/lists/${list}/edit`))
}
const movieDesc = movie.overview.split(". ",1)
const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))
    const imageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  return (
    <>
      {
        movie.poster_path === null 
        ? "" 
        : 
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
            {movieDesc}
          </p>
        </span>
      </div>
        <span className="">
          <button className="corner-button-delete" onClick={printAPICallById}>
            Add Movie!
          </button>
        </span>
    </div>
     }
    </>
  );
}