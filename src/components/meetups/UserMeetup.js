import React, { useState, useEffect } from 'react';
import { MeetupCard } from './MeetupCard';
import { getAllMeetups, remove, getMeetupsByUserId } from '../../modules/MeetupManager.js';
import { useHistory } from "react-router-dom";
import userEvent from '@testing-library/user-event';

import "./MeetupCard.css"


export const UserMeetup = () => {
    const [meetups, setMeetups] = useState([]);
    const history = useHistory();

    // console.log("List Stored In SetState:", meetups)

    const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))

    // console.log("Currently Logged In User From Session Storage:", currentUser)

    const getUserMeetups = () => {
        // console.log("CURRENT USER INSIDE getUSERLISTS",currentUser)
        return getMeetupsByUserId(parseInt(currentUser)).then(meetupsFromAPI => {
            // console.log("API RETURNS:",meetupsFromAPI)
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
      <h3>My Meetups:</h3>
      {meetups.map(meetups => 
            <MeetupCard key={meetups.id} meetup={meetups}/>)}
        </div>
        </section>
    </>
    );
};
