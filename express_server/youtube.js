const request = require('request');
const { API_KEY } = process.env;
const SEARCH_API_URL = `https://youtube.googleapis.com/youtube/v3/search/?key=${API_KEY}&type=video&part=snippet&maxResults=10`;
const VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos/?key=${API_KEY}&part=snippet`;
module.exports.videosEndpoint = function (req, res) {
  const { videoIds } = req.params;
  request(`${VIDEOS_API_URL}&id=${videoIds}`).pipe(res);
};
module.exports.searchEndpoint = function (req, res) {
  const { query } = req.params;
  request(`${SEARCH_API_URL}&q=${query}`).pipe(res);
};