import { Parallax } from "react-parallax";
import Shrouded from "./assets/Shrouded/ShroudedFableBGIMG.jpeg";
import Logo from "./assets/Shrouded/ShroudedFableLogo.png";
import card1 from "./assets/Shrouded/ShroudedFableCard1.png";
import card2 from "./assets/Shrouded/ShroudedFableCard2.png";
import card3 from "./assets/Shrouded/ShroudedFableOkidogi.png";

const ImageShroud = () => (
  <Parallax className="Pimage" bgImage={Shrouded} strength={200}>
    <div className="Plogo">
      <img src={Logo} alt="" />
    </div>
    <div className="Pcard1">
      <img src={card1} alt="" />
    </div>
    <div className="Pcard2">
      <img src={card2} alt="" />
    </div>
    <div className="Pcard3">
      <img src={card3} alt="" />
    </div>
  </Parallax>
);

export default ImageShroud;
