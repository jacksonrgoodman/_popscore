import React, { useState, useEffect } from 'react';
import { UserCard } from './UserCard';
import { getAllUsers, remove, getUserById } from '../../modules/UserManager.js';
import { useHistory } from "react-router-dom";
import userEvent from '@testing-library/user-event';

import "./ProfileCard.css"


export const UserProfile = () => {
    const [user, setUsers] = useState([]);
    const history = useHistory();

    // console.log("User Stored In SetState:", user)

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

    // console.log("Currently Logged In User From Session Storage:", currentUser)

    const getUser = () => {
        // console.log("CURRENT USER INSIDE getUSER",currentUser)
        return getUserById(parseInt(currentUser)).then(userFromAPI => {
            // console.log("API RETURNS:",userFromAPI)
            setUsers(userFromAPI)
        });
    };

    useEffect(() => {
        getUser();
    }, []);
    // console.log(user)
  return (
    <>
    <section className="user-profile"> 
      <div className="user-card">
      <h5 className="welcome">Welcome to <img className="logo"src={require('../../images/logo_popscore.png').default} /></h5>
        <UserCard key={user.id} user={user} />
        </div>
        </section>
    </>
    );
};
