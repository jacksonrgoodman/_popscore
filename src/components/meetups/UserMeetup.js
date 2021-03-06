import React, { useState, useEffect } from 'react';
import { UserMeetupCard } from './UserMeetupCard';
import { getMeetupsByUserId } from '../../modules/MeetupManager.js';


import { Link } from "react-router-dom";

import "./MeetupCard.css"


export const UserMeetup = () => {
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
    <section className="meetups"> 
        <div className="mymeetups-cards">
            <div>
                <div className="corner-button-bin">
                    <Link to="/meetups/create"><button className="corner-button">Add Meetup</button></Link>
                </div>
                <div className="user-meetup-head">
                    <Link className="my-meetups-title" to="/mymeetups"><h3 className="my-meetups-title">My Meetups:</h3></Link>
                </div>
            </div>
            {meetups.map(meetup => 
                <UserMeetupCard key={meetup.id} meetup={meetup}/>)
            }
        </div>
    </section>
    </>
    );
};
