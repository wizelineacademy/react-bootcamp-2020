import React, { useState, useEffect } from 'react';

const DarkTheme = {
    PrimaryColor: "black",
    HoverColor: "white",
    SecondaryColor: "Blue",
    TextColor: "Red",
};

const PrimaryTheme = {
    PrimaryColor: "white",
    HoverColor: "black",
    SecondaryColor: "Blue",
    TextColor: "Red",
};

export const StateContext = React.createContext(null);

export const State = ({ children }) => {
    
    const [Theme, setTheme] = useState(PrimaryTheme);
    const [DarkMode, setDarkMode] = useState(false);
    const [Sesion, setSesion] = useState(null);

    useEffect(() => {
        if(DarkMode){
            setTheme(DarkTheme);
        } else {
            setTheme(PrimaryTheme);
        }
    }, [DarkMode])

    return (
        <StateContext.Provider 
            value={{
                Theme,
                DarkMode,
                setDarkMode,
                Sesion,
                setSesion
            }}
        >
            { children }
        </StateContext.Provider>
    );
};
