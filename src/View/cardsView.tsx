import React from "react";
import { Parallax } from "react-parallax";
import MakeHead from "../Components/navBar";
import MakeHeadVidCards from "../Components/bgvidCards";
import MakeGround from "../Components/ground";
import MakeBody from "../Components/body";
import SCARVIOLOGO from "../assets/Logos/S&VLogo.png";
import SWORDSHIELDLOGO from "../assets/Logos/S&SLogo.png";
import "../Style/cards.css";
import { View } from "../Components/currentView";
import CardScarViol from "../Components/Sets & Cards/cardScarViol";
import CardSwordShield from "../Components/Sets & Cards/cardSwordShield";
import SVBG from "../assets/Background Images/S&VBG2.jpg";
import SVBGD from "../assets/Background Images/S&VBG2D.jpg";
import SSBG from "../assets/Background Images/S&SBG.jpeg";
import SSBGD from "../assets/Background Images/S&SBGD.jpeg";

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
  return (
    <div>
      <div className={"container"}>
        <MakeHead
          toggleNode={toggleNode}
          handleToggle={handleToggle}
          handleView={handleView}
        />
      </div>
      <Parallax
        className="sets"
        bgImage={toggleNode === 1 ? SVBG : SVBGD}
        bgImageStyle={{ height: "100%", width: "125%" }}
        strength={500}
      >
        <div className={toggleNode == 1 ? "LogoTab" : "LogoTabDark"}>
          <img src={SCARVIOLOGO} alt="" />
        </div>
        <div className="Sets">
          <CardScarViol toggleNode={toggleNode} handleToggle={handleToggle} />
        </div>
      </Parallax>
    </div>
  );
};

export default CardsView;
