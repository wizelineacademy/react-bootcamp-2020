import { AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/actionTypes';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY, USER_STORAGE_KEY, APP_STATE_KEY } from '../../utils/constants';

const initialState = {
  authenticated: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      storage.set(AUTH_STORAGE_KEY, true);
      storage.set(USER_STORAGE_KEY, action.user);
      return {
        ...state,
        authenticated: true,
        user: action.user,
      };
    case AUTH_LOGOUT:
      storage.set(AUTH_STORAGE_KEY, false);
      storage.delete(USER_STORAGE_KEY);
      storage.delete(APP_STATE_KEY);
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
