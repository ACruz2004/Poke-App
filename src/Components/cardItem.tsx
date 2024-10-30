import React from "react";
import "../Style/cards.css";

interface CardItemProps {
  image?: string; // Mark image as optional in case some CardItem doesn't receive an image
  name?: string;
  collected?: string;
}

const CardItem: React.FC<CardItemProps> = (props) => {
  return (
    <div className="cardBox">
      <img src={props.image} alt="" />
      <div className="setName">
        <h2>{props.name}</h2>
        <p className="collectionStats"> {props.collected}</p>
        <button className="addTo">Add To My Sets</button>
      </div>
    </div>
  );
};

export default CardItem;
