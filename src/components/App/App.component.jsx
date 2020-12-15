import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import AuthProvider from '../../providers/Auth';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import VideoDetail from '../../pages/VideoDetail';
import { AuthProvider } from '../../contexts/authContext/authContext';
import { DialogProvider } from '../../contexts/dialogContext/Dialog';
import { ResourceProvider } from '../../contexts/resourceContext/Resource';
import ViewLaterPage from '../../pages/ViewLater';

const youtubeColors = {
  youtubePrimary: '#F9F9F9',
  youtubeSecondaryText: '#898989',
  youtubePrimaryText: '#030303',
  youtubeIconColor: '#606060',
};

const lightTheme = {
  palette: {
    type: 'light',
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
};

/* const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#FFF', // '#3ea6ff',
    },
    ...youtubeColors,
    border: '#D3D3D3',
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
}; */

const theme = createMuiTheme(lightTheme);

function MainLayout({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
}

function App() {
  return (
    <HashRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ResourceProvider>
          <AuthProvider>
            <DialogProvider>
              <Switch>
                <MainLayout component={VideoDetail} exact path="/video/:videoId" />
                <MainLayout component={HomePage} exact path="/search/:term" />
                <MainLayout component={HomePage} exact path="/" />
                <Private exact path="/viewlater">
                  <MainLayout component={ViewLaterPage} exact path="/viewlater" />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </DialogProvider>
          </AuthProvider>
        </ResourceProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
