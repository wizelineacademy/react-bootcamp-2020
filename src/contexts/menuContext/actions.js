export const SET_RESOURCE_STATE = 'SET_RESOURCE_STATE';
export const RESOURCE_STATE = ['idle', 'loading', 'success', 'error'];

const actions = (dispatch) => ({
  changeResourceStatus: (name, status) => {
    if (name && RESOURCE_STATE.includes(status)) {
      dispatch({
        type: SET_RESOURCE_STATE,
        payload: { name, status: status.toLowerCase() },
      });
    }
  },
});
export default actions;
