import React, { useState, useEffect } from "react";
import MakeHead from "../Components/navBar";
import { View } from "../Components/currentView";
import MakeBody from "../Components/body";

interface ModeProps {
    toggleNode: number;
    handleToggle: () => void;
    handleView: (id: View) => void;
}

const LoginView: React.FC<ModeProps> = ({ toggleNode, handleToggle, handleView }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/crud')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className={"container"}>
                <MakeHead toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView} />
            </div>
            <div className="bodyCont">
                <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
            </div>
            <div>
                <input
                    value="username"
                    placeholder="Enter your username here"
                />
            </div>
        </div>
    );
}

export default LoginView;