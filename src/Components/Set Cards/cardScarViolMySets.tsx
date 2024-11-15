import React, { useState, useEffect } from "react";
import CardItem from "../cardItem";

interface CardProps {
    toggleNode: number;
    handleToggle: () => void;
}

const CardScarViolMySets: React.FC<CardProps> = () => {

    const [sets, setSets] = useState([]);

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
        <div className="card">
            {sets.map((set) => (
                <CardItem
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

export default CardScarViolMySets;
