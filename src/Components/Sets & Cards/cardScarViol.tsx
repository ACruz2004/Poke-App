import React, { useState, useEffect } from "react";
import CardItem from "../cardItem";

interface CardProps {
  toggleNode: number;
  handleToggle: () => void;
}

const CardScarViol: React.FC<CardProps> = () => {

  const [cards, setCards] = useState([]);

  const setId = localStorage.getItem("set")

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
      console.log("Can't find the originating set");
    }
  }, []);

  return (
    <div className="card">
      {cards
        .sort((a, b) => a.cardId - b.cardId)
        .map((card) => (
            <CardItem cardName={card.cardName} />
          )
        )
      }
    </div>
  );
};

export default CardScarViol;
