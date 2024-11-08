import React from "react";
import MakeHead from "../Components/navBar";
import MakeHeadVidMySets from "../Components/bgvidMySets";
import MakeBody from "../Components/body";
import { View } from "../Components/currentView";

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
    </div>
  );
};

export default MySetsView;
