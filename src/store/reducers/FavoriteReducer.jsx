export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VIDEOS':
      return { ...state, videos: action.payload.videos };
    case 'TOGGLE_FAVORITE':
      const { video } = action.payload;
      const copyArr = [...state.favoriteVideos];
      const copyVideos = [...state.videos];
      const favVideoIndex = copyArr.findIndex((item) => item.id === video.id);
      const copyVideo = copyVideos.find((item) => item.id === video.id);
      if (favVideoIndex > -1) {
        copyVideo.isFav = false;
        copyArr.splice(favVideoIndex, 1);
      } else {
        copyVideo.isFav = true;
        copyArr.push(video);
      }

      return { ...state, videos: copyVideos, favoriteVideos: copyArr };
    default:
      return state;
  }
};
