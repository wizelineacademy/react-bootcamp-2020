import React from 'react';
import { render, screen } from '@testing-library/react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Navbar from '../../../components/Navbar';
import Layout from '../../../components/Layout';
import Private from '../../../components/Private';

import VideoProvider from '../../../providers/Video';
import LocalThemeProvider from '../../../providers/Theme';
import AuthProvider from '../../../providers/Auth';
import HomePage from '../../../pages/Home';
import LoginPage from '../../../pages/Login';
import FavoritesPage from '../../../pages/Favorites';
import FavoritesPlayerPage from '../../../pages/FavoritesPlayer';
import PlayerPage from '../../../pages/Player';
import NotFound from '../../../pages/NotFound';

describe('Navbar component', () => {
  it('Displays the navbar with information', () => {
    act(() => {
      render(
        <HashRouter>
          <AuthProvider>
            <VideoProvider>
              <LocalThemeProvider>
                <Navbar />
              </LocalThemeProvider>
            </VideoProvider>
          </AuthProvider>
        </HashRouter>
      );
    });
    expect(screen.getByText('Academy project')).toBeTruthy();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Login')).toBeTruthy();
  });

  it('navigates home when you click the logo', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <VideoProvider>
            <LocalThemeProvider>
              <Navbar />
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
                  <Route
                    exact
                    path="/player/:id"
                    render={({ match }) => <PlayerPage id={match} />}
                  />
                  <Route
                    exact
                    path="/favorites/:id"
                    render={({ match }) => <FavoritesPlayerPage id={match} />}
                  />
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            </LocalThemeProvider>
          </VideoProvider>
        </AuthProvider>
      </HashRouter>
    );
    act(() => {
      const goHomeLink = screen.getByText('Home');
      goHomeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(screen.getByText('Welcome to some youtube copy enjoy!')).toBeTruthy();
  });

  it('navigates login when you click the login menu item', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <VideoProvider>
            <LocalThemeProvider>
              <Navbar />
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
                  <Route
                    exact
                    path="/player/:id"
                    render={({ match }) => <PlayerPage id={match} />}
                  />
                  <Route
                    exact
                    path="/favorites/:id"
                    render={({ match }) => <FavoritesPlayerPage id={match} />}
                  />
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            </LocalThemeProvider>
          </VideoProvider>
        </AuthProvider>
      </HashRouter>
    );

    // Interact with page
    act(() => {
      // Find the link (perhaps using the text content)
      const goHomeLink = screen.getByText('Login');
      // Click it
      goHomeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(screen.getByText('Welcome back!')).toBeTruthy();
    expect(screen.getByText('username')).toBeTruthy();
    expect(screen.getByText('password')).toBeTruthy();
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getByLabelText('password')).toBeTruthy();
  });
});
