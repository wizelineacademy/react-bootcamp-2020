import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import videosReducer from './reducers/videos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ auth: authReducer, videos: videosReducer });

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
