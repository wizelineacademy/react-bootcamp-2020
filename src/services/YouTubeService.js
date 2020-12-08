import axios from 'axios';
const KEY = 'AIzaSyCft2VnPsWK0-30DkQhlgUIPuD_Wkin6pQ';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 15,
    key: KEY,
  },
});
