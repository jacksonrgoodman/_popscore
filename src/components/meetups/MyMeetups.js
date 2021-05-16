import React, { useState, useEffect } from 'react';
import { MyMeetupCard } from './MyMeetupCard';
import { getMeetupsByUserId } from '../../modules/MeetupManager.js';

import { Link } from "react-router-dom";

import "./MeetupCard.css"


export const MyMeetups = () => {
    const [meetups, setMeetups] = useState([]);
    

    //console.log("List Stored In SetState:", meetups)

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

    //console.log("Currently Logged In User From Session Storage:", currentUser)

    const getUserMeetups = () => {
        //console.log("CURRENT USER INSIDE getUSERLISTS",currentUser)
        return getMeetupsByUserId(parseInt(currentUser)).then(meetupsFromAPI => {
            //console.log("API RETURNS:",meetupsFromAPI)
            setMeetups(meetupsFromAPI)
        });
    };

    useEffect(() => {
        getUserMeetups();
    }, []);

    return (
        <>
          <section className="button"> 
            <div className="container-cards">
            <h1 className="my-lists-title">My Meetups:</h1>  
              <Link className="container-cards" to="/meetups/create"><button className="button-add-green">Add Meetup</button></Link>
              {meetups.map(meetup => 
                <MyMeetupCard
                  key={meetup.id} meetup={meetup}
                />)
              }
            </div>
          </section>
        </>
        );
    };
