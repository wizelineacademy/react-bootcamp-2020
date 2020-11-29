import React, { useReducer } from 'react';
import authReducer, { InitialState } from './auth.reducer';

const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, InitialState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
