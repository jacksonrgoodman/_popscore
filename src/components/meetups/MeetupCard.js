import React, { useState, useEffect } from 'react';
import { getListingByMovieListId } from "../../modules/ListManager"
import { MiniListingCard } from "../listing/MiniListingCard";
import "./MeetupCard.css";
import { Link } from "react-router-dom";




export const MeetupCard = ({ meetup }) => {
  //console.log("Object Passed Into Meetup Card:", meetup)
  const [listings, setListings] = useState([]);

  
 
  
  const dateSplit = (meetup.date.split("-"))
  const year = (dateSplit[0])
  const day = (dateSplit[2])
  const month = (dateSplit[1])
  
  const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))
  const hour = (parseInt(meetup.time.split(":",1)))
  const minute = (meetup.time.split(":"))
  const updateMinute = (minute.shift())
  const updatetime = ( hour > 12 ? (hour - 12) : hour )
  const nightNoon = ( hour > 12 ? " PM" : " AM")

  useEffect(() => {
    getListingByMovieListId(
        meetup.movieListId
        )
        .then(listings => {
            setListings(listings);

    });
}, []);

  return (
    <div className="all-meetup-cards">
      <div className="card-content">
        <div>
        {currentUser === meetup.user.id ?
        <Link className="container-cards" to={`/meetups/${meetup.id}/edit`}><button className="corner-button">Edit Meetup</button></Link>
        :""
      }</div>
        <span className="card-name">
          <h3>
            {meetup.name}
            <p>{updatetime}:{minute}{nightNoon}</p>
            
          <p>{meetup.description}</p>
          </h3>
        </span>
        
        <span className="card-detail">
          <p className="card-highlight">
            On:&nbsp;
          </p>
              <p className="generated-detail">
                {month}/
                {day}/
                {year}
              </p>
        </span>
        <span className="card-detail">
          <p className="card-highlight">
            At:&nbsp;
          </p>
              <p className="generated-detail">
                {meetup.address}
              </p>
        </span>
        <span className="card-detail">
          <p className="card-highlight">
            Organized By:&nbsp; 
          </p>
              <p className=" meetup-username">
                {meetup.user.userName}
              </p>
        </span>
        <span className="card-detail">
          <p className="card-highlight">
            Marquee:&nbsp;
          </p>
              <p className="generated-detail">
                {meetup.movieList.name}
              </p>
        </span>
        <h5>Featuring:</h5>
        {listings.map(l =>(
          <MiniListingCard key={l.id} movie={l}/>))}
      </div>
    </div>
  );
}