import React from 'react';
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const ProfileCard = ({ user }) => {
    console.log("Object Passed Into Profile Card:",user)

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <h3>User:
            <span className="card-userName">
                {user.userName}
            </span>
        </h3>
        <h5>Hey  
            <span className="card-userName">
                {user.name}
            </span>
        </h5>
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}