import { API_PREFIX } from '../constants';

export async function searchVideos(query) {
  const url = `${API_PREFIX}/search/${query}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.items;
}
