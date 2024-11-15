// Header
import logo from "../assets/pokeBallNew.png";
import logoDark from "../assets/PokeBallNewD.png";
import React, { useState, useEffect } from "react";
import { View } from "./currentView";

interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}

interface ViewProps {
  handleView: (action: View) => void;
}

const UserIcon: React.FC<{ toggleNode: number }> = ({ toggleNode }) => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleLogout = () => {
    localStorage.setItem("isLogged", "false");
    localStorage.removeItem("username");

    setIsLogged(false);
    setUsername(null);

    window.location.reload();
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
        <span
          className={toggleNode === 1 ? "userIcon" : "userIconDark"}
          onClick={handleLogout}
        >
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
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );
  return (
    <div className={toggleNode === 1 ? "nav" : "navDark"}>
      <img
        onClick={handleToggle}
        src={toggleNode === 1 ? logo : logoDark}
        alt="Logo"
        className="logo"
      />
      <h1 className={toggleNode === 1 ? "logoText" : "logoTextDark"}>
        PokéTrove
      </h1>
      <ul>
        <li
          className={toggleNode === 1 ? "light" : "dark"}
          onClick={() => handleView("home")}
        >
          Home
        </li>
        <li
          className={toggleNode === 1 ? "light" : "dark"}
          onClick={() => handleView("sets")}
        >
          Sets
        </li>
        {isLogged && (
          <li
            className={toggleNode === 1 ? "light" : "dark"}
            onClick={() => handleView("my sets")}
          >
            My Sets
          </li>
        )}
        <li
          className={toggleNode === 1 ? "light" : "dark"}
          onClick={() => handleView("login")}
        >
          Log In
        </li>
      </ul>
      <UserIcon toggleNode={toggleNode} />
    </div>
  );
};

export default MakeHead;
