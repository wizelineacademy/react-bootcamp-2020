import React, { useRef } from 'react';

import ListVideoCard from '../../components/ListVideoCard/index';

function FavouritesPage() {
  const sectionRef = useRef(null);
  const favourites = JSON.parse(localStorage.getItem('videosFavourites'));

  return (
    <section ref={sectionRef}>
      <section>
        <ListVideoCard videos={favourites} isFavourites="true" />
      </section>
    </section>
  );
}

export default FavouritesPage;
