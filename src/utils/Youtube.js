const { REACT_APP_YOUTUBE_API_KEY } = process.env;
const YOUTUBE_VIDEO_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=16&resultsPerPage=15&key=${REACT_APP_YOUTUBE_API_KEY}`;
const YOUTUBE_VIDEO_DETAILS_URL = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&key=${REACT_APP_YOUTUBE_API_KEY}&id=`;

function secondsToString(seconds) {
  const hour = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds / 60) % 60);
  let second = seconds % 60;
  second = second < 10 ? `0${second}` : second;
  if (seconds < 3600) {
    return `${minute}:${second}`;
  }
  minute = minute < 10 ? `0${minute}` : minute;
  return `${hour}:${minute}:${second}`;
}

function YTDurationToSeconds(duration) {
  let match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  match = match.slice(1).map((x) => {
    if (x != null) {
      return x.replace(/\D/, '');
    }
    return true;
  });

  const hours = parseInt(match[0], 10) || 0;
  const minutes = parseInt(match[1], 10) || 0;
  const seconds = parseInt(match[2], 10) || 0;

  return secondsToString(hours * 3600 + minutes * 60 + seconds);
}

async function getVideoDuration(videoId) {
  const URL = YOUTUBE_VIDEO_DETAILS_URL + videoId;
  const response = await fetch(URL);

  if (response.status !== 200) {
    return '00:00:00';
  }
  const result = await response.json();
  const videoDurationList = result.items.map((video) => video.contentDetails.duration);
  return videoDurationList.map((video) => YTDurationToSeconds(video));
}

async function generateVideosResponse(items) {
  const videosId = items.map((item) => item.id.videoId);
  const videoDuration = await getVideoDuration(videosId.join());
  const videos = items.map((item, index) => {
    return {
      isFavorite: false,
      videoId: item.id.videoId,
      duration: videoDuration[index],
      thumbnail: item.snippet.thumbnails.medium.url,
      title: item.snippet.title.replace(/&#39;/g, "'"),
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
    };
  });
  return videos;
}

async function request(searchString) {
  const URL = `${YOUTUBE_VIDEO_URL}&q=${searchString}`;
  const response = await fetch(URL);

  if (response.status !== 200) {
    return null;
  }
  const result = await response.json();
  const videoList = await generateVideosResponse(result.items);
  console.log('YouTube Video API Credits has been used 🪙🪙🪙');
  return videoList;
}

function get(searchString) {
  return request(searchString);
}

export default {
  get,
  YTDurationToSeconds,
  secondsToString,
};
