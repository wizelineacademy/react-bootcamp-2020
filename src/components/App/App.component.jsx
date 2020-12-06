import React from 'react';

import AuthProvider from '../../providers/Auth/Auth.provider';
import VideoProvider from '../../providers/Video/Video.provider';
import UserPreferencesProvider from '../../providers/Preferences/UserPreferences.provider';
import AppTheme from '../AppTheme/AppTheme';

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <UserPreferencesProvider>
          <AppTheme />
        </UserPreferencesProvider>
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
