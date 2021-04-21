import React, { useRef } from 'react';
// import { useParams } from 'react-router-dom';

import Header from '../../components/Header/index';
import ListVideoCard from '../../components/ListVideoCard/index';

import { useVideosContext } from '../../context/context';

function FavouritesPage({ toggleDrawer, isOpen }) {
  const sectionRef = useRef(null);
  // const { id } = useParams();

  const { state, dispatch } = useVideosContext();
  // const { loading, error } = useVideoApi(state.searchQuery);
  const { favouriteVideos } = state;
  console.log(favouriteVideos, state, 'Favourites Page');

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
