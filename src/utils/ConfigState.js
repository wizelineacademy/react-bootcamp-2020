import React, { useReducer } from 'react';
import { loadFromLocalStorage } from './storage';
import { DARK_MODE } from './constants';
import reducer from './reducer';


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

export const ConfigContext = React.createContext({
    state: {},
    dispatchC: () => {}
});

const initialState = {
    DarkMode: loadFromLocalStorage(DARK_MODE),
    Theme: loadFromLocalStorage(DARK_MODE) ? DarkTheme : PrimaryTheme,
};

export const ConfigState = ({ children }) => {

    const [state, dispatchC] = useReducer(reducer, initialState);

    return (
        <ConfigContext.Provider 
            value={{
                state,
                dispatchC
            }}
        >
            { children }
        </ConfigContext.Provider>
    );
};