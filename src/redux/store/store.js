import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { videoReducer } from '../reducers/videoReducer';
import { templateReducer } from '../reducers/templateReducer';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('persistantState', serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('persistantState');
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const reducers = combineReducers({
    auth: authReducer,
    video: videoReducer,
    template: templateReducer,
});

const store = createStore(
    reducers,
    loadFromLocalStorage(),
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
