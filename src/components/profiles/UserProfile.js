import React, { useState, useEffect } from 'react';
import { ProfileCard } from './ProfileCard';
import { getAllUsers, remove, getUserById } from '../../modules/UserManager.js';
import { useHistory } from "react-router-dom";
import userEvent from '@testing-library/user-event';


export const UserProfile = () => {
  const [user, setUsers] = useState([]);
  const history = useHistory();

  const currentUser = JSON.parse(sessionStorage.getItem("popscore_user"))

  const getUser = () => {
      debugger
    return getUserById().then(userFromAPI => {
        console.log(userFromAPI)
        setUsers(userFromAPI)
    });
  };
  useEffect(() => {
      getUser();
    }, []);
    console.log(user)
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