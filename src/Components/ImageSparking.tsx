// For Twilght
import { Parallax } from "react-parallax";
import Sparking from "../assets/Surging/Surging SparksBG.png";
import Logo from "../assets/Surging/SSLogo.png";
import card1 from "../assets/Surging/SSCard6.png";
import card2 from "../assets/Surging/SSCard4.png";
import card4 from "../assets/Surging/SSCard3.png";
import card3 from "../assets/Surging/SSCard2.png";

const ImageSparking = () => (
  <Parallax className="Pimage" bgImage={Sparking} strength={200}>
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

export default ImageSparking;
