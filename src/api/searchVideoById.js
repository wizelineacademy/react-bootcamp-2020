import { API_PREFIX, MOCK } from '../constants';
import { videos } from '../constants/mock';

export async function searchVideoById(videoId) {
  if (MOCK) {
    return videos.filter((v) => v.id.videoId === videoId)[0];
  }

  const url = `${API_PREFIX}/videos/${videoId}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.items[0];
}
