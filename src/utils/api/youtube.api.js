import axios from 'axios';
import { YOUTUBE_API_URL, YOUTUBE_PARAMS } from '../constants';

const get = (type, params) =>
  axios.get(`${YOUTUBE_API_URL}/${type}`, {
    params: {
      ...YOUTUBE_PARAMS,
      ...params,
    },
  });

const search = (searchQuery) =>
  get('search', {
    q: searchQuery,
    type: 'video',
    maxResults: 20,
  });

const getVideosById = (ids) =>
  get('videos', {
    id: ids.join(),
  });

const getChannelsById = (ids) =>
  get('channels', {
    id: ids.join(),
  });

export default {
  get,
  search,
  getVideosById,
  getChannelsById,
};
