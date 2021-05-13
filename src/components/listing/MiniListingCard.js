import React, { useState, useEffect } from 'react';
import "./ListingCard.css";
import { getMoviebyId } from "../../modules/APIManager"
import { addListing } from "../../modules/ListManager"
import { Link, useHistory, useParams } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const MiniListingCard = ({ movie }) => {
  ////console.log("Object Passed Into List Card:",list)
  const [listings, setListings] = useState({
    
		
    
    
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
  .then(() => history.push(`/`))
}
//const movieDesc = movie.overview.split(". ",1)
const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))
    const imageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  return (
    <>
      {/* {
        movie.poster_path === null 
        ? "" 
        :  */}
    <div>
      <div className="movie-content">
      <div>
        </div>
        <picture>
          <img className="miniMoviePoster" src={imageURL} alt={movie.title} />
        </picture>
        <span className="titleBin">
          <h3 className="miniMovieTitle">
            {movie.title}
          </h3>
        </span>
      </div>
    </div>
     {/* } */}
    </>
  );
}