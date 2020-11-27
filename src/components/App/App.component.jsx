import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import AuthProvider from '../../providers/Auth';
import NotFound from '../../pages/NotFound';
import AppNavbar from '../Navbar';
import FavoritesPage from '../../pages/Favorites';
import UserContext from '../../state/UserContext';
import YoutubeList from '../YoutubeList/YoutubeList';

import 'bootstrap/dist/css/bootstrap.min.css';

// Handle expiration time
const expiration = JSON.parse(localStorage.getItem('expiration'));
if (expiration) {
  if (expiration.timestamp < new Date().getTime()) {
    localStorage.removeItem('appUser');
    localStorage.removeItem('expiration');
  }
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [searchG, setSearchG] = useState('');

  return (
    <BrowserRouter>
      <Container fluid>
        <UserContext.Provider
          value={{
            showLogin,
            setShowLogin,
            isAuthenticated,
            setIsAuthenticated,
            user,
            setUser,
            searchG,
            setSearchG,
          }}
        >
          <Row className="text-center">
            <Col sm={12}>
              <AppNavbar />
            </Col>
          </Row>
          <Row className="text-center">
            <Col sm={12}>
              <Switch>
                <Route exact path="/">
                  <YoutubeList />
                </Route>
                <Route exact path="/favorites">
                  <FavoritesPage />
                </Route>
                <Route exact path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Col>
          </Row>
        </UserContext.Provider>
        <AuthProvider>
          {/* <Switch>
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
          <Fortune /> */}
        </AuthProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
