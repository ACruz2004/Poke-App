// For Stellar
import { Parallax } from "react-parallax";
import Stellar from "../assets/Stellar/StellarCrownBGIMG.jpeg";
import Logo from "../assets/Stellar/StellarCrownLogo.png";
import card1 from "../assets/Stellar/stellarCrownCard1.png";
import card2 from "../assets/Stellar/stellarCrownCard2.png";
import card3 from "../assets/Stellar/stellarCrownCard3.png";

// This is gonna be a pack display not a card one jk I lied the cards
const ImageStellar = () => (
  <Parallax className="Pimage" bgImage={Stellar} strength={200}>
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

export default ImageStellar;
