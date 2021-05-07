import React from 'react';
import "./MeetupCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const MeetupCard = ({ meetup }) => {
  // console.log("Object Passed Into Meetup Card:", meetup)
  const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

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
            <p>{meetup.time}</p>
          <p>{meetup.description}</p>
          </h3>
        </span>
        
        <span className="card-detail">
          <p className="card-highlight">
            On:&nbsp;
          </p>
              <p className="generated-detail">
                {meetup.date}
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
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}