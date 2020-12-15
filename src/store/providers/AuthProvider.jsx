import React, { useReducer } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { authReducer } from '../reducers/AuthReducer';

const AuthProvider = (props) => {
  const initialState = {
    isAuth: false,
  };

  const authContextReducer = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={authContextReducer}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
