import { ACTIONS } from './Auth.actions';

export const initialState = {
  loading: false,
  user: null,
  error: false,
};

export function authReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.LOGIN:
      return { ...state, user: payload };
    case ACTIONS.SUCCESS:
      return { ...state, user: payload.user };
    case ACTIONS.ERROR:
      return { ...state, user: payload.error };
    case ACTIONS.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}
