import videoMock from '../../mocks/videoMock.json';
import { LIGHT_THEME, DARK_THEME } from '../../utils/constants';
import actions from '../actions';
import reducer from '../reducer';
import { mockedUser } from '../../mocks/mockedUser';
import initialState from '../initialState';

describe('reducer cases', () => {
  it('it toggles theme dark', () => {
    const initialStateTheme = {
      ...initialState,
      theme: DARK_THEME,
    };
    const { theme } = reducer(initialStateTheme, {
      type: actions.TOGGLE_THEME,
    });
    expect(theme).toBe(LIGHT_THEME);
  });
  it('it toggles theme light', () => {
    const initialStateTheme = {
      ...initialState,
      theme: LIGHT_THEME,
    };
    const { theme } = reducer(initialStateTheme, {
      type: actions.TOGGLE_THEME,
    });
    expect(theme).toBe(DARK_THEME);
  });
  it('it sets theme', () => {
    const { theme } = reducer(initialState, {
      type: actions.SET_THEME,
      payload: DARK_THEME,
    });
    expect(theme).toBe(DARK_THEME);
  });
  it('it keeps videos if falsy', () => {
    const initialStateVideos = {
      ...initialState,
      videos: videoMock,
    };
    const { videos } = reducer(initialStateVideos, {
      type: actions.SET_VIDEOS,
      payload: false,
    });
    expect(videos).toBe(videoMock);
  });

  it('it sets videos', () => {
    const { videos } = reducer(initialState, {
      type: actions.SET_VIDEOS,
      payload: videoMock,
    });
    expect(videos).toBe(videoMock);
  });

  it('it adds videos', () => {
    const initialStateVideos = {
      ...initialState,
      videos: videoMock,
    };
    const { videos } = reducer(initialStateVideos, {
      type: actions.ADD_VIDEOS,
      payload: videoMock,
    });
    expect(videos.length).toBe([...videoMock, ...videoMock].length);
  });
  it('it dosent add videos if falsy', () => {
    const initialStateVideos = {
      ...initialState,
      videos: videoMock,
    };
    const { videos } = reducer(initialStateVideos, {
      type: actions.ADD_VIDEOS,
      payload: false,
    });
    expect(videos.length).toBe(videoMock.length);
  });

  it('set current video', () => {
    const initialStateVideos = {
      ...initialState,
      videos: videoMock,
    };
    const someId = initialStateVideos.videos.find((video) => video.id !== null).id;
    const { videos, currentVideo } = reducer(initialStateVideos, {
      type: actions.SET_CURRENT_VIDEO,
      payload: someId,
    });
    expect(videos.find((video) => video.id === someId)).toBe(currentVideo);
  });

  it('set current user', () => {
    const { user } = reducer(initialState, {
      type: actions.SET_USER,
      payload: mockedUser,
    });

    expect(user).toBe(mockedUser);
  });

  it('toggles navigation', () => {
    const navigationState = {
      ...initialState,
      navigationOpen: false,
    };
    const { navigationOpen } = reducer(navigationState, {
      type: actions.TOGGLE_NAV,
    });

    expect(!navigationState.navigationOpen).toBe(navigationOpen);
  });

  it('unsets favorites', () => {
    const favoritesState = {
      ...initialState,
      videos: videoMock,
      favorites: videoMock,
    };
    const anyFavoriteId = favoritesState.favorites.find((video) => video.id !== null).id;
    const { favorites } = reducer(favoritesState, {
      type: actions.TOGGLE_FAVORITE,
      payload: anyFavoriteId,
    });

    expect(favorites.some((video) => video.id === anyFavoriteId)).toBeFalsy();
  });

  it('sets favorites', () => {
    const favoritesState = {
      ...initialState,
      videos: videoMock,
    };
    const anyVideoId = favoritesState.videos.find((video) => video.id !== null).id;
    const { favorites } = reducer(favoritesState, {
      type: actions.TOGGLE_FAVORITE,
      payload: anyVideoId,
    });

    expect(favorites.some((video) => video.id === anyVideoId)).toBeTruthy();
  });

  it('sets searchString', () => {
    const searchStringExpected = 'helloWorld';
    const { searchString } = reducer(initialState, {
      type: actions.SET_SEARCH_STRING,
      payload: searchStringExpected,
    });
    expect(searchString).toBe(searchStringExpected);
  });

  it('throws default default', () => {
    try {
      reducer(initialState, { type: null });
    } catch (e) {
      expect(e.message).toMatch('KNOW_ACTION:');
    }
  });
});
