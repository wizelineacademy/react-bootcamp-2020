import { reducer } from '../Reducer';
import { ACTIONS } from '../Actions';

const mockState = {
  error: false,
  loading: false,
  videos: [],
  currentVideo: {},
  favorites: [],
};

const mockVideos = {
  id: "nmXMgqjQzls", 
  title: "Video Tour | Welcome to Wizeline Guadalajara", 
  description: "Follow Hector Padilla, Wizeline Director of Engine… stunning new office in Guadalajara, Jalisco, ...", 
  author: 'Wizeline',
  img: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
};

describe('Reducer', () => {
  it('Fetch vieos', () => {
    const result = reducer(mockState, { type: ACTIONS.FETCH_VIDEOS });
    const data = {
      ...mockState,
      loading: true,
      error: false,
    };
    expect(result).toEqual(data);
  });

  it('Fetch success', () => {
    const result = reducer(mockState, {
      type: ACTIONS.FETCH_SUCCESS,
      payload: { videos: mockVideos },
    });
    const data = {
      ...mockState,
      loading: false,
      videos: mockVideos,
    };
    expect(result).toEqual(data);
  });
  it('Fetch Error', () => {
    const result = reducer(mockState, {
      type: ACTIONS.FETCH_ERROR,
      payload: { error: 'Error' },
    });
    const data = {
      ...mockState,
      loading: false,
      error: 'Error',
    };
    expect(result).toEqual(data);
  });
  it('Current video', () => {
    const result = reducer(mockState, {
      type: ACTIONS.CURRENT_VIDEO,
      payload: { currentVideo: mockVideos },
    });
    const data = {
      ...mockState,
      loading: false,
      currentVideo: mockVideos,
    };
    expect(result).toEqual(data);
  });
  it('Add Favorites', () => {
    const result = reducer(mockState, {
      type: ACTIONS.ADD_FAVORITES,
      payload: { favorites: mockVideos },
    });
    const data = {
      ...mockState,
      loading: false,
      favorites: mockVideos,
    };
    expect(result).toEqual(data);
  });
  it('Remove Favorites', () => {
    const result = reducer(mockState, {
      type: ACTIONS.REMOVE_FAVORITES,
      payload: { favorites: mockVideos },
    });
    const data = {
      ...mockState,
      loading: false,
      favorites: mockVideos,
    };
    expect(result).toEqual(data);
  });
  it('on Error', () => {
    const result = reducer(mockState, {
      type: 'No Action',
      payload: { favorites: mockVideos },
    });
    const data = {
      ...mockState,
      error: 'Error',
    };
    expect(result).toEqual(data);
  });
});
