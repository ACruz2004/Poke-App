import React from "react";
import MakeHead from "../Components/navBar";
import { View } from "../Components/currentView";

interface ModeProps {
    toggleNode: number;
    handleToggle: () => void;
    handleView: (id: View) => void;
}

const AboutView: React.FC<ModeProps> = ({ toggleNode, handleToggle, handleView }) => {
    return (
        <div>
        <div className={"container"}>
            <MakeHead toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView} />
        </div>
        <div>
            <h1>Quit slacking Anthony3!</h1>
        </div>
    </div>
    );
}

export default AboutView;