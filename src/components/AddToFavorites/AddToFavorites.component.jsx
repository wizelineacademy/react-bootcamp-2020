import React from 'react';

import { useVideosContext } from '../../context/context';

const AddToFavorites = ({ video }) => {
  const { state, dispatch } = useVideosContext();
  const { favouriteVideos } = state;

  const favourites = () => {
    const videoInFavourites = favouriteVideos.includes(video);
    dispatch({ type: '@set/favourites_videos', payload: video });
    // localStorage.setItem('favouriteVideos', JSON.stringify(favouriteVideos));
    if (videoInFavourites) {
      const favouritesWithoutVideo = favouriteVideos.filter(
        (favorite) => favorite.id.videoId !== video.id.videoId
      );
      dispatch({
        type: '@set/remove_favourites_videos',
        payload: favouritesWithoutVideo,
      });
      // localStorage.setItem('favouriteVideos', JSON.stringify(favouriteVideos));
    }
  };

  return (
    <button
      className="block shadow-lg md:text-xs focus:outline-none bg-green-400 hover:bg-green-500 dark:bg-red-400 dark:hover:bg-red-500 text-white uppercase lg:text-lg mx-auto px-4 py-1 rounded"
      type="button"
      onClick={favourites}
    >
      {favouriteVideos.find((favorite) => favorite.id.videoId === video.id.videoId)
        ? 'Remove from favorites'
        : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavorites;
