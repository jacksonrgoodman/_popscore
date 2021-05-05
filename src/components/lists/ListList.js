import React, { useState, useEffect } from 'react';
import { ListCard } from './ListCard';
import { getAllLists, remove, getUserById } from '../../modules/ListManager.js';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';


export const ListList = () => {
  const [lists, setLists] = useState([]);
  const getLists = () => {
    return getAllLists().then(listsFromAPI => {
      setLists(listsFromAPI)
    });
  };
  useEffect(() => {
    getLists();
  }, []);
  const history = useHistory();
  return (
    <>
    <section className="button">
    <Link to="/lists/create"><button className="button-close">Add List</button></Link> 
      <div className="container-cards">
        {/* <ProfileCard /> */}
        {lists.map(list => 
          <ListCard
            key={list.id} list={list}/>)}
        </div>
        </section>
    </>
    );
};