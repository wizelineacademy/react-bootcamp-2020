import { types } from '../types/types';

export const videoReducer = (state = {}, action) => {
  switch (action.type) {
    case types.playVideo:
      return {
        ...action.payload,
      };
    case types.search:
      return {
        ...action.payload,
      };
    case types.videoLogout:
      return {
        query: 'wizeline',
        channelName: '',
        title: '',
        videoId: '',
        description: '',
        img: '',
      };
    default:
      return state;
  }
};
