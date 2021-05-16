import React, { useState, useEffect } from 'react';
import { ListCard } from './ListCard';
import { getAllLists } from '../../modules/ListManager.js';

import { Link } from "react-router-dom";



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
  
  return (
    <>
    
      <div className="container-cards">
      <h1 className="my-lists-title">All Lists:</h1>  
        <Link className="container-cards" to="/lists/create"><button className="button-add-green">Add List</button></Link>
        {lists.map(list => 
          <ListCard
            key={list.id} list={list}/>)}
        </div>
        
    </>
    );
};