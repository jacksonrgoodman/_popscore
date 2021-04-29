import React, { useState, useEffect } from 'react';
import { ProfileCard } from './ProfileCard';
import { getAllUsers, remove, getUserById } from '../../modules/UserManager.js';
import { useHistory } from "react-router-dom";
import userEvent from '@testing-library/user-event';


export const UserProfile = () => {
    const [user, setUsers] = useState([]);
    const history = useHistory();

    console.log("User Stored In SetState:", user)

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

    console.log("Currently Logged In User From Session Storage:", currentUser)

    const getUser = () => {
        console.log("CURRENT USER INSIDE getUSER",currentUser)
        return getUserById(parseInt(currentUser)).then(userFromAPI => {
            console.log("API RETURNS:",userFromAPI)
            setUsers(userFromAPI)
        });
    };

    useEffect(() => {
        getUser();
    }, []);

  return (
    <>
    <section className="button"> 
      <div className="container-cards">
        <ProfileCard key={user.id} user={user} />
        </div>
        </section>
    </>
    );
};
