import React, { useState, useEffect } from 'react';
import { UserCard } from './UserCard';
import { getAllUsers, remove, getUserById } from '../../modules/UserManager.js';
import { useHistory } from "react-router-dom";


export const UserList = () => {
  const [posts, setUsers] = useState([]);
  const getUsers = () => {
    return getAllUsers().then(postsFromAPI => {
      setUsers(postsFromAPI)
    });
  };

  useEffect(() => {
    getUsers();
  }, []);
  const history = useHistory();
  return (
    <>
    <section className="button"> 
    <button type="button"
      className="btn"
      onClick={() => {history.push("/lists/create")}}>
      Make a new post!
      </button>
      <div className="container-cards">
        {posts.map(post => 
          <UserCard
            key={post.id} post={post}/>)}
        </div>
        </section>
    </>
    );
};