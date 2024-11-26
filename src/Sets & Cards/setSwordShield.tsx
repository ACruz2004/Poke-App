import React, { useState } from "react";
import SetItem from ".././Set & Card Items/setItem";
import CZImage from "../../assets/Elites/CZETB.jpg";

interface CardProps {
  toggleNode: number;
  handleToggle: () => void;
}

const CardSwordShield: React.FC<CardProps> = ({ toggleNode }) => {
  return (
    <div className="card">
      <SetItem
        image={CZImage}
        name="Crown Zenith"
        collected="0/230 (Progress Bar)"
      />
    </div>
  );
};

export default CardSwordShield;
