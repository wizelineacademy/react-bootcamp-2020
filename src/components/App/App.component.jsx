import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import Private from '../Private';
import FavoritesPage from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';


const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Private 
            exact
            path="/favorites" 
            component={FavoritesPage} 
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
