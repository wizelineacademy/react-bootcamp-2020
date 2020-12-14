export const NUMBER_OF_SUGGESTIONS = 3;
export const AUTH_STORAGE_KEY_AUTHENTICATED = 'wa_cert_authenticated';
export const AUTH_STORAGE_KEY_USERINFO_NAME = 'wa_cert_userinfo_name';
export const AUTH_STORAGE_KEY_USERINFO = 'wa_cert_userinfo';
export const AUTH_STORAGE_KEY_FAVORITES = 'wa_cert_favorites';

export const BASE_API_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=<SearchQuery>&key=<API_KEY>';
export const BASE_API_URL_VIDEO =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2C%20player&id=<VIDEO_ID>&key=<API_KEY>';
export const BASE_API_URL_VIDEOSRELATED =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=<VIDEO_ID>&type=video&key=<API_KEY>';
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&key=AIzaSyDed0jEe8ysTWp2v2AXd_CZdcOg8FR19FQ
