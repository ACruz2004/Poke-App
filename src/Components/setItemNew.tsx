import React from "react";

interface CardItemProps {
  image: string;
  name: string;
  collected: string;
}

const SetItemNew: React.FC<CardItemProps> = ({ image, name, collected }) => {
  return (
    <div className="NewBox">
      <p>New!</p>
      <div className="cardBox">
        <div className="imageWrapper">
          <img src={image} alt={name} />
        </div>
        <div className="setName">
          <h2>{name}</h2>
        </div>
        <div className="collectionStats">{collected}</div>
        <button className="addTo">Add to Collection</button>
      </div>
    </div>
  );
};

export default SetItemNew;
