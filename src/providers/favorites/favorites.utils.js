export const addVideoToFavorites = (favoriteVideos, videoToAdd) => {
  //    If favorite is already added
  if (favoriteVideos[videoToAdd.videoId]) {
    return favoriteVideos;
  }

  return { ...favoriteVideos, [videoToAdd.videoId]: videoToAdd };
};

export const removeVideoFromFavorites = (favoriteVideos, videoToRemove) => {
  const favoriteVideosCopy = { ...favoriteVideos };
  //  avoiding https://github.com/facebook/react/issues/16295 -- I must find the fix of this
  //  https://github.com/reazen/relude-reason-react/issues/21
  if (favoriteVideosCopy[videoToRemove.videoId]) {
    delete favoriteVideosCopy[videoToRemove.videoId];

    return favoriteVideosCopy;
  }

  return favoriteVideos;
};
