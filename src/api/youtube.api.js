import axios from 'axios';

const baseURL = 'https://www.googleapis.com/youtube/v3';
const { REACT_APP_KEY_YOUTUBE } = process.env;

export default axios.create({
  baseURL,
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 25,
    key: `${REACT_APP_KEY_YOUTUBE}`,
  },
});
