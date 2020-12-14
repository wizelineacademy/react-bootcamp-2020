export const initialState = {
  videos: localStorage.getItem('videos') ? localStorage.getItem('videos') : [],
  currentVideo: {},
  favoriteVideos: [],
  filter: '',
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_VIDEO_LIST':
      const items = action.payload;
      localStorage.setItem('videos', JSON.stringify(items));
      return {
        ...state,
        videos: items,
      };
    case 'SET_VIDEO':
      return {
        ...state,
        currentVideo: action.payload,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'LOAD_FROM_STORAGE': {
      const videos = JSON.parse(localStorage.getItem('videos')) || [];
      return {
        ...state,
        videos: videos,
      };
    }
    case 'ADD_FAVORITE': {
      console.log('add reducer');
      const favoriteVideos = JSON.parse(localStorage.getItem('favorites')) || [];
      favoriteVideos.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(favoriteVideos));
      return {
        ...state,
        favoriteVideos: favoriteVideos,
      };
    }
    case 'REMOVE_FAVORITE': {
      const favoriteVideos = JSON.parse(localStorage.getItem('favorites'));
      const index = favoriteVideos.findIndex(
        (video) => video.id.videoId === action.payload.id.videoId
      );
      if (index > -1) {
        favoriteVideos.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(favoriteVideos));
      return {
        ...state,
        favoriteVideos: favoriteVideos,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
