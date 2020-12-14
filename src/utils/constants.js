const AUTH_STORAGE_KEY = 'wa_cert_authenticated';
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_PARAMS = {
  key: YOUTUBE_API_KEY,
  part: 'snippet',
};

export { AUTH_STORAGE_KEY, YOUTUBE_API_URL, YOUTUBE_PARAMS };
