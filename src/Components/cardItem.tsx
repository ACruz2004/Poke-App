import React from "react";
import "../Style/cards.css";

interface CardItemProps {
  image?: string; // Mark image as optional in case some CardItem doesn't receive an image
}

const CardItem: React.FC<CardItemProps> = (props) => {
  return (
    <div className="cardBox">
      <img src={props.image} alt="" />
      <div className="setName">
        <h2></h2>
        <p className="collectionStats"></p>
        <button className="addTo">Add To My Sets</button>
      </div>
    </div>
  );
};

export default CardItem;
