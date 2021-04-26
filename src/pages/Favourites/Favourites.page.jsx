import React from 'react';

import ListVideoCard from '../../components/ListVideoCard/index';

function FavouritesPage() {
  const favourites = JSON.parse(window.localStorage.getItem('videosFavourites'));

  return (
    <>
      <ListVideoCard videos={favourites} isFavourites="true" />
    </>
  );
}

export default FavouritesPage;
