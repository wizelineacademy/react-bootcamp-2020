import loginApi from '../../api/loginapi';

const ACTIONS = {
  LOGIN: 'LOGIN',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOGOUT: 'LOGOUT',
};

const loginUser = (dispatch) => async (username, password) => {
  dispatch({ type: ACTIONS.LOGIN });

  try {
    const user = await loginApi(username, password);

    dispatch({
      type: ACTIONS.SUCCESS,
      payload: { user },
    });
    return user;
  } catch (error) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: { error: error.message },
    });
    return null;
  }
};

const logoutUser = (dispatch) => () => {
  dispatch({ type: ACTIONS.LOGOUT });
};

export { ACTIONS, loginUser, logoutUser };
