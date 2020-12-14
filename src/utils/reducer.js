import { saveToLocalStorage } from './storage';
import { SEARCH_VIDEO, CURRENT_VIDEO, FAVORITE_VIDEOS, APP_STATE, DARK_MODE } from './constants';

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

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SEARCH_VIDEO":
            saveToLocalStorage(SEARCH_VIDEO, action.payload);
            return {
                ...state,
                SearchVideo: action.payload,
            };
        case "SET_CURRENT_VIDEO":
            saveToLocalStorage(CURRENT_VIDEO, action.payload);
            return {
                ...state,
                CurrentVideo: action.payload,
            };
        case "SET_FAVORITE_VIDEOS":
            saveToLocalStorage(FAVORITE_VIDEOS, action.payload);
            return {
                ...state,
                FavoriteVideos: action.payload,
            };
        case "SET_SESION":
            saveToLocalStorage(APP_STATE, action.payload);
            return {
                ...state,
                Sesion: action.payload,
            };
        case "SET_DARK_MODE":
            saveToLocalStorage(DARK_MODE, action.payload);
            return {
                ...state,
                DarkMode: action.payload,
                Theme: action.payload ? DarkTheme : PrimaryTheme,
            };
        default:
            throw new Error("Unkown action");
    }
};

export default reducer;
