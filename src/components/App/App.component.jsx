import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../VideoState/Provider';
import ThemeContext from '../../providers/ThemeProvider/Provider';
import AppTheme from '../AppTheme';

function App() {
  const [gapiReady, setgapiReady] = useState(false);

  useEffect(() => {
    console.log('Component is mounted');

    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey("AIzaSyCP_pmBTDrZrSW6Lf8am5ikmP6Iqy3dwUg");
        window.gapi.client.load('youtube', 'v3', () => {
          setgapiReady(true);
        });
      });
    };

    document.body.appendChild(script);
  }, []);

  if (gapiReady) {
    console.log('ready!!');

    return (
      <BrowserRouter>
        <AuthProvider>
          <VideoProvider>
            <ThemeContext>
              <AppTheme />
            </ThemeContext>
          </VideoProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  }
  return <> Loding </>;
}

export default App;
