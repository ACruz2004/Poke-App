import { Parallax } from "react-parallax";
import Shrouded from "./assets/Shrouded/ShroudedFableBGIMG.png";

const ImageShroud = () => (
  <Parallax className="Pimage" bgImage={Shrouded} strength={200}></Parallax>
);

export default ImageShroud;
