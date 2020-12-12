import { API_URL } from '../constants';

async function fetchItems(query, searchType = 'search') {
  console.log('Called api');
  const url = `${API_URL}/${searchType}/${query}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse.items;
}

export async function searchVideos(search) {
  const videos = await fetchItems(search);
  return videos;
}

export async function searchVideoById(videoId) {
  const items = await fetchItems(videoId, 'videos');
  const index = items.findIndex((v) => v.id.videoId === videoId);
  if (index !== -1) {
    return items[index];
  }
}

export async function searchVideosByIds(videoIds) {
  const videos = await fetchItems(videoIds.join(','), 'videos');
  return videos;
}
