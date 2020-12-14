import React from 'react';
import FavoritesGrid from '../../components/FavoritesGrid';
import './Favorites.style.css';

function Favorites() {
  return (
    <section className="favorites">
      <h1>Here, your favs!</h1>
      <FavoritesGrid />
    </section>
  );
}

export default Favorites;
