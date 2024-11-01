import React, { useState, useEffect, ChangeEvent } from "react";
import MakeHead from "../Components/navBar";
import { View } from "../Components/currentView";
import MakeBody from "../Components/body";
import Hash from "../Data/encryptor";
import axios from "axios";

interface ModeProps {
    toggleNode: number;
    handleToggle: () => void;
    handleView: (id: View) => void;
}

const LoginView: React.FC<ModeProps> = ({ toggleNode, handleToggle, handleView }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        const hashedName = Hash(username).toString();
        const hashedPassword = Hash(password).toString();

        try {
            // { username: hashedName, password: hashedPassword }
            const response = await axios.post('http://localhost:8080/add-data', { username: hashedName, password: hashedPassword });
            // alert(response.data);
            setUsername('');
            setPassword('');
            console.log(response);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div>
            <div className={"container"}>
                <MakeHead toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView} />
            </div>
            <div className="bodyCont">
                <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
            </div>
                <div className={"inputContainer"}>
                    <form>
                        <input
                            value={username}
                            placeholder="Enter your username here"
                            onChange={(ev) => setUsername(ev.target.value)}
                            className={"inputBox"}
                        />
                    </form>
                </div>
                <div className={"inputContainer"}>
                    <form>
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className={"inputBox"}
                        />
                    </form>
                </div>
                <div className={'inputContainer'}>
                    <button className="inputButton" onClick={handleSubmit}>Log In</button>
                </div>
        </div>
    );
}

export default LoginView;