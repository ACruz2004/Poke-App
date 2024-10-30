import React from "react";
import CardItem from "./cardItem";
import SCImage from "../assets/Cards/SC.jpeg";
import TMImage from "../assets/Cards/TM.jpg";
import SFImage from "../assets/Cards/SF.jpeg";
import TFImage from "../assets/Cards/TF.png";

const Card = () => {
  return (
    <div className="card">
      <CardItem
        image={SCImage}
        name="Stellar Crown"
        collected="0/175 (Progress Bar)"
      />
      <CardItem
        image={SFImage}
        name="Shrouded Fable"
        collected="0/99 (Progress Bar)"
      />
      <CardItem
        image={TMImage}
        name="Twilight Masqerade"
        collected="0/226 (Progress Bar)"
      />
      <CardItem
        image={TFImage}
        name="Temporal Forces"
        collected="0/218 (Progress Bar)"
      />
    </div>
  );
};

export default Card;
