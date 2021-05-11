import React, { useState, useEffect } from 'react';
import "./ListCard.css";
import { getListingByMovieListId } from "../../modules/ListManager"
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const UserListCard = ({ list }) => {
    //console.log("Object Passed Into List Card:",list)
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

  return (
    <div className="my-list-cards">
      <div className="list-card-content">
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <h3>
            <span className="list-card-name">
                <p>{list.name}</p>
            </span>
        </h3>
        <h5>  
            <span className="list-card-detail">
            {/* {listings.map(l =>(
        <h3>{l.movie.name}
          </h3>
          ))} */}
            </span>
        </h5>
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}