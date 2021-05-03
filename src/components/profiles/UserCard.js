import React from 'react';
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const UserCard = ({ user }) => {
    // console.log("Object Passed Into Profile Card:",user)
    // console.log("Picture",user.pic)

  return (
    <div className="card">
      <div className="card-content">
        
        {/* <picture>
          <img src={(user.pic).default} alt="Profile Picture" />
        </picture> */}
        <div className="card-text">
          <h3>
            <span className="card-userName">
              User: {user.userName}
            </span>
          </h3>
          <h5>  
            <span className="card-name">
              Hi {user.name}!
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}