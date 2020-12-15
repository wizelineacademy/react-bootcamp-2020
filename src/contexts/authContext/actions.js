export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED';

const actions = (dispatch) => ({
  authStateChanged: (user) => {
    dispatch({ type: AUTH_STATE_CHANGED, payload: user });
  },
});
export default actions;
