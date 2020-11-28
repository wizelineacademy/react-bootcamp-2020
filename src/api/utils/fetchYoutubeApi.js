import youtube from '../youtube';

export const fetchYouTubeApi = async (searchParam) => {
  const res = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 15,
      key: 'AIzaSyAfOS1Tb_1twFmVrtwQqaa5I7nWggs9v50',
      q: searchParam,
    },
  });
  return res;
};
