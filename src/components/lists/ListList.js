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
      <div className="container-cards">
        <Link className="container-cards" to="/lists/create"><button className="button-add">Add List</button></Link>
        {lists.map(list => 
          <ListCard
            key={list.id} list={list}/>)}
        </div>
        </section>
    </>
    );
};