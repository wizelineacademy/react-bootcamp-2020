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

// {"favoriteVideos":

// [{"id":"cjO2fJy8asM","image":"https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg",
// "title":"A Day in the Life of an Engineering Manager at Wizeline",
// "description":"Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
// "publishTime":"2018-09-25T17:45:19Z"}],

// "isLightTheme":false}
