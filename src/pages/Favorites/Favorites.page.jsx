import React from 'react';
import LayoutFull from '../../components/Layout/LayoutFull.component';
import FavoriteVideosList from '../../components/FavoriteVideosList';

import './Favorites.styles.css';

export default function Favorites() {
  return (
    <LayoutFull>
      <FavoriteVideosList />
    </LayoutFull>
  );
}
