import { API_PREFIX, MOCK } from '../constants';
import { videos } from '../constants/mock';

export async function searchVideosByIds(videoIds) {
  if (MOCK) {
    return videos.filter((v) => videoIds.includes(v.id.videoId));
  }

  const url = `${API_PREFIX}/videos/${videoIds.join(',')}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.items;
}
