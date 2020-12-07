export const NUMBER_OF_SUGGESTIONS = 3;
export const AUTH_STORAGE_KEY_AUTHENTICATED = 'wa_cert_authenticated';
export const AUTH_STORAGE_KEY_USERINFO_NAME = 'wa_cert_userinfo_name';

export const BASE_API_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=<SearchQuery>&key=<API_KEY>';
export const BASE_API_URL_VIDEO =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2C%20player&id=<VIDEO_ID>&key=<API_KEY>';
