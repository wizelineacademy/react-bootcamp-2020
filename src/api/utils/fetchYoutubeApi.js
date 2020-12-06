import youtube from '../youtube';

export const fetchYouTubeApi = async (search) => {
  const res = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 16,
      key: 'AIzaSyAfOS1Tb_1twFmVrtwQqaa5I7nWggs9v50',
      q: search,
    },
  });
  return res;
};
