import React, { useState, useRef } from "react";
import MakeHead from "../Components/navBar";
import videobg from "../assets/4K_3.mp4";
import Hash from "../Data/encryptor";
import { View } from "../Components/currentView";
import axios from "axios";

interface ModeProps {
  toggleNode: number;
  handleToggle: () => void;
  handleView: (id: View) => void;
}

const LoginView: React.FC<ModeProps> = ({
  toggleNode,
  handleToggle,
  handleView,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    const hashedName = Hash(username).toString();
    const hashedPassword = Hash(password).toString();

    try {
      const response = await axios.post("http://localhost:8080/add-data", {
        username: hashedName,
        password: hashedPassword,
      });
      setUsername("");
      setPassword("");
      console.log(response);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="bgVidLog">
      <video ref={videoRef} src={videobg} autoPlay loop muted playsInline />
      <div className="container">
        <MakeHead
          toggleNode={toggleNode}
          handleToggle={handleToggle}
          handleView={handleView}
        />
      </div>
      <div className="inputContainer">
        <h1 className="logoTextLog">PokéTrove</h1>
        <div className="inputGroup">
          <div className="logText">Username</div>
          <form>
            <input
              value={username}
              placeholder="Username"
              onChange={(ev) => setUsername(ev.target.value)}
              className="inputBoxUser"
            />
          </form>
          <div className="logText">Password</div>
          <form>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}
              className="inputBoxPass"
            />
          </form>
          <button className="inputButton" onClick={handleSubmit}>
            Log In
          </button>
          <div className="logTextMid">Don't Have An Account?</div>
          <button className="inputButtonCreate" onClick={handleSubmit}>
            Create An Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
