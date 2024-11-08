import React from "react";
import CardItem from "./cardItem";
import CardItemNew from "./cardItemNew";
import SCImage from "../assets/Elites/SCETB.jpg";
import TMImage from "../assets/Elites/TMETB.jpg";
import SFImage from "../assets/Elites/SFETB.jpg";
import TFImage from "../assets/Elites/TFETB.jpg";
import SSImage from "../assets/Elites/SSETB.jpeg";
import PFImage from "../assets/Elites/PFETB.jpg";
import PRImage from "../assets/Elites/PRETB2.jpeg";
import OFOImage from "../assets/Elites/151ETB.jpg";

const Card = () => {
  return (
    <div className="card">
      <CardItemNew
        image={SSImage}
        name="Surging Sparks"
        collected="0/250 (Progress Bar)"
      />
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
      <CardItem
        image={PFImage}
        name="Paldean Fates"
        collected="0/245 (Progress Bar)"
      />
      <CardItem
        image={PRImage}
        name="Paradox Rift"
        collected="0/266 (Progress Bar)"
      />
      <CardItem image={OFOImage} name="151" collected="0/210 (Progress Bar)" />
    </div>
  );
};

export default Card;
