export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const favorites = state.favorites.concat(action.payload);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      return {
        ...state,
        favorites,
      };
    }
    case 'REMOVE_FAVORITE': {
      const favorites = state.favorites.filter(
        (item) => item.id.videoId !== action.payload.id.videoId
      );
      localStorage.setItem('favorites', JSON.stringify(favorites));
      return {
        ...state,
        favorites,
      };
    }
    case 'LOAD_FROM_STORAGE': {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      return {
        ...state,
        favorites,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
