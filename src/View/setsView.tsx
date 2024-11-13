import React from "react";
import MakeHead from "../Components/navBar";
import MakeHeadVidSets from "../Components/bgvidSets";
import MakeGround from "../Components/ground";
import MakeBody from "../Components/body";
import Card from "../Components/card";
import SCARVIOLOGO from "../assets/Logos/S&VLogo.png";
import "../Style/cards.css";
import { View } from "../Components/currentView";
import CardScarViol from "../Components/card";

interface ModeProps {
  toggleNode: number;
  handleToggle: () => void;
  handleView: (id: View) => void;
}

const SetsView: React.FC<ModeProps> = ({
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
      <div className="bgVid">
        <MakeHeadVidSets />
      </div>
      <div className="bodyCont">
        <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
      </div>
      <div className={toggleNode == 1 ? "LogoTab" : "LogoTabDark"}>
        <img src={SCARVIOLOGO} alt="" />
      </div>
      <div className="Sets">
        <CardScarViol toggleNode={toggleNode} handleToggle={handleToggle} />
      </div>
      <div className="bodyCont">
        <MakeGround toggleNode={toggleNode} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default SetsView;
