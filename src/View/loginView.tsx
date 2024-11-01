import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import MakeHead from "../Components/navBar";
import videobg from "../assets/4K_3.mp4";
import { View } from "../Components/currentView";

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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/crud")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="bgVidLog">
      <video ref={videoRef} src={videobg} autoPlay loop muted playsInline />
      <div className={"container"}>
        <MakeHead
          toggleNode={toggleNode}
          handleToggle={handleToggle}
          handleView={handleView}
        />
      </div>
      <div className={"inputContainer"}>
        <h1 className={"logoTextLog"}>PokéTrove</h1>
        <form>
          <input
            value={username}
            placeholder="Username"
            onChange={(ev) => setUsername(ev.target.value)}
            className={"inputBox"}
          />
        </form>
        <form>
          <input
            value={password}
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
        </form>
        <button className="inputButton">Log In</button>
      </div>
    </div>
  );
};

export default LoginView;
