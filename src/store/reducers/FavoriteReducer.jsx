export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VIDEOS':
      return { ...state, videos: action.payload.videos };
    case 'TOGGLE_FAVORITE':
      const { id } = action.payload;
      const copyArr = [...state.favoriteVideos];
      const copyVideos = [...state.videos];
      const favVideoIndex = copyArr.findIndex((videoId) => videoId === id);
      const video = copyVideos.find((video) => video.id === id);
      if (favVideoIndex > -1) {
        video.isFav = false;
        copyArr.splice(favVideoIndex, 1);
      } else {
        video.isFav = true;
        copyArr.push(id);
      }

      return { ...state, videos: copyVideos, favoriteVideos: copyArr };
    default:
      return state;
  }
};
