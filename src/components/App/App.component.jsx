import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import AuthProvider from '../../providers/Auth';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import VideoDetail from '../../pages/VideoDetail';
import { AuthProvider } from '../../contexts/authContext/authContext';
import { DialogProvider } from '../../contexts/dialogContext/Dialog';

const youtubeColors = {
  youtubePrimary: '#F9F9F9',
  youtubeSecondaryText: '#898989',
  youtubePrimaryText: '#030303',
  youtubeIconColor: '#606060',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#065FD4', // '#3ea6ff',
    },
    ...youtubeColors,
    border: '#D3D3D3',
    text: {
      primary: youtubeColors.youtubePrimaryText,
      secondary: youtubeColors.youtubeSecondaryText,
    },
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      outlined: {
        padding: '5px 16px 6px',
      },
      outlinedSecondary: {
        borderColor: '#065FD4',
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <DialogProvider>
            <Layout>
              <Switch>
                <Route exact path="/video/:videoId">
                  <VideoDetail />
                </Route>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              <Fortune />
            </Layout>
          </DialogProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
