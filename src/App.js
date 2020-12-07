import React, { useReducer } from 'react';

import { AuthContext } from './context/AuthContext';
import { authReducer } from './context/authReducer';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
  const [user, dispatch] = useReducer(authReducer, {
    name: '',
    logged: false,
  });
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
