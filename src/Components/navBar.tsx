// Header
import logo from "../assets/pokeBall.png";
import makeNight from "../assets/day.png";
import makeDay from "../assets/night.png";
import searchLight from "../assets/search-b.png";
import searchDark from "../assets/search-w.png";
import React, { act } from "react";
import { View } from "./currentView";

interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}

interface ViewProps {
  handleView: (action: View) => void;
}

const MakeHead: React.FC<MakeHeadProps & ViewProps> = ({ toggleNode, handleToggle, handleView }) => {
  const handleViewChange = (action: View) => () => {
    handleView(action);
  }

  return (
    <div className={toggleNode == 1 ? "nav" : "navDark"}>
      <img src={logo} alt="" className="logo" />
      <h1 className={toggleNode == 1 ? "logoText" : "logoTextDark"}>
        PokéTrove
      </h1>
      <ul>
        <li className={toggleNode == 1 ? "light" : "dark "} onClick={() => handleView('home')}>Home</li>
        <li className={toggleNode == 1 ? "light" : "dark "} onClick={() => handleView('sets')}>Sets</li>
        <li className={toggleNode == 1 ? "light" : "dark "} onClick={() => handleView('my sets')}>My Sets</li>
        <li className={toggleNode == 1 ? "light" : "dark "} onClick={() => handleView('about')}>About</li>
      </ul>
      <img
        onClick={handleToggle}
        src={toggleNode == 1 ? makeDay : makeNight}
        alt="toggle icon"
        className="toggleIcon"
      />
    </div>
  );
};

export default MakeHead;
