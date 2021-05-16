import React from 'react';
import "./ListCard.css";

import { deleteListing } from "../../modules/ListManager"





export const MiniListEdit = ({ listing }) => {

const handleMovieDelete = () => {
  deleteListing(listing.id)
};

  return (
    <>
    <div key={listing.id} className="container-cards-row cntr">
      <h3>{listing.title}</h3>
      <button key={listing.id} 
        className="corner-button-delete" 
        onClick={handleMovieDelete}>
          Remove!
      </button>
    </div>
    </>
  );
}