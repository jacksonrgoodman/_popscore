import React from 'react';
import "./MeetupCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const MeetupCard = ({ meetup }) => {
    console.log("Object Passed Into Meetup Card:", meetup)

  return (
    <div className="all-meetup-cards">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <span className="card-name">
          <h3>
            {meetup.name}
          </h3>
        </span>
        
        <span className="card-detail">
          <p>
            On:
              <p>
                {meetup.date}
              </p>
          </p>
        </span>
        <span className="card-detail">
          <p>
            By: 
              <p>
                {/* {meetup.user.name} */}
                {meetup.userId}
              </p>
          </p>
        </span>
        <span className="card-detail">
          <p>
            Marquee:
              <p>
                {meetup.movieList.name}
              </p>
          </p>
        </span>
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}