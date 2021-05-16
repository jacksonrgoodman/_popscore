import React, { useState, useEffect } from 'react';
import { MeetupCard } from './MeetupCard';
import { Link } from "react-router-dom";
import { getAllMeetups } from '../../modules/MeetupManager.js';



export const MeetupList = () => {
  const [meetups, setMeetups] = useState([]);
  const getMeetups = () => {
    return getAllMeetups().then(meetupsFromAPI => {
      setMeetups(meetupsFromAPI)
    });
  };
  useEffect(() => {
    getMeetups();
  }, []);
  
  return (
    <>
      <section className="button"> 
        <div className="container-cards">
        <h1 className="my-lists-title">All Meetups:</h1>  
          <Link className="container-cards" to="/meetups/create"><button className="button-add-green">Add Meetup</button></Link>
          {meetups.map(meetup => 
            <MeetupCard
              key={meetup.id} meetup={meetup}
            />)
          }
        </div>
      </section>
    </>
    );
};