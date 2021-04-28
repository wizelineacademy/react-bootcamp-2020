export default function reducer(state, action) {
  switch (action.type) {
    case '@fetching':
      return { ...state, status: 'fetching' };
    case '@get/videos':
      return {
        ...state,
        status: 'fetched',
        videos: action.payload,
      };
    case '@set/current_video':
      return {
        ...state,
        status: 'current_video',
        currentVideo: action.payload,
      };
    case '@set/search_result':
      return {
        ...state,
        status: 'search',
        searchQuery: action.payload,
      };
    case '@error':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };
    case '@set/favourites_videos':
      return {
        ...state,
        status: 'add_favourites',
        favouriteVideos: [...state.favouriteVideos, action.payload],
      };
    case '@set/remove_favourites_videos':
      return {
        ...state,
        status: 'remove_favourites_videos',
        favouriteVideos: action.payload,
      };
    case '@set/theme':
      return {
        ...state,
        status: 'set_theme',
        theme: action.payload,
      };
    default:
      return state;
  }
}
