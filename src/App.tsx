// App

import MakeHeadVid from "./Components/bgvid";
import MakeHead from "./Components/navBar";

function App() {
  return (
    <div>
      <div className="container">
        <MakeHead />
      </div>
      <MakeHeadVid />
    </div>
  );
}

export default App;
