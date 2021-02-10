import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: process.env.REACT_APP_GAPI_KEY,
  },
});

export const searchVideos = async (searchQuery) => {
  try {
    const result = instance.get('/search', {
      params: { q: searchQuery, type: 'video' },
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getVideoById = async (videoId) => {
  try {
    const result = instance.get('/videos', {
      params: {
        id: videoId,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRelatedVideos = async (videoId) => {
  try {
    const result = instance.get('/search', {
      params: {
        type: 'video',
        relatedToVideoId: videoId,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
