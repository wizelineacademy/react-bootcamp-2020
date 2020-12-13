import youtube from '../youtube';

export const fetchYouTubeApi = async (search) => {
  const res = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 16,
      key: 'AIzaSyDhq3WUDZYl7SHpmy3BS0lQu7yWCmY6qvI',
      q: search,
    },
  });
  return res;
};
