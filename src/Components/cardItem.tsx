import React, { useState } from "react";
import card1 from "../assets/Stellar/stellarCrownCard1.png";

const CardItem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOwned, setIsOwned] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "owned")
      setIsOwned(true)
    else if (event.target.name === "notOwned")
      setIsOwned(false)
  }

  return (
    <div className="cardItemBox">
      <div className="cardImage">
        <img src={card1} alt="placeholder" onClick={handleImageClick} className={isOwned? "" : "imageBlur"}/>
      </div>
      <div className="cardName">
        <h2>test card</h2>
      </div>

      {isModalOpen && (
        <div className='modal'>
          <button className="closeButton" onClick={closeModal}>x</button>
          <div className="modalContent">
            <img src={card1} alt="placeholder" className={isOwned? "" : "modalImageBlur"}/>
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
