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
    default:
      return state;
  }
}
