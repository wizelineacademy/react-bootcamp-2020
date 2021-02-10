import { types } from '../types/types';

export const login = (id, email) => ({
    type: types.login,
    payload: {
        id,
        email,
    },
});

export const logout = () => ({
    type: types.logout,
    payload: {},
});

export const loginAsync = (id, email) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(id, email));
        }, 500);
    };
};
