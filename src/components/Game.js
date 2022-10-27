import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";

const Game = (props) => {
  const [deckID, setDeckID] = useState(null);
  const [cardsLeft, setCardsLeft] = useState(null);
  const [snapFound, setSnapFound] = useState(false);
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Get a new deck of cards
  const newGameEvent = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => res.json())
      .then((res) => {
        console.log("API response is: ", res);
        setDeckID(res.deck_id);
        setCardsLeft(res.remaining);
        setSnapFound(false);
        setCard1(null);
        setCard2(null);
        setTimeout(() => setIsLoaded(true), 5000);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    newGameEvent();
  }, []);

  if (!isLoaded) {
    return <div className="loader"></div>;
  }
  const drawTwoCards = () => {
    // Ensure cards remain in deck before drawing
    if (cardsLeft === 0 || snapFound) {
      newGameEvent();
    } else {
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
        .then((res) => res.json())
        .then((res) => {
          console.log("Draw two cards API response: ", res);
          setCardsLeft(res.remaining);
          setCard1(res.cards[0]);
          setCard2(res.cards[1]);
          setSnapFound(res.cards[0].value === res.cards[1].value);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <h1>Let's play Snap!</h1>
      <Cards
        deckID={deckID}
        cardsLeft={cardsLeft}
        card1={card1}
        card2={card2}
        snapFound={snapFound}
        drawTwoCards={drawTwoCards}
      />
    </>
  );
};
export default Game;
