import React, { useEffect, useReducer, useMemo } from 'react';
import reducer from './reducer';
import actions from './actions';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

const initialState = {
  user: null,
};

const AuthContext = React.createContext({});

const AuthProvider = (props) => {
  const { children, value } = props;
  const [authState, dispatch] = useReducer(reducer, value || initialState);
  const user = useLocalStorage('user', null)[0];
  const authActions = useMemo(() => actions(dispatch), []);
  useEffect(() => {
    authActions.authStateChanged(user);
  }, [user, authActions]);
  return (
    <AuthContext.Provider
      value={{
        authState,
        authActions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
