import { Parallax } from "react-parallax";
import Shrouded from "./assets/Shrouded/ShroudedFableBGIMG.jpeg";

const ImageShroud = () => (
  <Parallax className="Pimage" bgImage={Shrouded} strength={200}></Parallax>
);

export default ImageShroud;
