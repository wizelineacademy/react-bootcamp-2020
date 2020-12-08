import React from 'react';
import AuthProvider from '../../providers/Auth';
import Home from '../../pages/Home';

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
