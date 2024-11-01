import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import MakeHead from "../Components/navBar";
import videobg from "../assets/4K_3.mp4";
import { View } from "../Components/currentView";
import MakeBody from "../Components/body";
import Hash from "../Data/encryptor";
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
            // { username: hashedName, password: hashedPassword }
            const response = await axios.post('http://localhost:8080/add-data', { username: hashedName, password: hashedPassword });
            // alert(response.data);
            setUsername('');
            setPassword('');
            console.log(response);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

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
        <button className="inputButton" onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
};

export default LoginView;
