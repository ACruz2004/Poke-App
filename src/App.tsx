// App
import MakeHeadVid from "./Components/bgvid";
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
    </div>
  );
};

export default App;
