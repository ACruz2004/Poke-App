// App
// import MakeHeadVid from "./Components/bgvid";
// import MakeBody from "./Components/body";
// import MakeHead from "./Components/navBar";
// import MakeGround from "./Components/ground";
// import ImageStellar from "./ImageStellar";
// import ImageShroud from "./ImageShrouded";
// import ImageTwilight from "./ImageTwilight";
import CurrentView from "./Components/currentView";
import { useState } from "react";
import { View } from "./Components/currentView";

const App = () => {
  const [toggleNode, setToggleNode] = useState(1);
  const handleToggle = () => {
    setToggleNode((prev) => (prev === 1 ? 2 : 1));
  };
  const [view, setView] = useState<View>('home');
  const handleView = (view: View) => {
    switch (view) {
      case 'home':
        setView('home');
        break;
      case 'sets':
        setView('sets');
        break;
      case 'my sets':
        setView('my sets');
        break;
      case 'about':
        setView('about');
        break;
      default:
        throw new Error('Unknown action');
    }
  };

  return (
    // <div>
    //   <div className={"container"}>
    //     <MakeHead toggleNode={toggleNode} handleToggle={handleToggle} />
    //   </div>
    //   <div className="bgVid">
    //     <MakeHeadVid />
    //   </div>
    //   <div className="bodyCont">
    //     <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
    //   </div>
    //   <div>
    //     <ImageStellar />
    //   </div>
    //   <div className="bodyCont">
    //     <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
    //   </div>
    //   <div>
    //     <ImageShroud />
    //   </div>
    //   <div className="bodyCont">
    //     <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
    //   </div>
    //   <div>
    //     <ImageTwilight />
    //   </div>
    //   <div className="bodyCont">
    //     <MakeGround toggleNode={toggleNode} handleToggle={handleToggle} />
    //   </div>
    // </div>
    <CurrentView toggleNode={toggleNode} handleToggle={handleToggle} view={view} handleView={handleView}></CurrentView>
  );
};

export default App;
