import { BASE_API_URL_VIDEO } from './constants';

export async function fetchVideos(videosIdsConcatenateList) {
  if (!videosIdsConcatenateList) {
    return null;
  }
  const API_URL = BASE_API_URL_VIDEO.replace(
    '<VIDEO_ID>',
    videosIdsConcatenateList
  ).replace('<API_KEY>', process.env.REACT_APP_API_KEY);

  return fetch(API_URL).then((response) =>
    response.pageInfo > 0 ? response.json() : null
  );
}
