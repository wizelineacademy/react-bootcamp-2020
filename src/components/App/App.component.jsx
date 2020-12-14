import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../VideoState/Provider';
import ThemeContext from '../../providers/ThemeProvider/Provider';
import AppTheme from '../AppTheme';

const LoadingComponent = styled.div`
  margin: auto;
  text-align: center;
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  span {
    margin-left: 10px;
  }
`;

function App() {
  const [gapiReady, setgapiReady] = useState(false);

  useEffect(() => {
    console.log('Component is mounted');

    if (!gapiReady) {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/client.js';

      script.onload = () => {
        window.gapi.load('client', () => {
          window.gapi.client.setApiKey("AIzaSyAouhxcwwBMVFT6GoNF4ccP0_O7DnwmReY");
          window.gapi.client.load('youtube', 'v3', () => {
            setgapiReady(true);
          });
        });
      };

      document.body.appendChild(script);
    }
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
  return (
    <LoadingComponent>
      <FontAwesomeIcon icon={faPlay} style={{ color: '#18A67B' }} />
      <span>Loading ...</span>
    </LoadingComponent>
  );
}

export default App;
