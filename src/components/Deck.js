import React, { useState } from 'react';
import Card from './Card';

const Deck = () => {
  const [startOver, setStartOver] = useState(false);

  // passing startOver and setStartOver in Card so that it can know when
  // to reset and also change the state afterwards
  return (
    <div style={{textAlign:"center"}}>
      <Card startOver={startOver} setStartOver={setStartOver}/>
      <button onClick={() => setStartOver(true)} className="positive ui button large">Shuffle Deck</button>
    </div>
  );
}

export default Deck;
