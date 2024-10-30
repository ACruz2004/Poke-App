import React from "react";
import MakeHead from "../Components/navBar";
import { View } from "../Components/currentView";
import ImageTwilight from "../Components/ImageTwilight";

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
      <div>
        <ImageTwilight />
      </div>
    </div>
  );
};

export default SetsView;
