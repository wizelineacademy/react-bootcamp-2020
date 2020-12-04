import React from 'react';

import AuthProvider from '../../providers/Auth/Auth.provider';
import UserPreferencesProvider from '../../providers/Preferences/UserPreferences.provider';
import AppTheme from '../AppTheme/AppTheme';

function App() {
  return (
    <AuthProvider>
      <UserPreferencesProvider>
        <AppTheme />
      </UserPreferencesProvider>
    </AuthProvider>
  );
}

export default App;
