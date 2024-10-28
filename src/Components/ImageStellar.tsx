import { Parallax } from "react-parallax";
import Stellar from "../assets/Stellar/StellarCrownBGIMG.jpeg";
import Logo from "../assets/Stellar/StellarCrownLogo.png";
import card1 from "../assets/Stellar/StellarCrownPackB.png";
import card2 from "../assets/Stellar/StellarCrownPackL.png";

// This is gonna be a pack display not a card one
const ImageStellar = () => (
  <Parallax className="Pimage" bgImage={Stellar} strength={200}>
    <div className="Plogo">
      <img src={Logo} alt="" />
    </div>
    <div className="Ppack1">
      <img src={card1} alt="" />
    </div>
    <div className="Ppack2">
      <img src={card2} alt="" />
    </div>
  </Parallax>
);

export default ImageStellar;
