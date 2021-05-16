import React, { useState, useEffect } from 'react';
import "./ListCard.css";
import { getListingByMovieListId } from "../../modules/ListManager"
import { Link } from "react-router-dom";
import { MiniListingCard } from "../listing/MiniListingCard";




export const ListCard = ({ list }) => {
  ////console.log("Object Passed Into List Card:",list)
  const [listings, setListings] = useState([]);

  
  useEffect(() => {
    getListingByMovieListId(
        list.id
        )
        .then(listings => {
            setListings(listings);

    });
}, []);
const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

  return (
    <div className="all-meetup-cards">
      <div className="card-content">
        <picture>
          {/* <img src={imageURL} alt="My Dog" /> */}
        </picture>
        <h3>
            <span className="card-name">
                {list.name}
            </span>
        </h3>
        <h5>  
            <span className="card-detail">
                <p className="card-highlight">Curated By: &nbsp;</p><p>{list.user.userName}</p>
            </span>
            <span className="card-detail">
                <p className="card-highlight">Description: &nbsp;</p><p>{list.desc}</p>
            </span>
        </h5>
        
          <h3>Featuring:</h3>
        {listings.map(l =>(
          <MiniListingCard key={l.id} movie={l}/>))}
        
      </div>
      <div>
        {currentUser === list.user.id ?
        <Link className="container-cards" to={`/lists/${list.id}/edit`}><button className="corner-button-purple">Edit List Details</button></Link>
        :""
      }</div>
      <div>
          {currentUser === list.userId ?
          <Link className="container-cards" to={`/listings/${list.id}/edit`}><button className="corner-button">Add Movies!</button></Link>
          :""
        }
        </div>
    </div>
  );
}