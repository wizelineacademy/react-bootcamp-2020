import { types } from '../types/types';

export const navigationDrawerToggle = (navigationDrawerToggleValue) => ({
    type: types.navigationDrawerToggle,
    payload: {
        navigationDrawerToggle: navigationDrawerToggleValue,
    },
});

export const darkModeToggle = (darkModeToggle) => ({
    type: types.darkModeToggle,
    payload: {
        darkModeToggle,
    },
});

export const loginModalToggle = (loginModalToggle) => ({
    type: types.loginModalToggle,
    payload: {
        loginModalToggle,
    },
});
