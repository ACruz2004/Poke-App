import React, { useState, useEffect } from "react";
import MakeHead from "../Components/navBar";
import { View } from "../Components/currentView";

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
            <table>
                <thead>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.Name}</td>
                            <td>{d.Gender}</td>
                            <td>{d.Phone}</td>
                            <td>{d.Address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LoginView;