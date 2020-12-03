import React, { useState, useEffect, useContext } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from './storage';
import { SEARCH_VIDEO, APP_STATE, VIDEO } from './constants';

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

export const useSesion = () => {
    const { Sesion } = useContext(StateContext);
    if (!Sesion) {
        alert(`You can't access this page!`);
    }
    return Sesion;
};

export const State = ({ children }) => {
    
    const [Theme, setTheme] = useState(PrimaryTheme);
    const [DarkMode, setDarkMode] = useState(false);
    const [Sesion, setSesion] = useState(loadFromLocalStorage(APP_STATE));
    const [SearchVideo, setSearchVideo] = useState("Wizeline");
    const [Video, setVideo] = useState(loadFromLocalStorage(VIDEO));

    useEffect(() => {
        if(DarkMode){
            setTheme(DarkTheme);
        } else {
            setTheme(PrimaryTheme);
        }
    }, [DarkMode])

    useEffect(() => {
        saveToLocalStorage(APP_STATE, Sesion)
    }, [Sesion])

    useEffect(() => {
        saveToLocalStorage(SEARCH_VIDEO, SearchVideo)
    }, [SearchVideo])

    useEffect(() => {
        saveToLocalStorage(VIDEO, Video)
    }, [Video])

    return (
        <StateContext.Provider 
            value={{
                Theme,
                DarkMode,
                setDarkMode,
                Sesion,
                setSesion,
                SearchVideo, 
                setSearchVideo,
                Video,
                setVideo
            }}
        >
            { children }
        </StateContext.Provider>
    );
};
