import { AuthActionTypes } from './auth.types';

export const setCurrentAuth = (auth) => ({
  type: AuthActionTypes.SET_AUTH,
  payload: auth,
});
