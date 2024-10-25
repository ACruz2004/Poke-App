import MakeHead from "./navBar";
import MakeBody from "./body";
import MakeGround from "./ground";
import MakeHeadVid from "./bgvid";
import ImageShroud from "../ImageShrouded";
import ImageStellar from "../ImageStellar";
import ImageTwilight from "../ImageTwilight";
import React from "react";
import { useState } from "react";

interface MakeHeadProps {
    toggleNode: number;
    handleToggle: () => void;
}

export type View = 'home' | 'sets' | 'my sets' | 'about';

interface ViewProps {
    view: View;
    handleView: (action: View) => void
}

function currentView(toggleNode: number, handleToggle: () => void, view: View, handleView: (action: View) => void) {
    switch (view) {
        case 'home':
            return (
                <div>
                    <div className={"container"}>
                        <MakeHead toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView} />
                    </div>
                    <div className="bgVid">
                        <MakeHeadVid />
                    </div>
                    <div className="bodyCont">
                        <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
                    </div>
                    <div>
                        <ImageStellar />
                    </div>
                    <div className="bodyCont">
                        <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
                    </div>
                    <div>
                        <ImageShroud />
                    </div>
                    <div className="bodyCont">
                        <MakeBody toggleNode={toggleNode} handleToggle={handleToggle} />
                    </div>
                    <div>
                        <ImageTwilight />
                    </div>
                    <div className="bodyCont">
                        <MakeGround toggleNode={toggleNode} handleToggle={handleToggle} />
                    </div>
                </div>
            );

        case 'sets':
            return (
                <div>
                    <div className={"container"}>
                        <MakeHead toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView} />
                    </div>
                    <div>
                        <h1>Quit slacking Anthony1!</h1>
                    </div>
                </div>
            );

        case 'my sets':
            return (
                <div>
                    <div className={"container"}>
                        <MakeHead toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView} />
                    </div>
                    <div>
                        <h1>Quit slacking Anthony2!</h1>
                    </div>
                </div>
            );

        case 'about':
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
};

const CurrentView: React.FC<MakeHeadProps & ViewProps> = ({ toggleNode, handleToggle, view, handleView }) => {
    return (
        <div>
            {currentView(toggleNode, handleToggle, view, handleView)}
        </div>
    );
}

export default CurrentView