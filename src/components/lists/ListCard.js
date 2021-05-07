import React from 'react';
import "./ListCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const ListCard = ({ list }) => {
  // console.log("Object Passed Into List Card:",list)
  const currentUser = JSON.parse(sessionStorage.getItem("popscore_User"))
  return (
    <div className="all-meetup-cards">
      <div className="card-content">
      <div>
        {currentUser === list.user.id ?
        <Link className="container-cards" to={`/lists/${list.id}/edit`}><button className="corner-button">Edit List</button></Link>
        :""
      }</div>
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <h3>
            <span className="card-name">
                {list.name}
            </span>
        </h3>
        <h5>  
            <span className="card-detail">
                <p className="card-highlight">Featuring: &nbsp;</p><p>{list.desc}</p>
            </span>
            <span className="card-detail">
                <p className="card-highlight">Curated By: &nbsp;</p><p>{list.user.userName}</p>
            </span>
        </h5>
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}