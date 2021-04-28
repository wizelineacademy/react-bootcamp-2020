import React from 'react';

import useUser from '../../hooks/userUser';
import { useVideosContext } from '../../context/context';

const AddToFavorites = ({ video }) => {
  const { dispatch } = useVideosContext();
  const { addFavourite } = useUser();
  let favouritesLocal = JSON.parse(window.localStorage.getItem('videosFavourites')) || [];

  const isFavourite = favouritesLocal.some(
    (favorite) => favorite.id.videoId === video.id.videoId
  );

  const favourites = () => {
    favouritesLocal = JSON.parse(window.localStorage.getItem('videosFavourites')) || [];
    const videoInFavourites = favouritesLocal.some(
      (favorite) => favorite.id.videoId === video.id.videoId
    );
    dispatch({ type: '@set/favourites_videos', payload: video });

    if (videoInFavourites) {
      const favouritesWithoutVideo = favouritesLocal.filter(
        (favorite) => favorite.id.videoId !== video.id.videoId
      );
      window.localStorage.setItem(
        'videosFavourites',
        JSON.stringify(favouritesWithoutVideo)
      );
      dispatch({
        type: '@set/remove_favourites_videos',
        payload: favouritesWithoutVideo,
      });
    } else {
      addFavourite(video);
    }
  };

  const label = isFavourite ? 'Remove from favorites' : 'Add to Favorites';

  return (
    <>
      <button
        className="block shadow-lg md:text-xs focus:outline-none bg-green-400 hover:bg-green-500 dark:bg-red-400 dark:hover:bg-red-500 text-white uppercase lg:text-lg mx-auto px-4 py-1 rounded"
        type="button"
        onClick={favourites}
      >
        {label}
      </button>
    </>
  );
};

export default AddToFavorites;
