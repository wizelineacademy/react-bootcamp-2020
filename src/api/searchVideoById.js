import { API_PREFIX } from '../constants';

export async function searchVideoById(videoId) {
  const url = `${API_PREFIX}/videos/${videoId}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.items[0];
}
