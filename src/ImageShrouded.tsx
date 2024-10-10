import { Parallax } from "react-parallax";
import Shrouded from "./assets/Shrouded/ShroudedFableBGIMG.jpeg";
import Logo from "./assets/Shrouded/ShroudedFableLogo.png";

const ImageShroud = () => (
  <Parallax className="Pimage" bgImage={Shrouded} strength={200}>
    <div className="Plogo">
      <img src={Logo} alt="" />
    </div>
  </Parallax>
);

export default ImageShroud;
