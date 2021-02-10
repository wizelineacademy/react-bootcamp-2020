import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoPage from '../../pages/Video';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private';
import Layout from '../Layout';
import { authSuccess } from '../../redux/actions/auth';
import { setVideos, setFavoriteVideos } from '../../redux/actions/videos';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY, USER_STORAGE_KEY, APP_STATE_KEY } from '../../utils/constants';

const theme = {
  colors: {
    green: '#6ab993',
    lightgreen: '#c5e2d4',
    darkgreen: '#082b2b',
  },
  fonts: {
    heading: 'Tinos',
    body: 'Lato',
  },
};

class App extends Component {
  componentDidMount() {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    const lastUserState = storage.get(USER_STORAGE_KEY) || null;
    const lastAppState = storage.get(APP_STATE_KEY) || null;
    if (isAuthenticated && lastUserState) {
      this.props.authSuccess(lastUserState);
    }
    if (lastAppState) {
      this.props.setVideos(lastAppState?.videos || []);
      this.props.setFavoriteVideos(lastAppState?.favoriteVideos || []);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Route path="/video/:id">
                <VideoPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authSuccess: (user) => dispatch(authSuccess(user)),
  setVideos: (videos) => dispatch(setVideos(videos)),
  setFavoriteVideos: (videos) => dispatch(setFavoriteVideos(videos)),
});

export default connect(null, mapDispatchToProps)(App);
