// Header
import logo from "../assets/pokeBall.png";
import makeNight from "../assets/day.png";
import makeDay from "../assets/night.png";
import React from "react";
import currentView, { setViewNumber } from "./currentView";

interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}

const MakeHead: React.FC<MakeHeadProps> = ({ toggleNode, handleToggle }) => {
  const onClickHandler = (id: number) => () => {
    setViewNumber(id);
  };

  return (
    <div className={toggleNode == 1 ? "nav" : "navDark"}>
      <img src={logo} alt="" className="logo" />
      <h1 className={toggleNode == 1 ? "logoText" : "logoTextDark"}>
        PokéTrove
      </h1>
      <ul>
        <li
          className={toggleNode == 1 ? "light" : "dark "}
          onClick={onClickHandler(1)}
        >
          Home
        </li>
        <li
          className={toggleNode == 1 ? "light" : "dark "}
          onClick={onClickHandler(2)}
        >
          Sets
        </li>
        <li
          className={toggleNode == 1 ? "light" : "dark "}
          onClick={onClickHandler(3)}
        >
          My Sets
        </li>
        <li
          className={toggleNode == 1 ? "light" : "dark "}
          onClick={onClickHandler(4)}
        >
          About
        </li>
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
