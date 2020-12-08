import React from 'react';

import ScreensRouter from '../routing/ScreensRouter';
import Header from '../components/header/Header';

import FavoriteContext from '../store/providers/FavoritesProvider';

const Layout = () => {
  return (
    <FavoriteContext>
      <Header />
      <ScreensRouter />
    </FavoriteContext>
  );
};


export default Layout;