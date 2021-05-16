import React, { useState, useEffect } from 'react';
import { MyListCard } from './MyListCard';
import { getMovieListsByUserId } from '../../modules/ListManager.js';
import { Link } from "react-router-dom";



export const MyLists = () => {
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
        <section className="button">
          <div className="container-cards">
            <h1 className="my-lists-title">My Lists:</h1>  
            <Link className="container-cards" to="/lists/create"><button className="button-add-green">Add List</button></Link>
            {lists.map(lists => 
              <MyListCard
                key={lists.id} list={lists}/>)}
            </div>
            </section>
        </>
        );
    };
