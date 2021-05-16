import React, { useState, useEffect } from 'react';
import { UserCard } from './UserCard';
import { getUserById } from '../../modules/UserManager.js';


import "./ProfileCard.css"


export const UserProfile = () => {
    const [user, setUsers] = useState([]);
    

    //console.log("User Stored In SetState:", user)

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

    //console.log("Currently Logged In User From Session Storage:", currentUser)

    const getUser = () => {
        //console.log("CURRENT USER INSIDE getUSER",currentUser)
        return getUserById(parseInt(currentUser)).then(userFromAPI => {
            //console.log("API RETURNS:",userFromAPI)
            setUsers(userFromAPI)
        });
    };

    useEffect(() => {
        getUser();

    }, []);
    
  return (
    <>
    <section className="user-profile"> 
        <div className="user-card">
            <UserCard key={user.id} user={user} />
        </div>
    </section>
    </>
    );
};
