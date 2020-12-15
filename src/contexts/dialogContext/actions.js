export const REGISTER_DIALOG = 'REGISTER_DIALOG';
export const SETOPEN_DIALOG = 'SETOPEN_DIALOG';

const actions = (dispatch) => ({
  registerDialog: (name, isOpen) => {
    if (name) {
      dispatch({ type: REGISTER_DIALOG, payload: { name, isOpen } });
    }
  },
  setOpen: (name, isOpen) => {
    if (name) {
      dispatch({ type: SETOPEN_DIALOG, payload: { name, isOpen } });
    }
  },
});
export default actions;
