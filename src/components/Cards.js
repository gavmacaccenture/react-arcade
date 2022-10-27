import React from "react";

const Cards = ({
  cardsLeft,
  snapFound,
  drawTwoCards,
  card1,
  card2,
  deckID,
}) => {
  return (
    <div>
      {" "}
      <p>
        Your deck {deckID} has {cardsLeft} left!
      </p>
      {snapFound && <p>SNAP - you won!</p>}
      {!cardsLeft && !snapFound && <p>Unlucky - you lose!</p>}
      <button onClick={drawTwoCards}>
        {snapFound ? "Play again" : "Draw two cards"}
      </button>
      <div>
        {card1 && (
          <img alt="card 1" src={card1.image} height={100} width={100} />
        )}
        {card2 && (
          <img alt="card 2" src={card2.image} height={100} width={100} />
        )}
      </div>
    </div>
  );
};

export default Cards;
