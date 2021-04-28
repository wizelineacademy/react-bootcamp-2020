import React, { useState } from 'react';
import { useHistory } from 'react-router';
// import Drawer from 'react-modern-drawer';

import VideoProvider from '../../context/context';
import UserProvider from '../../context/userContext';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';
// import useUser from '../../hooks/userUser';
import DrawerNav from '../DrawerNav/index';
import Header from '../Header/index';
import RenderCurrentRoute from './RenderCurrentRoute.component';

import 'react-modern-drawer/dist/index.css';

function App() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setOpened] = useState(false);

  const openModal = () => setOpened(!isOpened);

  const closeModal = () => setOpened(!isOpened);
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
          <Header
            toggleDrawer={toggleDrawer}
            openModal={openModal}
            isOpen={isOpen}
            placeholder="Search..."
            isOpened={isOpened}
            closeModal={closeModal}
          />
          <Layout>
            <RenderCurrentRoute isOpen={isOpen} toggleDrawer={toggleDrawer} />
          </Layout>
        </AuthProvider>
      </UserProvider>
    </VideoProvider>
  );
}

export default App;
