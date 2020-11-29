import videoMock from '../mocks/videoMock.json';

const initialState = {
  favorites: [],
  currentVideo: null,
  videos: [...videoMock],
  theme: '',
  navigationOpen: false,
};

export default initialState;
