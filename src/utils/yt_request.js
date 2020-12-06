import axios from 'axios';
import YT_API_KEY from 'constants';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    type: 'video',
    order: 'relevance',
    part: 'snippet',
    maxResult: 25,
    key: YT_API_KEY,
  },
});
