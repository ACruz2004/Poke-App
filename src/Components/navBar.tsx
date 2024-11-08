// Header
import logo from "../assets/pokeBallNew.png";
import makeNight from "../assets/day.png";
import makeDay from "../assets/night.png";
import React from "react";
import { View } from "./currentView";
import { useState, useEffect } from "react";

interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}

interface ViewProps {
  handleView: (action: View) => void;
}

interface LoggingInfoProps {
  isLogged: string;
  setIsLogged: () => void;
  username: string;
  setUsername: () => void;
}

const UserIcon = () => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") === "true");
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleLogout = () => {
    localStorage.setItem("isLogged", "false");
    localStorage.removeItem("username");

    setIsLogged(false);
    setUsername(null);

    window.location.reload()
  };

  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    const storedUsername = localStorage.getItem("username");

    if (storedIsLogged === "true") {
      setIsLogged(true);
      setUsername(storedUsername);
    }
  }, []);

  return (
    <>
      {isLogged && username && (
        <span className="userIcon" onClick={handleLogout}>
          {username}
        </span>
      )}
    </>
  );
};

const MakeHead: React.FC<MakeHeadProps & ViewProps> = ({
  toggleNode,
  handleToggle,
  handleView,
}) => {
  return (
    <div className={toggleNode == 1 ? "nav" : "navDark"}>
      <img src={logo} alt="" className="logo" />
      <h1 className={toggleNode == 1 ? "logoText" : "logoTextDark"}>
        PokéTrove
      </h1>
      <ul>
        <li
          className={toggleNode == 1 ? "light" : "dark "}
          onClick={() => handleView("home")}
        >
          Home
        </li>
        <li
          className={toggleNode == 1 ? "light" : "dark "}
          onClick={() => handleView("sets")}
        >
          Sets
        </li>
        <li
          className={toggleNode == 1 ? "light" : "dark "}
          onClick={() => handleView("my sets")}
        >
          My Sets
        </li>
        <li
          className={toggleNode == 1 ? "light" : "dark "}
          onClick={() => handleView("login")}
        >
          Log In
        </li>
      </ul>
      <UserIcon/>
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
