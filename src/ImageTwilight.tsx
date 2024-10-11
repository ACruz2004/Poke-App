import { Parallax } from "react-parallax";
import Twilight from "./assets/Twilight/TwilightmasBGIMG.jpeg";
import Logo from "./assets/Twilight/TwilightMasLogo.png";
import card1 from "./assets/Twilight/TwilightMasCard1.png";
import card2 from "./assets/Twilight/TwilightMasCard2.png";
import card4 from "./assets/Twilight/TwilightMasCard3.png";
import card3 from "./assets/Twilight/TwilightMasEevee.png";

const ImageTwilight = () => (
  <Parallax className="Pimage" bgImage={Twilight} strength={200}>
    <div className="Plogo">
      <img src={Logo} alt="" />
    </div>
    <div className="Pcard1">
      <img src={card1} alt="" />
    </div>
    <div className="Pcard2">
      <img src={card2} alt="" />
    </div>
    <div className="Pcard4">
      <img src={card4} alt="" />
    </div>
    <div className="Pcard3">
      <img src={card3} alt="" />
    </div>
  </Parallax>
);

export default ImageTwilight;
