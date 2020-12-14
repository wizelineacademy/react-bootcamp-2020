import youtube from '../youtube';

export const fetchYouTubeApi = async (search) => {
  const res = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 16,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      q: search,
    },
  });
  return res;
};
