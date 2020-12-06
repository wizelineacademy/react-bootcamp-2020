import React, { useState, useEffect, useContext } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from './storage';
import { SEARCH_VIDEO, APP_STATE, VIDEO, FAVORITE_VIDEOS, DARK_MODE } from './constants';
import { message } from 'antd';

const DarkTheme = {
    PrimaryColor: "#494A4A",
    SecondaryColor: "#0E65AD",
    TextColor: "white",
};

const PrimaryTheme = {
    PrimaryColor: "white",
    SecondaryColor: "#C7E1F7",
    TextColor: "grey",
};

export const StateContext = React.createContext(null);

export const useSesion = () => {
    const { Sesion } = useContext(StateContext);
    if (!Sesion) {
        message.error(`You can't access this page!`);
    }
    return Sesion;
};

export const State = ({ children }) => {
    
    const [Theme, setTheme] = useState(PrimaryTheme);
    const [DarkMode, setDarkMode] = useState(loadFromLocalStorage(DARK_MODE));
    const [Sesion, setSesion] = useState(loadFromLocalStorage(APP_STATE));
    const [SearchVideo, setSearchVideo] = useState("Wizeline");
    const [Video, setVideo] = useState(loadFromLocalStorage(VIDEO) ? loadFromLocalStorage(VIDEO) : {});
    const [FavoriteVideos, setFavoriteVideos] = useState(loadFromLocalStorage(FAVORITE_VIDEOS) ? 
        loadFromLocalStorage(FAVORITE_VIDEOS) : [] );

    useEffect(() => {
        if(DarkMode){
            setTheme(DarkTheme);
        } else {
            setTheme(PrimaryTheme);
        }
    }, [DarkMode])

    useEffect(() => {
        saveToLocalStorage(DARK_MODE, DarkMode)
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

    useEffect(() => {
        saveToLocalStorage(FAVORITE_VIDEOS, FavoriteVideos)
    }, [FavoriteVideos])

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
                setVideo,
                FavoriteVideos,
                setFavoriteVideos
            }}
        >
            { children }
        </StateContext.Provider>
    );
};
