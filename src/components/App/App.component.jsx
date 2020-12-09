import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Theme/globalStyles.component';
import AuthProvider from '../../providers/Auth';
import FavoritesProvider from '../../providers/Favorites/Favorites.provider';
import FavoritePage from '../../pages/Favorites/Favorite.page';
import HomePage from '../../pages/Home';
import Navbar from '../Navbar/Navbar.component';
import NotFound from '../../pages/NotFound';
import SearchProvider from '../../providers/Search/Search.provider';
import Private from '../Private';
import Layout from '../Layout';
import VideoDetail from '../../pages/VideoDetail/VideoDetail.component';
import { useTheme } from '../../providers/Theme/Theme.provider';
import { lightTheme, darkTheme } from '../Theme/Theme.component';

function App() {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <FavoritesProvider>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <>
                <GlobalStyles />
                <Layout>
                  <Navbar />
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/video/:videoId" component={VideoDetail} />
                    <Private exact path="/favorites" component={FavoritePage} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </Layout>
              </>
            </ThemeProvider>
          </FavoritesProvider>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
