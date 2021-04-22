import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import Drawer from 'react-modern-drawer';

import VideoProvider from '../../context/context';
import UserProvider from '../../context/userContext';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import Modal from '../Modal/Modal.component';
import VideoDetailPage from '../../pages/VideoDetail/index';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import FavouritesPage from '../../pages/Favourites';
import Private from '../Private';
// import Fortune from '../Fortune';
import Layout from '../Layout';
// import useUser from '../../hooks/userUser';

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
          <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
            <div className="grid grid-rows-2 grid-flow-col gap-4 divide-y divide-light-gray-400">
              <div className="pt-4 pl-2">
                <button type="button" onClick={homePage}>
                  Home
                </button>
              </div>
              <div className="pt-0 pl-2">
                <button type="button" onClick={favouritePage}>
                  Favourites
                </button>
              </div>
            </div>
          </Drawer>
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
              <Route
                path="/favourites"
                render={({ match }) => {
                  return (
                    <>
                      <Route exact path={`${match.url}/`}>
                        <FavouritesPage toggleDrawer={toggleDrawer} isOpen={isOpen} />
                      </Route>
                      <Route path={`${match.url}/:id`}>
                        <VideoDetailPage
                          toggleDrawer={toggleDrawer}
                          isOpen={isOpen}
                          isFavourite="true"
                        />
                      </Route>
                    </>
                  );
                }}
              />
              <Route path="/login" component={Modal} />
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
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
