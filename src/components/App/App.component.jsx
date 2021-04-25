import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
// import Drawer from 'react-modern-drawer';

import VideoProvider from '../../context/context';
import UserProvider from '../../context/userContext';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import Modal from '../Modal/Modal.component';
import VideoDetailPage from '../../pages/VideoDetail/index';
import NotFound from '../../pages/NotFound';
import FavouritesPage from '../../pages/Favourites';
import Layout from '../Layout';
// import useUser from '../../hooks/userUser';
import DrawerNav from '../DrawerNav/index';
import ProtectedRoute from '../ProtectedRoutes/index';
import Header from '../Header/index';

import 'react-modern-drawer/dist/index.css';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  // const { isLogged } = useUser();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const homePage = () => {
    setIsOpen((prevState) => !prevState);
    history.push('/');
  };

  const favouritePage = () => {
    setIsOpen((prevState) => !prevState);
    history.push('/favourites');
  };

  return (
    <VideoProvider>
      <UserProvider>
        <AuthProvider>
          <DrawerNav
            isOpen={isOpen}
            toggleDrawer={toggleDrawer}
            home={homePage}
            favourite={favouritePage}
          />
          <Header toggleDrawer={toggleDrawer} isOpen={isOpen} placeholder="Search..." />
          <Layout>
            <Switch location={background || location}>
              <Route
                path="/video"
                render={({ match }) => {
                  return (
                    <>
                      <Route exact path={`${match.url}/`}>
                        <HomePage toggleDrawer={toggleDrawer} isOpen={isOpen} />
                      </Route>
                      <Route path={`${match.url}/:id`}>
                        <VideoDetailPage toggleDrawer={toggleDrawer} isOpen={isOpen} />
                      </Route>
                    </>
                  );
                }}
              />
              <Route exact path="/">
                <HomePage toggleDrawer={toggleDrawer} isOpen={isOpen} />
              </Route>
              <ProtectedRoute exact path="/favourites/">
                <FavouritesPage toggleDrawer={toggleDrawer} isOpen={isOpen} />
              </ProtectedRoute>
              <ProtectedRoute exact path="/favourites/video/:id">
                <VideoDetailPage
                  toggleDrawer={toggleDrawer}
                  isOpen={isOpen}
                  isFavourite="true"
                />
              </ProtectedRoute>
              <Route path="/login" component={Modal} />
              <Route path="*">
                <NotFound toggleDrawer={toggleDrawer} isOpen={isOpen} />
              </Route>
            </Switch>
            {background && <Route path="/login" component={Modal} />}
          </Layout>
        </AuthProvider>
      </UserProvider>
    </VideoProvider>
  );
}

export default App;
