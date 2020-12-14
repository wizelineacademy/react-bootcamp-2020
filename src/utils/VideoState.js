import React, { useReducer } from 'react';
import { loadFromLocalStorage } from './storage';
import { CURRENT_VIDEO, FAVORITE_VIDEOS } from './constants';
import reducer from './reducer';


export const VideoContext = React.createContext({
    state: {},
    dispatchV: () => {}
});

const initialState = {
    SearchVideo: "Wizeline",
    CurrentVideo: loadFromLocalStorage(CURRENT_VIDEO) ? 
        loadFromLocalStorage(CURRENT_VIDEO) : {},
    FavoriteVideos: loadFromLocalStorage(FAVORITE_VIDEOS) ? 
        loadFromLocalStorage(FAVORITE_VIDEOS) : [],
};

export const VideoState = ({ children }) => {

    const [state, dispatchV] = useReducer(reducer, initialState);

    return (
        <VideoContext.Provider 
            value={{
                state,
                dispatchV
            }}
        >
            { children }
        </VideoContext.Provider>
    );
};


