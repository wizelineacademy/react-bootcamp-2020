import React, { useReducer, useContext } from 'react';
import reducer from '../../state/reducer';
import initialState from '../../state/initialState';

const appDataContext = React.createContext({
  state: {},
  dispatch: () => {},
});

export function useAppDataContext() {
  return useContext(appDataContext);
}

export default function UserData({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <appDataContext.Provider value={{ state, dispatch }}>
      {children}
    </appDataContext.Provider>
  );
}
