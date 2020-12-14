import React, { useState, useEffect } from 'react';

import AuthProvider from '../../providers/Auth/Auth.provider';
import VideoProvider from '../../providers/Video/Video.provider';
import UserPreferencesProvider from '../../providers/Preferences/UserPreferences.provider';
import AppTheme from '../AppTheme/AppTheme';
import { initGoogle } from '../../api/gapi';

function App() {
  const [loadDependencies, setLoadDependencies] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(window.gapi.client.youtube.search);
      } catch (e) {
        await initGoogle().then(() => {
          setLoadDependencies(true);
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loadDependencies === true ? (
        <AuthProvider>
          <VideoProvider>
            <UserPreferencesProvider>
              <AppTheme />
            </UserPreferencesProvider>
          </VideoProvider>
        </AuthProvider>
      ) : (
        <div>cargando</div>
      )}
    </div>
  );
}

export default App;
