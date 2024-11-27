import React, { useState, useEffect } from "react";
import CardItem from ".././Set & Card Items/cardItem";

interface CardProps {
  toggleNode: number;
  handleToggle: () => void;
}

interface Card {
  cardId: number,
  cardName: string,
  cardPath: string,
  setName: string
}

const CardScarViol: React.FC<CardProps> = () => {

  const [cards, setCards] = useState<Card[]>([]);
  const [owned, setOwned] = useState<Set<number>>(new Set());

  const addOwnedCard = (newCardId: number) => {
    setOwned((prevOwned) => {
      const updatedOwned = new Set(prevOwned);
      updatedOwned.add(newCardId);
      return updatedOwned;
    });
  };

  const setId = localStorage.getItem("set")
  const username = localStorage.getItem("username")

  useEffect(() => {
    if (setId && username) {
      fetch(`http://localhost:8080/get_owned_cards?username=${encodeURIComponent(username)}&setId=${encodeURIComponent(setId)}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            data.forEach((card) => addOwnedCard(card.cardId));
          } else if (data.cardId) {
            addOwnedCard(data.cardId);
          }
        })
        .catch((error) => console.error("Error fetching owned cards:", error));
    } else {
      throw Error("Can't find the originating set or the username");
    }
  }, []);

  useEffect(() => {
    if (setId) {
      fetch(`http://localhost:8080/get_cards?setId=${encodeURIComponent(setId)}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setCards(data))
        .catch((error) => console.error("Error fetching cards:", error));
    } else {
      throw Error("Can't find the originating set");
    }
  }, []);

  return (
    <div className="card">
      
      {cards
        .sort((a, b) => a.cardId - b.cardId)
        .map((card) => (
          <CardItem
            key={card.cardId}
            cardId={card.cardId}
            cardName={card.cardName}
            cardImage={`/src/assets/Cards/${card.setName}/${card.cardPath}.jpg`}
            owned={owned.has(Number(card.cardId))}
          />
        ))
      }
    </div>
  );
};

export default CardScarViol;
