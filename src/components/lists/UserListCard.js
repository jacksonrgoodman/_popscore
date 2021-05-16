import React from 'react';
import "./ListCard.css";



export const UserListCard = ({ list }) => {
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
            {/* {listings.map(l =>(
        <h3>{l.movie.name}
          </h3>
          ))} */}
            </span>
        </h5>
        {/* <h5>{user.name}</h5> */}
      </div>
    </div>
  );
}