import React, { useState, useEffect } from 'react';
import { UserListCard } from './UserListCard';
import { getMovieListsByUserId } from '../../modules/ListManager.js';

import { Link } from "react-router-dom";



export const UserList = () => {
    const [lists, setLists] = useState([]);
    

    //console.log("List Stored In SetState:", lists)

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

    //console.log("Currently Logged In User From Session Storage:", currentUser)

    const getUserLists = () => {
        //console.log("CURRENT USER INSIDE getUSERLISTS",currentUser)
        return getMovieListsByUserId(parseInt(currentUser)).then(listsFromAPI => {
            //console.log("MOVIELISTS BY USER ID API RETURNS:",listsFromAPI)
            setLists(listsFromAPI)
        });
    };

    useEffect(() => {
        getUserLists();
    }, []);

  return (
    <>
        <section className="lists"> 
            <div className="mylists-cards">
            <div>
                <div className="corner-button-bin">
                <Link to="/lists/create"><button className="corner-button">Add List</button></Link>
                </div>
                <div className="user-meetup-head">
                <Link className="my-meetups-title" to="/mylists"><h3 className="my-meetups-title">My Lists:</h3></Link>
                </div>
            </div>  
                {lists.map(lists => 
                    <UserListCard key={lists.id} list={lists}/>)}
            </div>
        </section>
    </>
    );
};
