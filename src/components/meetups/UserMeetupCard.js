import React from 'react';
import "./MeetupCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const UserMeetupCard = ({ meetup }) => {
    console.log("Object Passed Into USER Meetup Card:", meetup)

  return (
    <div className="my-meetup-card">
      <div className="meetup-card-content">
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <span className="meetup-card-name">
            <p>{meetup.name}</p>
        </span>
      </div>
    </div>
  );
}