import React, { useState, useEffect } from 'react';
import { ProfileCard } from './ProfileCard';
import { getAllUsers, remove, getUserById } from '../../modules/UserManager.js';
import { useHistory } from "react-router-dom";
import userEvent from '@testing-library/user-event';


export const ProfileList = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    return getAllUsers().then(usersFromAPI => {
      setUsers(usersFromAPI)
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  const history = useHistory();
  return (
    <>
    <section className="profiles"> 
      <div className="container-cards">
        {/* <ProfileCard /> */}
        {users.map(user => 
          <ProfileCard
            key={user.id} user={user}/>)}
        </div>
        </section>
    </>
    );
};