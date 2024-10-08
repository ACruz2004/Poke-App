// App

import MakeHeadVid from "./Components/bgvid";
import MakeHead from "./Components/navBar";

function App() {
  return (
    <div>
      <div className="container">
        <MakeHead />
      </div>
      <div className="bgVid">
        <MakeHeadVid />
      </div>
    </div>
  );
}

export default App;
