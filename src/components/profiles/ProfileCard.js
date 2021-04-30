import React from 'react';
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const ProfileCard = ({ user }) => {
    // console.log("Object Passed Into Profile Card:",user)

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img className="logo-navbar"src={require(`{user.pic}`).default} /> */}
        </picture>
        <h3>
            <span className="card-userName">
                {user.userName}
            </span>
        </h3>
        <h5>
          <span className="card-bio">
            About: {user.bio}
          </span>
        </h5>
      </div>
    </div>
  );
}