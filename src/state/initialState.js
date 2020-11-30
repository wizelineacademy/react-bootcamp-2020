// TODO delete mocks
import videoMock from '../mocks/videoMock.json';

import { toSimpleYoutubeData } from '../utils/mappers/youtubeVideosMapper';

const mappedMock = videoMock.map(toSimpleYoutubeData);

const initialState = {
  favorites: [],
  currentVideo: null,
  videos: [...mappedMock],
  theme: '',
  navigationOpen: true,
  user: null,
};

export default initialState;
