import React from 'react';

import ScreensRouter from '../routing/ScreensRouter';
import Header from '../components/header/Header';

import ProviderContext from '../store/providers/FavoritesProvider';

const Layout = () => {
  return (
    <ProviderContext>
      <Header />
      <ScreensRouter />
    </ProviderContext>
  );
};


export default Layout;