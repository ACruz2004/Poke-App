import { Parallax } from "react-parallax";
import Stellar from "./assets/Stellar/StellarCrownBGIMG.jpeg";
import Logo from "./assets/Stellar/StellarCrownLogo.png";

const ImageStellar = () => (
  <Parallax className="Pimage" bgImage={Stellar} strength={200}>
    <div className="Plogo">
      <img src={Logo} alt="" />
    </div>
  </Parallax>
);

export default ImageStellar;
