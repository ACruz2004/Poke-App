import React, { useEffect, useState } from "react";
import { Background, Parallax } from "react-parallax";
import MakeHead from "../Components/navBar";
import SCARVIOLOGO from "../assets/Logos/S&VLogo.png";
import "../Style/cards.css";
import { View } from "../Components/currentView";
import CardScarViol from "../Sets & Cards/cardScarViol";
import SVBG from "../assets/Background Images/S&VBG2.jpg";
import SVBGD from "../assets/Background Images/S&VBG2D.jpg";

interface ModeProps {
  toggleNode: number;
  handleToggle: () => void;
  handleView: (id: View) => void;
}

const CardsView: React.FC<ModeProps> = ({
  toggleNode,
  handleToggle,
  handleView,
}) => {

  const backgroundImage = toggleNode === 1 ? SVBG : SVBGD;

  return (
    <div>
      <div className={"container"}>
        <MakeHead
          toggleNode={toggleNode}
          handleToggle={handleToggle}
          handleView={handleView}
        />
      </div>
      <div className="cardParallax">
        <div 
          className="background"
          style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
        <div className={toggleNode == 1 ? "LogoTab" : "LogoTabDark"}>
          <img src={SCARVIOLOGO} alt="" />
        </div>
        <div className="sets">
          <CardScarViol toggleNode={toggleNode} handleToggle={handleToggle} />
        </div>
      </div>
    </div>
  );
};

export default CardsView;
