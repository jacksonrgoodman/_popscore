import React, { useState, useEffect } from 'react';
import "./ListCard.css";
import { getListingByMovieListId } from "../../modules/ListManager"
import { Link, useParams } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const ListCard = ({ list }) => {
  ////console.log("Object Passed Into List Card:",list)
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    getListingByMovieListId(
        list.id
        )
        .then(listings => {
            setListings(listings);
            setIsLoading(false);
    });
}, []);
  const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))
  return (
    <div className="all-meetup-cards">
      <div className="card-content">
      <div>
        {currentUser === list.user.id ?
        <Link className="container-cards" to={`/lists/${list.id}/edit`}><button className="corner-button-purple">Edit List Details</button></Link>
        :""
      }</div>
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <h3>
            <span className="card-name">
                {list.name}
            </span>
        </h3>
        <h5>  
            <span className="card-detail">
                <p className="card-highlight">Description: &nbsp;</p><p>{list.desc}</p>
            </span>
            <span className="card-detail">
                <p className="card-highlight">Curated By: &nbsp;</p><p>{list.user.userName}</p>
            </span>
        </h5>
        
          <h3>Featuring:</h3>
        {/* {listings.map(l =>(
        <h3>{l.movie.name}
          </h3>
          ))} */}
        
      </div>
      <div>
          {currentUser === list.userId ?
          <Link className="container-cards" to={`/listings/${list.id}/edit`}><button className="corner-button">Edit Movies</button></Link>
          :""
        }
        </div>
    </div>
  );
}