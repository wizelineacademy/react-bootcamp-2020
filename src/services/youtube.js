import axios from 'axios';
// import videos from '../dummyData/videos';

export const baseURL = 'https://www.googleapis.com/youtube/v3';

const service = () => {
  const apiKey = 'AIzaSyCxpoupiS2E_fiFWXR5mfOTG0JNVS_4T1A';
  const instance = axios.create({
    baseURL,
    timeout: 1500,
  });

  const getVideo = (key, params) => {
    const { videoId } = params;
    return instance.get('/videos', {
      params: { id: videoId, part: 'snippet', key: apiKey },
    });
  };

  const searchVideos = (key, params) => {
    const { term } = params;
    return instance.get('/search', {
      params: { q: term, part: 'snippet', key: apiKey, maxResults: 16, regionCode: 'MX' },
    });
  };

  const getRelatedVideo = (key, params) => {
    const { videoId } = params;
    return instance.get('/search', {
      params: {
        relatedToVideoId: videoId,
        part: 'snippet',
        key: apiKey,
        type: 'video',
        maxResults: '20',
      },
    });
  };

  return {
    instance,
    getVideo,
    getRelatedVideo,
    searchVideos,
  };
};

const youtube = service();

export default youtube;
