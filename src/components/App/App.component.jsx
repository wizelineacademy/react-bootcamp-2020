import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import Private from '../Private';
import FavoritesPage from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';
import Navbar from '../Navbar';
import Player from '../../pages/Player';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Switch>
          <Private 
            exact
            path="/favorites" 
            component={FavoritesPage} 
          />
          <Private 
            exact 
            path="/favorites/player"
            component={Player}
          />
          <Route 
            exact
            path="/player"
            component={Player}
          />
          <Route path="/">
            <HomePage />
          </Route>
          {/* <Route path="/login">
            <LoginPage />
          </Route> */}
          {/* <Private exact path="/secret">
            <SecretPage />
          </Private> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
