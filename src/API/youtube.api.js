import { YOUTUBE_BASE_URL } from '../utils/constants';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const getRelatedVideos = async (videoId) => {
  let data = null;

  try {
    const url = `${YOUTUBE_BASE_URL}search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);

    if (response.ok) {
      data = response.json();
    }
  } catch (e) {
    console.log(e);
  }

  return data;
};

const getVideoDetail = async (videoId) => {
  let data = null;

  try {
    const url = `${YOUTUBE_BASE_URL}videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);

    if (response.ok) {
      data = response.json();
    }
  } catch (e) {
    console.log(e);
  }

  return data;
};

const searchVideos = async (keyword) => {
  let data = null;

  try {
    const url = `${YOUTUBE_BASE_URL}search?part=snippet&q=${encodeURIComponent(
      keyword
    )}&type=video&maxResults=10&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url);

    if (response.ok) {
      const jsonResponse = await response.json();
      data = jsonResponse.items.map((item) => {
        return {
          id: item.id.videoId,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium,
        };
      });
    }
  } catch (e) {
    console.log(e);
  }

  return data;
};

export default {
  getRelatedVideos,
  getVideoDetail,
  searchVideos,
};
