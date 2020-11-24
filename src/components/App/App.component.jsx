import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';

import YoutubeList from '../YoutubeList/YoutubeList';
import AppNavbar from '../Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContext from '../../state/LoginContext';
import AuthContext from '../../state/AuthContext';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Container fluid>
        <AuthContext.Provider>
          <LoginContext.Provider
            value={{
              showLogin,
              setShowLogin,
              isAuthenticated,
              setIsAuthenticated,
              user,
              setUser,
            }}
          >
            <Row className="text-center">
              <Col sm={12}>
                <AppNavbar />
              </Col>
            </Row>
            <Row className="text-center">
              <Col sm={12}>
                <YoutubeList />
              </Col>
            </Row>
          </LoginContext.Provider>
        </AuthContext.Provider>
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
