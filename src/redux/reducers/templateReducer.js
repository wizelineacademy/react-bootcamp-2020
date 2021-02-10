import { types } from '../types/types';

const initialState = {
    navigationDrawerToggle: false,
    darkModeToggle: false,
    loginModalToggle: false,
};

export const templateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.navigationDrawerToggle:
            return {
                ...state,
                navigationDrawerToggle: action.payload.navigationDrawerToggle,
            };
        case types.darkModeToggle:
            return {
                ...state,
                darkModeToggle: action.payload.darkModeToggle,
            };
        case types.loginModalToggle:
            return {
                ...state,
                loginModalToggle: action.payload.loginModalToggle,
            };
        default:
            return state;
    }
};
