// App
import MakeHeadVid from "./Components/bgvid";
import MakeBody from "./Components/body";
import MakeHead from "./Components/navBar";

const App = () => {
  return (
    <div>
      <div className={"container"}>
        <MakeHead />
      </div>
      <div className="bgVid">
        <MakeHeadVid />
      </div>
      <div className="bodyCont">
        <MakeBody />
      </div>
    </div>
  );
};

export default App;
