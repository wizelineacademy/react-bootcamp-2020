import { AuthActionTypes } from './auth.types';

const INITIAL_STATE = {
  currentAuth: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return {
        ...state,
        currentAuth: action.payload,
      };
    default:
      return state;
  }
};

export { INITIAL_STATE as InitialState };
export default authReducer;
