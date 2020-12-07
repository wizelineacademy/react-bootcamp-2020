import React, { useReducer } from 'react';
import reducer from './reducer';
import actions from './actions';

const initialState = {
  user: null,
};

const AuthContext = React.createContext({});

const AuthProvider = (props) => {
  const [authState, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        authState,
        authActions: actions(dispatch),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
