import { API_PREFIX } from '../constants';

export async function searchVideosByIds(videoIds) {
  const url = `${API_PREFIX}/videos/${videoIds.join(',')}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.items;
}
