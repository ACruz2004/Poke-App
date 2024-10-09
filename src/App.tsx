// App
import MakeHeadVid from "./Components/bgvid";
import MakeBody from "./Components/body";
import MakeHead from "./Components/navBar";
import { useState } from "react";

const App = () => {
  const [toggleNode, setToggleNode] = useState(1);
  const handleToggle = () => {
    setToggleNode((prev) => (prev === 1 ? 2 : 1));
  };
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
    </div>
  );
};

export default App;
