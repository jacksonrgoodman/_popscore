import React, { useState, useEffect } from 'react';
import { ListCard } from './ListCard';
import { getAllLists, remove, getMovieListsByUserId } from '../../modules/ListManager.js';
import { useHistory } from "react-router-dom";
import userEvent from '@testing-library/user-event';


export const UserList = () => {
    const [lists, setLists] = useState([]);
    const history = useHistory();

    console.log("List Stored In SetState:", lists)

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

    console.log("Currently Logged In User From Session Storage:", currentUser)

    const getUserLists = () => {
        console.log("CURRENT USER INSIDE getUSERLISTS",currentUser)
        return getMovieListsByUserId(parseInt(currentUser)).then(listsFromAPI => {
            console.log("MOVIELISTS BY USER ID API RETURNS:",listsFromAPI)
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
                <h3>My Lists:</h3>  
                {lists.map(lists => 
                    <ListCard key={lists.id} list={lists}/>)}
            </div>
        </section>
    </>
    );
};
