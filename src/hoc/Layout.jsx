import React, { useContext, useEffect } from 'react';

import ScreensRouter from '../routing/ScreensRouter';
import Header from '../components/header/Header';

import FavoriteContext from '../store/providers/FavoritesProvider';
import { AuthContext } from '../store/contexts/AuthContext';

const Layout = () => {
  const [state, dispatch] = useContext(AuthContext);

  useEffect(() => {
    dispatch({
      type: 'LOAD_FROM_STORAGE',
    });
  }, []);
  return (
    <FavoriteContext>
      <Header />
      <ScreensRouter />
    </FavoriteContext>
  );
};

export default Layout;
