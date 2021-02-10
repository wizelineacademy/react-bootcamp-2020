import logReducer from './isLogged';
import videosReducer from './videos';
import favoritesReducer from './favorites';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    logged: logReducer,
    videos: videosReducer,
    favorites: favoritesReducer
});

export default allReducers;