import React from 'react';
import "./ListCard.css";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';



export const UserListCard = ({ list }) => {
    // console.log("Object Passed Into List Card:",list)

  return (
    <div className="my-list-cards">
      <div className="list-card-content">
        <picture>
          {/* <img src={require('./dog.svg').default} alt="My Dog" /> */}
        </picture>
        <h3>
            <span className="list-card-name">
                <p>{list.name}</p>
            </span>
        </h3>
        <h5>  
            <span className="list-card-detail">
                {/* {movieList.creatorId.userName} */}
            </span>
        </h5>
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}