export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VIDEOS':
      return { ...state, videos: action.payload.videos };
    case 'TOGGLE_FAVORITE':
      const copyArr = [...state.favoriteVideos];
      // TODO find element
      return { ...state, favoriteVideos: copyArr };
    default:
      return state;
  }
};
