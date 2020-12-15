export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VIDEOS': {
      const { videos } = action.payload;
      localStorage.setItem('storageVideos', JSON.stringify(videos));
      return { ...state, videos };
    }
    case 'TOGGLE_FAVORITE': {
      const { video } = action.payload;
      const copyFavs = [...state.favoriteVideos];
      const copyVideos = [...state.videos];
      const favVideoIndex = copyFavs.findIndex((item) => item.id === video.id);
      const copyVideo = copyVideos.find((item) => item.id === video.id);
      if (favVideoIndex > -1) {
        copyVideo.isFav = false;
        copyFavs.splice(favVideoIndex, 1);
      } else {
        copyVideo.isFav = true;
        copyFavs.push(video);
      }
      console.log(copyFavs);
      localStorage.setItem('favVideos', JSON.stringify(copyFavs));
      localStorage.setItem('storageVideos', JSON.stringify(copyVideos));
      return { ...state, videos: copyVideos, favoriteVideos: copyFavs };
    }
    case 'LOAD_FROM_STORAGE': {
      const storageVideos = JSON.parse(localStorage.getItem('storageVideos')) || [];
      const favVideos = JSON.parse(localStorage.getItem('favVideos')) || [];
      return {
        ...state,
        videos: storageVideos,
        favoriteVideos: favVideos,
      };
    }
    case 'RESET_STORAGE': {
      localStorage.setItem('favVideos', JSON.stringify([]));
      return { ...state, favoriteVideos: [] };
    }
    default:
      return state;
  }
};
