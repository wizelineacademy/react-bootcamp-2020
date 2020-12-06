import React, { useState } from 'react';

import { AuthContext } from './context/AuthContext';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
  const [user, setUser] = useState({ name: 'wizeline', password: 'wizelinerocks!' });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AppRouter />;
    </AuthContext.Provider>
  );
};
