import React, { useReducer, useContext } from 'react';
import { loadFromLocalStorage } from './storage';
import {  APP_STATE, } from './constants';
import { message } from 'antd';
import reducer from './reducer';

export const StateContext = React.createContext({
    state: {},
    dispatchS: () => {}
});

const initialState = {
    Sesion: loadFromLocalStorage(APP_STATE),
};

export const useSesion = () => {
    const { state: { Sesion } } = useContext(StateContext);
    if (!Sesion) {
        message.error(`You can't access this page!`);
    }
    return Sesion;
};

export const State = ({ children }) => {
    
    const [state, dispatchS] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider 
            value={{
                state,
                dispatchS
            }}
        >
            { children }
        </StateContext.Provider>
    );
};
