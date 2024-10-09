import videobg from "../assets/PokeballVid.mp4";
import { Parallax } from "react-parallax";

const MakeHeadVid = () => {
  return (
    <div className="main">
      <video src={videobg} autoPlay loop muted playsInline />
      <div className="text">
        <Parallax>
          <h1>Welcome</h1>
          <p>To PokéTrove!</p>
        </Parallax>
      </div>
    </div>
  );
};

export default MakeHeadVid;
