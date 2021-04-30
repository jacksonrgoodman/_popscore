import React from 'react';
import "./MeetupCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const MeetupCard = ({ meetup }) => {
    // console.log("Object Passed Into Meetup Card:", meetup)

  return (
    <div className="meetup-card">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <h3>
            <span className="card-name">
                <p>{meetup.name}</p>
            </span>
        </h3>
        <h5>  
            <span className="card-detail">
                {/* {movieList.creatorId.userName} */}
            </span>
        </h5>
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}