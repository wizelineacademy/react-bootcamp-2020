import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

import loginApi from '../../api/login.api';

export const authSuccess = (user) => {
  return {
    type: AUTH_SUCCESS,
    user,
  };
};

export const logout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginApi(username, password);
      dispatch(authSuccess(user));
    } catch (e) {
      throw new Error(e);
    }
  };
};
