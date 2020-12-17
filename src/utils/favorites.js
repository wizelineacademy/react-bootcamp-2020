import { storage } from './storage';
import { USER_PREFERENCES } from './constants';

const placeHolder = { favoriteVideos: [], isDarkTheme: false };

function addToFavorites(video) {
  let savedFavorites = storage.get(USER_PREFERENCES);
  if (!savedFavorites) {
    savedFavorites = placeHolder;
  }
  savedFavorites.favoriteVideos.push(video);
  storage.set(USER_PREFERENCES, savedFavorites);
}

function getFavoritesVideos() {
  const savedFavorites = storage.get(USER_PREFERENCES);
  return savedFavorites ? savedFavorites.favoriteVideos : [];
}

function isFavoriteVideo(video) {
  const savedFavorites = storage.get(USER_PREFERENCES);
  console.log(savedFavorites);
  if (!savedFavorites) {
    return false;
  }

  const found = savedFavorites.favoriteVideos.find((actualVideo) => {
    return actualVideo.videoId === video.videoId;
  });

  const result = !!found;
  return result;
}

function removeFromFavorites(video) {
  const savedFavorites = storage.get(USER_PREFERENCES);

  const filtered = savedFavorites.favoriteVideos.filter((actualVideo) => {
    return actualVideo.videoId !== video.videoId;
  });
  savedFavorites.favoriteVideos = filtered;
  storage.set(USER_PREFERENCES, savedFavorites);
}

export { addToFavorites, removeFromFavorites, getFavoritesVideos, isFavoriteVideo };
