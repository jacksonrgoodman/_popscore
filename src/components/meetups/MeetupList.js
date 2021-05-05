import React, { useState, useEffect } from 'react';
import { MeetupCard } from './MeetupCard';
import { Link } from "react-router-dom";
import { getAllMeetups, remove, getUserById } from '../../modules/MeetupManager.js';
import { useHistory } from "react-router-dom";
import userEvent from '@testing-library/user-event';


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
  const history = useHistory();
  return (
    <>
    <section className="button"> 
      <div className="container-cards">
        {/* <ProfileCard /> */}
        <Link to="/meetups/create"><button className="button-close">Add Meetup</button></Link>
        {meetups.map(meetup => 
          <MeetupCard
            key={meetup.id} meetup={meetup}/>)}
        </div>
        </section>
    </>
    );
};