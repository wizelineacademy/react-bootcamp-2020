import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchContext from '../../state/SearchContext';
import { ThemeContext, themes } from '../../state/ThemeContext';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import VideoPage from '../../pages/Video';
import Private from '../Private';
import Layout from '../Layout';

import { SEARCH_TERM_DEFAULT } from '../../utils/constants';

export default function App() {
  const [searchTerm, setSearchTerm] = useState(SEARCH_TERM_DEFAULT);
  const [theme, setTheme] = useState(themes.light);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <AuthProvider>
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
                <Route exact path="/video/:id">
                  <VideoPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </ThemeContext.Provider>
    </SearchContext.Provider>
  );
}
