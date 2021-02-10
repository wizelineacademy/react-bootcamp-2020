export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export const setVideos = (data) => {
    return {
        type: 'SET_VIDEOS',
        payload: data
    };
};

export const addFavorite = (data) => {
    return {
        type: 'ADD_FAVORITE',
        payload: data
    };
};