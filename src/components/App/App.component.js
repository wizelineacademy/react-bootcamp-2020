import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Container from './App.styled';
import NavBar from '../NavBar';
import Private from '../Private/Private.component';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Private>
              <Route path="/secret" component={SecretPage} />
            </Private>
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
