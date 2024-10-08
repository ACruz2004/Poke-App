// Header
import logo from "../assets/pokeBall.png";
import makeNight from "../assets/day.png";
import makeDay from "../assets/night.png";
import searchLight from "../assets/search-b.png";
import searchDark from "../assets/search-w.png";

const MakeHead = () => {
  return (
    <div className="nav">
      <img src={logo} alt="" className="logo" />
      <h1 className="logoText">PokéTrove</h1>
      <ul>
        <li>Home</li>
        <li>Sets</li>
        <li>My Sets</li>
        <li>About</li>
      </ul>

      <img src={makeDay} alt="" className="toggleIcon" />
    </div>
  );
};

export default MakeHead;
