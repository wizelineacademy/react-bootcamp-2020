import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import Container from './App.styled';
import NavBar from '../NavBar';
import Protected from '../Protected/Protected.component';
import VideoPlayerPage from '../../pages/VideoPlayer';
import VideoContext from '../../state/videoContext';
import reducer from '../../state/videoReducer';
import initialState from '../../state/videoContext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VideoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <AuthProvider>
        <BrowserRouter>
          <Container>
            <NavBar />
            <Switch>
              <Route exact path="/home/:searchText?" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/video/:id" component={VideoPlayerPage} />
              <Protected path="/favorites" component={FavoritesPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
        </BrowserRouter>
      </AuthProvider>
    </VideoContext.Provider>
  );
}

export default App;
