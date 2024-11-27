import React, { useEffect, useState } from "react";
import card1 from "../assets/Stellar/stellarCrownCard1.png";
import axios from "axios";

interface CardProps {
  cardId: number,
  cardName: string,
  cardImage: string,
  owned: boolean
}

const CardItem: React.FC<CardProps> = ({ cardId, cardName, cardImage, owned }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOwned, setIsOwned] = useState(owned);

  useEffect(() => {
    setIsOwned(owned);  // Sync the local state with the 'owned' prop
  }, [owned]); // Re-run whenever the 'owned' prop changes

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheck = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const isOwned = event.target.name === "owned";
    setIsOwned(isOwned);

    try {
      const setId = localStorage.getItem("set");
      const username = localStorage.getItem("username");

      const response = await axios.post('http://localhost:8080/update_ownership', {
          username: username,
          cardId: cardId,
          setId: Number(setId),
          owned: isOwned
      });

      console.log('Ownership updated successfully');
    } catch (error) {
      console.error('Error updating ownership:', error);
    }
  };

  return (
    <div className="cardItemBox">
      <div className="cardImage">
        <img src={cardImage} alt="placeholder" onClick={handleImageClick} className={isOwned ? "" : "imageBlur"} />
      </div>
      <div className="cardName">
        <h2>{cardName}</h2>
      </div>

      {isModalOpen && (
        <div className='modal'>
          <button className="closeButton" onClick={closeModal}>x</button>
          <div className="modalContent">
            <img src={cardImage} alt={cardName} className={isOwned ? "" : "modalImageBlur"} />
          </div>
          <div className="ownedContent">
            <label className="ownedText">
              <input
                type="checkbox"
                className="ownedCheckbox"
                checked={isOwned}
                onChange={handleCheck}
                name="owned"
              />
              Owned
            </label>
            <label className="ownedText">
              <input
                type="checkbox"
                className="ownedCheckbox"
                checked={!isOwned}
                onChange={handleCheck}
                name="notOwned"
              />
              Not Owned
            </label>
          </div>
        </div>
      )}
    </div>


  );
};

export default CardItem;
