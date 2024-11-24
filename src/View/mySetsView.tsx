import React from "react";
import MakeHead from "../Components/navBar";
import MakeHeadVidMySets from "../Components/bgvidMySets";
import MakeBody from "../Components/body";
import { View } from "../Components/currentView";
import { Parallax } from "react-parallax";
import SVBG from "../assets/Background Images/S&VBG2.jpg";
import SVBGD from "../assets/Background Images/S&VBG2D.jpg";
import SCARVIOLOGO from "../assets/Logos/S&VLogo.png";
import CardScarViolMySets from "../Components/Sets & Cards/setScarViolMySets";

interface ModeProps {
  toggleNode: number;
  handleToggle: () => void;
  handleView: (id: View) => void;
}

const MySetsView: React.FC<ModeProps> = ({
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
        <MakeHeadVidMySets />
      </div>
      <div className="bodyCont">
        <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
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
          <CardScarViolMySets toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView} />
        </div>
      </Parallax>
      <div className="bodyCont">
        <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default MySetsView;
