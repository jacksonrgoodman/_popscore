import React from 'react';
import "./MeetupCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const MeetupCard = ({ meetup }) => {
    // console.log("Object Passed Into Meetup Card:", meetup)

  return (
    <div className="all-meetup-cards">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <span className="card-name">
          <h3>
            {meetup.name}
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