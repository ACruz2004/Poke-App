import React, { useState, useEffect } from "react";
import CardItem from "../cardItem";
import card1 from "../assets/Stellar/stellarCrownCard1.png";

interface CardProps {
  toggleNode: number;
  handleToggle: () => void;
}

const CardScarViol: React.FC<CardProps> = () => {

  return (
    <div className="card">
      <CardItem/>
    </div>
  );
};

export default CardScarViol;
