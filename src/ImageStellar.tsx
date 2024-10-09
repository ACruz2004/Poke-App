import { Parallax } from "react-parallax";
import Stellar from "./assets/Stellar/StellarCrownBGIMG.png";

const ImageStellar = () => (
  <Parallax className="Pimage" bgImage={Stellar} strength={800}>
    <div className="content">
      <span className="img-txt">Text Shit</span>
    </div>
  </Parallax>
);

export default ImageStellar;
