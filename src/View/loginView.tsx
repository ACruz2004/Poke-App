import React, { useState, useRef, useContext } from "react";
import MakeHead from "../Components/navBar";
import videobg from "../assets/4K_3.mp4";
import Hash from "../Data/encryptor";
import { View } from "../Components/currentView";
import axios from "axios";
import { CredentialsContext } from "../App";

interface ModeProps {
  toggleNode: number;
  handleToggle: () => void;
  handleView: (id: View) => void;
}

interface DataProps {
  loginState: string;
  setLoginState: (state: string) => void;
  error: string;
  setError: (error: string) => void
}

const LogInView: React.FC<DataProps> = ({loginState, setLoginState, error, setError}) => {
  const { username, setUsername, password, setPassword } = useContext(CredentialsContext)

  const handleSubmit = async () => {
    setError("")

    if (!username || !password) {
      setError("Please fill in all of the forms")
      return
    }

    else {
      try {
        const response = await axios.post("http://localhost:8080/login", {
          username: username,
          password: Hash(password).toString(),
        });
        setUsername("");
        setPassword("");
        console.log(response);
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <div className="inputContainer">
      <div>
        <h1 className="logoTextLog">PokéTrove</h1>
        {error && <span className="errorText">{error}</span>}
      </div>
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
        <button className="inputButtonCreate" onClick={() => setLoginState('signup')}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

const SignUpView: React.FC<DataProps> = ({loginState, setLoginState, error, setError}) => {
  const { username, setUsername, password, setPassword } = useContext(CredentialsContext)
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const handleSubmit = async () => {
    setError("")

    if (!username || !password) {
      setError("Please fill in all of the forms")
      return
    }

    else if (confirmPassword != password) {
      setError("The passwords do not match")
      return
    }

    else {
      try {
        const response = await axios.post("http://localhost:8080/signup", {
          username: username,
          password: Hash(password).toString(),
        });
        setUsername("");
        setPassword("");
        console.log(response);
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <div className="inputContainer">
      <h1 className="logoTextLog">PokéTrove</h1>
      {error && <span className="errorText">{error}</span>}
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
        <div className="logText">Confirm Password</div>
        <form>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            className="inputBoxPass"
          />
        </form>
        <button className="inputButton" onClick={handleSubmit}>
          Sign Up
        </button>
        <div className="logTextMid">Already Have An Account?</div>
        <button className="inputButtonCreate" onClick={() => setLoginState('login')}>
          Log In
        </button>
      </div>
    </div>
  );
}

function ViewManager({ loginState, setLoginState, error, setError }: DataProps) {
  switch(loginState) {
    case 'login':
      return <LogInView loginState={loginState} setLoginState={setLoginState} error={error} setError={setError}/>
    case 'signup':
      return <SignUpView loginState={loginState} setLoginState={setLoginState} error={error} setError={setError}/>
    default:
      return <div> No View Selected </div>
  }
}

const LoginView: React.FC<ModeProps> = ({
  toggleNode,
  handleToggle,
  handleView,
}) => {
  const [loginState, setLoginState] = useState<string>('login');
  const [error, setError] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);

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
      <ViewManager loginState={loginState} setLoginState={setLoginState} error={error} setError={setError}/>
    </div>
  );
};

export default LoginView;
