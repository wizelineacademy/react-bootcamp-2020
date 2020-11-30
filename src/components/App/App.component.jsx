import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import FavoritePage from '../../pages/Favorites/Favorite.page';
import HomePage from '../../pages/Home';
import Navbar from '../Navbar/Navbar.component';
import NotFound from '../../pages/NotFound';
import SearchProvider from '../../providers/Search/Search.provider';
import Private from '../Private';
import Layout from '../Layout';
import VideoDetail from '../../pages/VideoDetail/VideoDetail.component';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <Layout>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/video/:videoId" component={VideoDetail} />
              <Private exact path="/favorites" component={FavoritePage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
