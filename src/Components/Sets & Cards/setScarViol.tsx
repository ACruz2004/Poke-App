import React, { useState, useEffect } from "react";
import SetItem from "../setItem";

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
    <div className="set">
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
  );
};

export default SetScarViol;
