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
        throw new Error('Unknown view');
    }
  };

  return (
    <CurrentView toggleNode={toggleNode} handleToggle={handleToggle} view={view} handleView={handleView}></CurrentView>
  );
};

export default App;
