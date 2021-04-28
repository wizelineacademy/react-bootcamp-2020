import React from 'react';

import ListVideoCard from '../../components/ListVideoCard/index';

function FavouritesPage() {
  const favourites = JSON.parse(window.localStorage.getItem('videosFavourites')) || [];
  if (!favourites.length)
    return (
      <div className="text-center m-8 mx-auto font-mono text-pink-900">
        Your favourite list is empty
      </div>
    );

  return <ListVideoCard videos={favourites} isFavourites="true" />;
}

export default FavouritesPage;
