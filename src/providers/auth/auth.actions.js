import { AuthActionTypes } from './auth.types';

export const setCurrentUser = (auth) => ({
  type: AuthActionTypes.SET_AUTH,
  payload: auth,
});
