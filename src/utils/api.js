import { setURLKeywords, formatDate } from './functions';
import { API_TOKEN, BASE_URL } from './constants';
import { storage } from './storage';

const searchURL = `${BASE_URL}search?part=snippet`;

// Search videos, Used for home view
export const search = async (keywords, maxResults = 10) => {
  // console.log('Search is triggered!')
  // console.log('Search says: ' + keywords)
  const response = await fetch(
    `${searchURL}${setURLKeywords(keywords)}&maxResults=${maxResults}&key=${API_TOKEN}`
  );
  const data = await response.json();
  return data.items.map((video) => {
    return {
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url,
      publishedAt: formatDate(video.snippet.publishedAt),
    };
  });
};

const findOneURL = `${BASE_URL}videos?part=player&part=snippet`;

// Get one, used for video player
export const findOne = async (id) => {
  // console.log('FindOne is triggered!')
  // console.log('FindOne says: ' + id)
  const response = await fetch(`${findOneURL}&id=${id}&key=${API_TOKEN}`);
  const playerData = await response.json();
  const player = playerData.items[0].player.embedHtml;
  const src = player.substring(
    player.lastIndexOf('src="') + 5,
    player.lastIndexOf(`${id}"`) + id.length
  );
  return {
    src,
    title: playerData.items[0].snippet.title,
    description: playerData.items[0].snippet.description,
    publishedAt: formatDate(playerData.items[0].snippet.publishedAt),
  };
};

// get Related Videos, used at video player
export const getRelated = async (id, maxResults = 10) => {
  // console.log('GetRelated is triggered!')
  // console.log('GetRelated says: ' +id)
  const response = await fetch(
    `${searchURL}&type=video&relatedToVideoId=${id}&maxResults=${maxResults}&key=${API_TOKEN}`
  );
  const relatedData = await response.json();
  const data = relatedData.items.map((video) => {
    return {
      id: video.id.videoId,
      title: video.snippet.title,
      publishedAt: formatDate(video.snippet.publishedAt),
      thumbnail: video.snippet.thumbnails.medium.url,
    };
  });
  return data;
};

const findFavoriteURL = `${BASE_URL}videos?part=snippet`;

// get favorites - Dec. 6th 2020 - 4:53 PM - This method may be a rough approach
const findFavorite = async (id) => {
  const favorite = await fetch(`${findFavoriteURL}&id=${id}&key=${API_TOKEN}`);
  const data = await favorite.json();
  try {
    const snippet = data.items[0];
    return {
      id: snippet.id,
      title: snippet.snippet.title,
      description: snippet.snippet.description,
      thumbnail: snippet.snippet.thumbnails.medium.url,
      publishedAt: formatDate(snippet.snippet.publishedAt),
    };
  } catch (error) {
    console.log(`Error retreiving favorite for id: ${id}${error}`);
    return {};
  }
};

export const getFavorites = async () => {
  // console.log('GetFavorites is triggered!')
  // console.log('GetFavorites says: %o', storage.get('favorites'))
  const favorites = storage.get('favorites');
  const response = favorites.map(async (id) => {
    return findFavorite(id);
  });
  return Promise.all(response);
};
