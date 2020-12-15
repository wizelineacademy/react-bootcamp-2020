import React, { useReducer, useEffect, useMemo } from 'react';
import reducer, { initialState } from './reducer';
import actions from './actions';
import Dialog from '../../components/Dialogs/Login/Dialog.component';

const DialogContext = React.createContext({});

const DialogProvider = (props) => {
  const [dialogState, dispatch] = useReducer(reducer, initialState);
  const dialogActions = useMemo(() => actions(dispatch), []);
  useEffect(() => {
    dialogActions.registerDialog('miDialogo', false);
    dialogActions.registerDialog('otro dialogo', false);
  }, [dialogActions]);
  return (
    <DialogContext.Provider
      value={{
        dialogState,
        dialogActions,
      }}
    >
      <Dialog
        open={
          dialogState.dialogs.miDialogo ? dialogState.dialogs.miDialogo.isOpen : false
        }
        setOpen={(isOpen) => {
          dialogActions.setOpen('miDialogo', isOpen);
        }}
      />
      {props.children}
    </DialogContext.Provider>
  );
};

export { DialogProvider, DialogContext };
