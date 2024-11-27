import React, { useState } from "react";
import axios from "axios";
import { View } from "../Components/currentView";

interface CardItemProps {
  image: string;
  name: string;
  collected: number;
  id: number
  handleView: (action: View) => void;
}

const SetItemMySet: React.FC<CardItemProps> = ({ image, name, collected, id, handleView }) => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleSubmit = async (
    setId: number
  ) => {
    localStorage.setItem("set", setId.toString())
    handleView('cards');
  }

  return (
    <div className="cardBox">
      <div className="imageWrapper">
        <img src={image} alt={name} />
      </div>
      <div className="setName">
        <h2>{name}</h2>
      </div>
      <div className="collectionStats">{collected}</div>
      {isLogged && <button className="addTo" onClick={() => {handleSubmit(id)}}>View Cards</button>}
    </div>
  );
};

export default SetItemMySet;
