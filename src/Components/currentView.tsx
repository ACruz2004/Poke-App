import MakeHead from "./navBar";
import MakeBody from "./body";
import MakeGround from "./ground";
import MakeHeadVid from "./bgvid";
import ImageShroud from "../ImageShrouded";
import ImageStellar from "../ImageStellar";
import ImageTwilight from "../ImageTwilight";
import React from "react";
import { useState } from "react";

interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}

const [viewNumber, setView] = useState(1);
const handleView = (id: number) => {
  setView((prev) => (prev = id));
};

export function setViewNumber(viewArg: number) {
  handleView(viewArg);
}

function currentView(toggleNode: number, handleToggle: () => void) {
  switch (viewNumber) {
    case 1:
      return (
        <div>
          <div className={"container"}>
            <MakeHead toggleNode={toggleNode} handleToggle={handleToggle} />
          </div>
          <div className="bgVid">
            <MakeHeadVid />
          </div>
          <div className="bodyCont">
            <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
          </div>
          <div>
            <ImageStellar />
          </div>
          <div className="bodyCont">
            <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
          </div>
          <div>
            <ImageShroud />
          </div>
          <div className="bodyCont">
            <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
          </div>
          <div>
            <ImageTwilight />
          </div>
          <div className="bodyCont">
            <MakeGround toggleNode={toggleNode} handleToggle={handleToggle} />
          </div>
        </div>
      );

    case 2:
      return (
        <div>
          <h1>Quit slacking Anthony!</h1>
        </div>
      );

    case 3:
      return (
        <div>
          <h1>Quit slacking Anthony!</h1>
        </div>
      );

    case 4:
      return (
        <div>
          <h1>Quit slacking Anthony!</h1>
        </div>
      );
  }
}

const CurrentView: React.FC<MakeHeadProps> = ({ toggleNode, handleToggle }) => {
  return <div>{currentView(toggleNode, handleToggle)}</div>;
};

export default CurrentView;
