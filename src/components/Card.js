import React, { useEffect, useState } from 'react';
import  { differenceInSeconds, addSeconds, format } from 'date-fns';
// var differenceInMilliseconds = require('date-fns/differenceInMilliseconds')

/*
TODO:
Add custom exercises
Add show count
Add historic
Add time
*/

const Card = ( { startOver, setStartOver } ) => {
  // const [currentNumber, setCurrentNumber] = useState(null);
  // const [currentSuit, setCurrentSuit] = useState(null);
  let backs = ["blue_back", "green_back", "purple_back", "gray_back", "red_back", "yellow_back"];
  const [currentCard, setCurrentCard] = useState(backs[Math.floor(Math.random() * backs.length)]);
  const [deck, setDeck] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(startTime);


  const onClick = () => {
    if (deck.length > 0) {
      setCurrentCard(deck.shift());
    }
    else {
      // figure out how to stop the timer
      setCurrentCard(backs[Math.floor(Math.random() * backs.length)]);
    }
  };

  useEffect(() => {
    let tempDeck = getDeck();
    shuffle(tempDeck);
    var cards = [];
    for (var card in tempDeck) {
      cards.push(String(tempDeck[card]["value"]).concat(tempDeck[card]["suit"]))
    }
    setDeck(cards);

    let secTimer = setInterval( () => {
      setCurrentTime(new Date())
    },1000)

    if (startOver) {
      //Reset the deck

      setStartTime(new Date());
      setCurrentTime(new Date());
      setStartOver(false);
      setCurrentCard(backs[Math.floor(Math.random() * backs.length)]);

    }
    return () => clearInterval(secTimer);
  }, [startOver]);


  // <img src={`images/${currentCard}.png`} alt={currentCard} />
  return (
    <div onClick={onClick} className="ui centered card">
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}/images/${currentCard}.png`} alt={translateTag(currentCard, deck)[0]} />
      </div>
      <div style={{textAlign:"center"}} className="content">
        <a className="header">{translateTag(currentCard, deck)[1]}</a>
        Elapsed time: {format(addSeconds(new Date(0), differenceInSeconds(currentTime, startTime)), 'mm:ss')}
      </div>
    </div>
  );
}

function translateTag(tag, deck) {
  if (tag.length > 3) {
    if (deck.length > 0) {
      return ["deck", "Click on the card to start"];
    }
    else {
      return ["deck", "It's over congrats!!!!"]
    }
  }

  let value = null;
  let suit = null;
  let exercise = null;
  let count = null;

  //convert the value
  switch (tag.slice(0, tag.length-1)) {
    case "A":
      value = "Ace";
      count = 14;
      break;
    case "J":
      value = "Jack";
      count = 11;
      break;
    case "Q":
      value = "Queen";
      count = 12;
      break;
    case "K":
      value = "King";
      count = 13;
      break;
    default:
      value = String(tag[0])
      count = tag.slice(0, tag.length-1)
      break;
  }

  //convert the suit
  switch (tag[tag.length-1]) {
    case "S":
      suit = "Spades";
      exercise = "push ups";
      break;
    case "H":
      suit = "Hearts";
      exercise = "squats";
      break;
    case "D":
      suit = "Diamonds";
      exercise = "sit ups";
      break;
    case "C":
      suit = "Clubs";
      exercise = "burpees";
      break;
  }
  // return ["1", "2"]
  return [`${value} of ${suit}`, `${count} ${exercise}`];
}

//https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
function getDeck()
{
  // const values = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
  // const suits = ["S","H","C","D"];
  const values = ["A",2];
  const suits = ["S","H"];
	var deck = [];

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {value: values[x], suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

export default Card;