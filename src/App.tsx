import CurrentView from "./Components/currentView";
import { useState, createContext } from "react";
import { View } from "./Components/currentView";

interface CredentialsType {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export const CredentialsContext = createContext<CredentialsType>({
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},
});

interface CredentialsProps {
  children: React.ReactNode;
}

export const CredentialsProvider = ({ children }: CredentialsProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const updateUsername = (username: string) => setUsername(username);
  const updatePassword = (password: string) => setPassword(password);

  return (
    <CredentialsContext.Provider
      value={{
        username,
        setUsername: updateUsername,
        password,
        setPassword: updatePassword,
      }}
    >
      {children}
    </CredentialsContext.Provider>
  );
};

const App = () => {
  const [toggleNode, setToggleNode] = useState(1);
  const handleToggle = () => {
    setToggleNode((prev) => (prev === 1 ? 2 : 1));
  };
  const [view, setView] = useState<View>("home");
  const handleView = (view: View) => {
    switch (view) {
      case "home":
        setView("home");
        break;
      case "sets":
        setView("sets");
        break;
      case "my sets":
        setView("my sets");
        break;
      case "login":
        setView("login");
        break;
      default:
        throw new Error("Unknown view");
    }
  };

  return (
    <CredentialsProvider>
      <CurrentView
        toggleNode={toggleNode}
        handleToggle={handleToggle}
        view={view}
        handleView={handleView}
      ></CurrentView>
    </CredentialsProvider>
  );
};

export default App;
