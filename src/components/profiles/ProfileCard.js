import React from 'react';
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const ProfileCard = ({ user }) => {
    // console.log("Object Passed Into Profile Card:",user)

  return (
    <div className="all-user-profiles">
      <div className="all-user-card">
        <picture>
          {/* <img className="logo-navbar"src={require(`{user.pic}`).default} /> */}
        </picture>
        <h3>
            <span className="card-userName">
                {user.userName}
            </span>
        </h3>
        <div className="all-user-cards-body">
            <span className="card-bio">
              <p className="card-highlight">About: </p><p>{user.bio}</p>
            </span>
            <span className="card-email" >
              <p className="card-highlight">Email: </p><p>{user.email}</p>
            </span>
        </div>
      </div>
    </div>
  );
}