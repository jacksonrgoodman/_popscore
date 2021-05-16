import React, { useState, useEffect } from 'react';
import { ProfileCard } from './ProfileCard';
import { getAllUsers } from '../../modules/UserManager.js';



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
  
  return (
    <>
    <section className="profiles"> 
      <div className="container-cards">
        {users.map(user => 
          <ProfileCard
            key={user.id} user={user}/>)}
        </div>
        </section>
    </>
    );
};