import React, { useState } from "react";
import axios from "axios";

interface CardItemProps {
  image: string;
  name: string;
  collected: string;
  id: number
}

const SetItem: React.FC<CardItemProps> = ({ image, name, collected, id }) => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleSubmit = async (
    username: string | null,
    setId: number
  ) => {
    try {
      const response = await axios.post("http://localhost:8080/add_set", {
        username: username,
        setId: setId
      });
      
      if (response.status === 200) {
        alert("Set added to your collection successfully!");
      } else {
        alert("Failed to add set.");
      }
      
    } catch (error: any) {
      console.error("There was an error!", error.response?.data || error.message);
      alert("Error adding set to your collection.");
    }
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
      {isLogged && <button className="addTo" onClick={() => {handleSubmit(username, id)}}>Add to Collection</button>}
    </div>
  );
};

export default SetItem;
