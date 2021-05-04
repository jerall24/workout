import React from 'react';

const StartOver = ( { display }) => {
  if (display) {
    return (
      <button className="positive ui button">Reshuffle Deck</button>
    );
  }
  else {
    return null;
  };
};

export default StartOver;
