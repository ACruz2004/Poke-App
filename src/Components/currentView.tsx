import React from "react";
import HomeView from "../View/homeView";
import SetsView from "../View/setsView";
import MySetsView from "../View/mySetsView";
import AboutView from "../View/aboutView";

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
                <HomeView toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView}></HomeView>
            );

        case 'sets':
            return (
                <SetsView toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView}></SetsView>
            );

        case 'my sets':
            return (
                <MySetsView toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView}></MySetsView>
            );

        case 'about':
            return (
                <AboutView toggleNode={toggleNode} handleToggle={handleToggle} handleView={handleView}></AboutView>
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

export default CurrentView;
