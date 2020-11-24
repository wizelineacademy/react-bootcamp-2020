import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <AppNavbar />
        <Row>
          <Col>1 of 1</Col>
        </Row>
        <AuthProvider>
          <Switch>
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
          <Fortune />
        </AuthProvider>
      </Container>
      {/* <YoutubeList /> */}
    </BrowserRouter>
  );
}

export default App;
