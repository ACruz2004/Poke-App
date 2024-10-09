// Header
import logo from "../assets/pokeBall.png";
import makeNight from "../assets/day.png";
import makeDay from "../assets/night.png";
import searchLight from "../assets/search-b.png";
import searchDark from "../assets/search-w.png";

interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}
const MakeHead: React.FC<MakeHeadProps> = ({ toggleNode, handleToggle }) => {
  return (
    <div className={toggleNode == 1 ? "nav" : "navDark"}>
      <img src={logo} alt="" className="logo" />
      <h1 className={toggleNode == 1 ? "logoText" : "logoTextDark"}>
        PokéTrove
      </h1>
      <ul>
        <li className={toggleNode == 1 ? "light" : "dark "}> Home</li>
        <li className={toggleNode == 1 ? "light" : "dark "}>Sets</li>
        <li className={toggleNode == 1 ? "light" : "dark "}>My Sets</li>
        <li className={toggleNode == 1 ? "light" : "dark "}>About</li>
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
