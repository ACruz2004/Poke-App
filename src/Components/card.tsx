import React from "react";
import CardItem from "./cardItem";
import SCImage from "../assets/Cards/SC.jpeg";

const Card = () => {
  return (
    <div className="card">
      <CardItem image={SCImage} />
      <CardItem />
      <CardItem />
    </div>
  );
};

export default Card;
