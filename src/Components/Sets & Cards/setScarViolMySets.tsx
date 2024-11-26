import React, { useState, useEffect } from "react";
import SetItemMySet from "../setItemMySet";
import { View } from "../currentView";

interface CardProps {
    toggleNode: number;
    handleToggle: () => void;
    handleView: (action: View) => void;
}

interface Set {
    setId: number;
    setName: string;
    setGroup: string;
    setPath: string;
    progress: number;
  }

const CardScarViolMySets: React.FC<CardProps> = ({handleView}) => {

    const [sets, setSets] = useState<Set[]>([]);

    const username = localStorage.getItem("username")

    useEffect(() => {
        if (username) {
            fetch(`http://localhost:8080/get_all_mySets?username=${encodeURIComponent(username)}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => setSets(data))
                .catch((error) => console.error("Error fetching sets:", error));
        } else {
            console.error("Username not found.");
        }
    }, [username]);

    return (
        <div className="set">
            {sets
                .filter((set) => set.setGroup === "Scarlet & Violet")
                .sort((a, b) => a.setId - b.setId)
                .map((set) => (
                <SetItemMySet
                    key={set.setId}
                    image={`/src/assets/Elites/${set.setPath}`}
                    name={set.setName}
                    collected= {set.progress}
                    id={set.setId}
                    handleView={handleView}
                />
            ))}
        </div>
    );
};

export default CardScarViolMySets;
