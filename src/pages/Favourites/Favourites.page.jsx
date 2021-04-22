import React, { useRef } from 'react';

import Header from '../../components/Header/index';
import ListVideoCard from '../../components/ListVideoCard/index';

import { useVideosContext } from '../../context/context';

function FavouritesPage({ toggleDrawer, isOpen }) {
  const sectionRef = useRef(null);

  const { dispatch, state } = useVideosContext();
  const { favouriteVideos } = state;
  // const favourites = JSON.parse(localStorage.getItem('favouriteVideos'));
  // console.log('videosFavourites', favouriteVideos, state);
  const onSelectedVideo = (video) => {
    dispatch({ type: '@set/current_video', payload: video });
  };

  return (
    <section ref={sectionRef}>
      <Header
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
        placeholder="Search..."
        mode="light"
      />
      <section>
        <ListVideoCard onSelectedVideo={onSelectedVideo} videos={favouriteVideos} />
      </section>
    </section>
  );
}

export default FavouritesPage;
