import React, { useCallback, useContext, useState } from 'react';

const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  authenticated: false,
});

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without and AuthProvider`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const login = useCallback(() => {
    setAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
