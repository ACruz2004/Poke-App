import { Parallax } from "react-parallax";
import Twilight from "./assets/Twilight/TwilightmasBGIMG.jpeg";
import Logo from "./assets/Twilight/TwilightMasLogo.png";
const ImageTwilight = () => (
  <Parallax className="Pimage" bgImage={Twilight} strength={200}>
    <div className="Plogo">
      <img src={Logo} alt="" />
    </div>
  </Parallax>
);

export default ImageTwilight;
