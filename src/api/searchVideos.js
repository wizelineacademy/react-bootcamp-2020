import { API_PREFIX, MOCK } from '../constants';
import { videos } from '../constants/mock';

export async function searchVideos(query) {
  if (MOCK) {
    return videos.filter((v) => v.snippet.title.includes(query));
  }

  const url = `${API_PREFIX}/search/${query}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.items;
}
