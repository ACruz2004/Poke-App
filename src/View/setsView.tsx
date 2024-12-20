import React from "react";
import { Parallax } from "react-parallax";
import MakeHead from "../Components/navBar";
import MakeHeadVidSets from "../Background Vids/bgvidSets";
import MakeGround from "../Components/ground";
import MakeBody from "../Components/body";
import SCARVIOLOGO from "../assets/Logos/S&VLogo.png";
import SWORDSHIELDLOGO from "../assets/Logos/S&SLogo.png";
import "../Style/cards.css";
import { View } from "../Components/currentView";
import SetScarViol from "../Sets & Cards/setScarViol";
import SetSwordShield from "../Sets & Cards/setSwordShield";
import SVBG from "../assets/Background Images/S&VBG2.jpg";
import SVBGD from "../assets/Background Images/S&VBG2D.jpg";
import SSBG from "../assets/Background Images/S&SBG.jpeg";
import SSBGD from "../assets/Background Images/S&SBGD.jpeg";

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
      <Parallax
        className=""
        bgImage={toggleNode === 1 ? SVBG : SVBGD}
        bgImageStyle={{ height: "100%", width: "125%" }}
        strength={500}
      >
        <div className={toggleNode == 1 ? "LogoTab" : "LogoTabDark"}>
          <img src={SCARVIOLOGO} alt="" />
        </div>
        <div className="Sets">
          <SetScarViol toggleNode={toggleNode} handleToggle={handleToggle} />
        </div>
      </Parallax>
      <div className="bodyCont">
        <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
      </div>
      <Parallax
        className="sets"
        bgImage={toggleNode === 1 ? SSBG : SSBGD}
        bgImageStyle={{ height: "125%", width: "150%" }}
        strength={500}
      >
        <div className={toggleNode == 1 ? "LogoTab2" : "LogoTabDark2"}>
          <img src={SWORDSHIELDLOGO} alt="" />
        </div>
        <div className="Sets">
          <SetSwordShield
            toggleNode={toggleNode}
            handleToggle={handleToggle}
          />
        </div>
      </Parallax>
      <div className="bodyCont">
        <MakeGround toggleNode={toggleNode} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default SetsView;
