import React, { useReducer } from 'react';
import authReducer, { InitialState } from './auth.reducer';

const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, InitialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
