import youtube from '../youtube';

export const fetchYouTubeApi = async (searchParam) => {
  const res = await youtube.get('search', {
    params: {
      part: 'snippet',
      maxResults: 15,
      key: 'AIzaSyC_DSdvqO86EJQrxVnaBo05u4iGHIe9BFg',
      q: searchParam,
    },
  });
  return res;
};
