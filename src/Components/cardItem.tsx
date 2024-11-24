import React, { useState } from "react";
import card1 from "../assets/Stellar/stellarCrownCard1.png";

const CardItem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cardItemBox">
      <div className="cardImage">
        <img src={card1} alt="placeholder" onClick={handleImageClick} />
      </div>
      <div className="cardName">
        <h2>test card</h2>
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modalContent">
            <img src={card1} alt="placeholder" />
          </div>
        </div>
      )} */}

      {isModalOpen && (
        <div className='modal'>
          <button className="closeButton" onClick={closeModal}>x</button>
          <div className="modalContent">
            <img src={card1} alt="placeholder" />
          </div>
        </div>
      )}
    </div>


  );
};

export default CardItem;
