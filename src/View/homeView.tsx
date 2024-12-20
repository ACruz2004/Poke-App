import MakeHead from "../Components/navBar";
import MakeHeadVid from "../Background Vids/bgvid";
import MakeBody from "../Components/body";
import MakeGround from "../Components/ground";
import ImageShroud from "../Parallax Images/ImageShrouded";
import ImageStellar from "../Parallax Images/ImageStellar";
import ImageTwilight from "../Parallax Images/ImageTwilight";
import React from "react";
import { View } from "../Components/currentView";
import ImageSparking from "../Parallax Images/ImageSparking";

interface ModeProps {
  toggleNode: number;
  handleToggle: () => void;
  handleView: (id: View) => void;
}

const HomeView: React.FC<ModeProps> = ({
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
        <MakeHeadVid />
      </div>
      <div className="bodyCont">
        <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
      </div>
      <div>
        <ImageSparking />
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
};

export default HomeView;
