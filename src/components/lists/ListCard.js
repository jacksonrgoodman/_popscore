import React from 'react';
import "./ListCard.css";

import userEvent from '@testing-library/user-event';



export const ListCard = ({ list }) => {
    // console.log("Object Passed Into List Card:",list)

  return (
    <div className="all-list-cards">
      <div className="all-list-card-box">
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
                <p><p className="card-highlight">Curated By:</p>{list.user.userName}</p>
            </span>
        </h5>
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}