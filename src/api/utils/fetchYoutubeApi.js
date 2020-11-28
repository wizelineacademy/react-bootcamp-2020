import youtube from '../youtube';

export const fetchYouTubeApi = async (searchParam) => {
  const res = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 15,
      key: 'AIzaSyDhq3WUDZYl7SHpmy3BS0lQu7yWCmY6qvI',
      q: searchParam,
    },
  });
  return res;
};
