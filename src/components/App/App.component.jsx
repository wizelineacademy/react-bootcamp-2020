import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import NotFound from '../../pages/NotFound';
import AppNavbar from '../Navbar';
import FavoritesPage from '../../pages/Favorites';
import GlobalContext from '../../state/GlobalContext';
import DetailPage from '../../pages/Detail';
import ScrollTop from '../../utils/scrolltop';
import HomePage from '../../pages/Home/Home.page';
import ViewFavoritesPage from '../../pages/ViewFavorites/ViewFavorites.page';

// Handle expiration time
const expiration = JSON.parse(localStorage.getItem('expiration'));
if (expiration) {
  if (expiration.timestamp < new Date().getTime()) {
    localStorage.removeItem('appUser');
    localStorage.removeItem('expiration');
    localStorage.removeItem('favorites');
  }
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState('');
  const [responseList, setResponseList] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const PrivateRoute = (isAuthorized) => {
    if (isAuthorized) {
      return (
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
      );
    }
    return <Redirect to="/" />;
  };

  return (
    <BrowserRouter>
      <ScrollTop />
      <Container fluid>
        <GlobalContext.Provider
          value={{
            showLogin,
            setShowLogin,
            user,
            setUser,
            query,
            setQuery,
            responseList,
            setResponseList,
            activeVideo,
            setActiveVideo,
            favorites,
            setFavorites,
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
                  <HomePage />
                </Route>
                <Route exact path="/video/:id">
                  <DetailPage />
                </Route>
                <Route exact path="/favorites/:id">
                  <ViewFavoritesPage />
                </Route>
                {PrivateRoute(user)}
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Col>
          </Row>
        </GlobalContext.Provider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
