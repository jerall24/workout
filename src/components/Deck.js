import React, { useState } from 'react';
import Card from './Card';

const Deck = () => {
  const [startOver, setStartOver] = useState(false);
  const [showRemainingCount, setShowRemainingCount] = useState(false);

  // passing startOver and setStartOver in Card so that it can know when
  // to reset and also change the state afterwards
  return (
    <div style={{textAlign:"center"}} className="ui container">
      <Card startOver={startOver} setStartOver={setStartOver} showRemainingCount={showRemainingCount}/>
      <button onClick={() => setStartOver(true)} className="positive ui button">Shuffle Deck</button>

      <button
        onClick={() => setShowRemainingCount(!showRemainingCount)}
        className={`ui toggle ${showRemainingCount ? "positive" : ""} button`}
        >Show Count Left
      </button>
    </div>
  );
}

export default Deck;
