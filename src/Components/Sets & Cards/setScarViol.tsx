import React, { useState, useEffect } from "react";
import SetItem from "../setItem";
import SetItemNew from "../setItemNew";
import SCImage from "../../assets/Elites/SCETB.jpg";
import TMImage from "../../assets/Elites/TMETB.jpg";
import SFImage from "../../assets/Elites/SFETB.jpg";
import TFImage from "../../assets/Elites/TFETB.jpg";
import TFDImage from "../../assets/Elites/TFETBD.jpg";
import SSImage from "../../assets/Elites/SSETB.jpeg";
import PFImage from "../../assets/Elites/PFETB.jpg";
import PRDImage from "../../assets/Elites/PRETB2.jpeg";
import PRImage from "../../assets/Elites/PRETBD.jpg";
import OFOImage from "../../assets/Elites/151ETB.jpg";
import OFImage from "../../assets/Elites/OFETB.jpg";
import PEImage from "../../assets/Elites/PEETB.jpg";
import SVImage from "../../assets/Elites/S&VETB.jpg";
import SVDImage from "../../assets/Elites/S&VETBD.jpg";

interface CardProps {
  toggleNode: number;
  handleToggle: () => void;
}

const SetScarViol: React.FC<CardProps> = ({ toggleNode }) => {

  const [sets, setSets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/get_all_sets")
      .then((response) => response.json())
      .then((data) => setSets(data))
      .catch((error) => console.error("Error fetching sets:", error));
  }, []);


  return (
    <div className="card">
        {sets
            .filter((set) => set.setGroup === "Scarlet & Violet")
            .map((set) => (
            <SetItem
                key={set.setId}
                image={`/src/assets/Elites/${set.setPath}`}
                name={set.setName}
                collected= {set.progress}
                id={set.setId}
            />
        ))}
    </div>
    // <div className="card">
    //   <CardItemNew
    //     image={SSImage}
    //     name="Surging Sparks"
    //     collected="0/250 (Progress Bar)"
    //   />
    //   <CardItem
    //     image={SCImage}
    //     name="Stellar Crown"
    //     collected="0/175 (Progress Bar)"
    //   />
    //   <CardItem
    //     image={SFImage}
    //     name="Shrouded Fable"
    //     collected="0/99 (Progress Bar)"
    //   />
    //   <CardItem
    //     image={TMImage}
    //     name="Twilight Masquerade"
    //     collected="0/226 (Progress Bar)"
    //   />
    //   <CardItem
    //     image={toggleNode === 1 ? TFImage : TFDImage}
    //     name="Temporal Forces"
    //     collected="0/218 (Progress Bar)"
    //   />
    //   <CardItem
    //     image={PFImage}
    //     name="Paldean Fates"
    //     collected="0/245 (Progress Bar)"
    //   />
    //   <CardItem
    //     image={toggleNode === 1 ? PRImage : PRDImage}
    //     name="Paradox Rift"
    //     collected="0/266 (Progress Bar)"
    //   />
    //   <CardItem image={OFOImage} name="151" collected="0/210 (Progress Bar)" />
    //   <CardItem
    //     image={OFImage}
    //     name="Obsidian Flames"
    //     collected="0/230 (Progress Bar)"
    //   />
    //   <CardItem
    //     image={PEImage}
    //     name="Paldea Evolved"
    //     collected="0/279 (Progress Bar)"
    //   />
    //   <CardItem
    //     image={toggleNode === 1 ? SVImage : SVDImage}
    //     name="Scarlet & Violet"
    //     collected="0/258 (Progress Bar)"
    //   />
    // </div>
  );
};

export default SetScarViol;