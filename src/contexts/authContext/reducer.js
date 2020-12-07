import { AUTH_STATE_CHANGED } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_STATE_CHANGED:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
