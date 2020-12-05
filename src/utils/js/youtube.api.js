import axios from 'axios';
import { getDateDiff } from './date.utils';

const YOUTUBE_API_KEY = 'AIzaSyCC1qy6X35HmF8FibL5n6magKdPd4DqaPQ';
const BASE_YOUTUBE_URI = 'https://youtube.googleapis.com/youtube/v3/';

const formatDateDifference = ({ Days, Months, Years }) => {
  if (Years > 0) {
    if (Years === 1) return `${Years} year ago`;
    return `${Years} years ago`;
  }
  if (Months > 0) {
    if (Months === 1) return `${Months} month ago`;
    return `${Months} months ago`;
  }
  if (Days > 0) {
    if (Days === 1) return `${Days}  day ago`;
    return `${Days} days ago`;
  }
  return 'few hours ago';
};

const formatVideoViews = (views) => {
  if (views < 1000) {
    return views.toString();
  }
  if (views >= 1000 && views < 1000000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  if (views > 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  }
  return '0';
};

const fetchBySearchInput = (searchInput, onSucces, onError, onComplete) => {
  return axios
    .get(`${BASE_YOUTUBE_URI}search`, {
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        q: searchInput,
        type: 'video',
        maxResults: 20,
      },
    })
    .then(onSucces)
    .catch(onError)
    .then(onComplete);
};

const fetchVideosByIds = (ids = [], onSucces, onError, onComplete) => {
  const stringIds = ids.join();
  return axios
    .get(
      `${BASE_YOUTUBE_URI}videos?key=${YOUTUBE_API_KEY}&part=snippet&id=${stringIds}&part=statistics`
    )
    .then(onSucces)
    .catch(onError)
    .then(onComplete);
};

const fetchChannelsByIds = (ids = [], onSucces, onError, onComplete) => {
  const stringIds = ids.join();
  return axios
    .get(
      `${BASE_YOUTUBE_URI}channels?key=${YOUTUBE_API_KEY}&part=snippet&id=${stringIds}&part=statistics`
    )
    .then(onSucces)
    .catch(onError)
    .then(onComplete);
};

export const formatVideosData = (searchData = [], videoData = [], channelData = []) => {
  const videosDataSummary = { videos: {}, channels: {} };
  const videoDictionary = {};
  const channelDictionary = {};

  searchData.items.forEach((sdItem) => {
    const {
      id: { videoId },
      snippet: { channelId },
    } = sdItem;
    // Normalizing data for videos
    if (!videosDataSummary.videos[videoId]) {
      if (!videoDictionary[videoId]) {
        videoDictionary[videoId] = videoData.items.find((el) => el.id === videoId);
      }

      // Video object
      videosDataSummary.videos[videoId] = {
        videoId,
        etag: sdItem.etag,
        channelId: sdItem.snippet.channelId,
        image: sdItem.snippet.thumbnails.medium.url,
        title: sdItem.snippet.title,
        channelTitle: sdItem.snippet.channelTitle,
        timestamp: formatDateDifference(
          getDateDiff(new Date(sdItem.snippet.publishedAt))
        ),
        views: videoDictionary[videoId]
          ? formatVideoViews(videoDictionary[videoId].statistics.viewCount)
          : 0,
      };
    }

    // Normalizing data for channels
    if (!videosDataSummary.channels[channelId]) {
      let image = '';
      let description = '';
      let suscribers = 0;

      if (!channelDictionary[channelId]) {
        channelDictionary[channelId] = channelData.items.find(
          (el) => el.id === channelId
        );
      }

      if (channelDictionary[channelId]) {
        const channel = channelDictionary[channelId];

        image = channel.snippet.thumbnails.medium.url;
        description = channel.snippet.localized.description;
        suscribers = channel.statistics.subscriberCount;
      }

      //  Channel object
      videosDataSummary.channels[channelId] = {
        channelId,
        title: sdItem.snippet.channelTitle,
        image,
        description,
        suscribers,
      };
    }
  });

  return videosDataSummary;
};

export const searchVideos = (searchInput = 'wizeline', onSucces, onError, onComplete) => {
  fetchBySearchInput(
    searchInput,
    (response) => {
      console.log('Serchvideos succes');
      const {
        data: { items },
      } = response;

      const searchData = response.data;
      let videoData = {};
      let channelData = {};

      const uniqueVideosIds = [...new Set(items.map((item) => item.id.videoId))];
      const uniqueChannelIds = [...new Set(items.map((item) => item.snippet.channelId))];

      const videosPromise = fetchVideosByIds(
        uniqueVideosIds,
        (videoResponse) => {
          videoData = videoResponse.data;
        },
        onError
      );

      const channelsPromise = fetchChannelsByIds(
        uniqueChannelIds,
        (channelResponse) => {
          channelData = channelResponse.data;
        },
        onError
      );

      Promise.all([videosPromise, channelsPromise])
        .then(() => {
          const videoDataSummary = formatVideosData(searchData, videoData, channelData);
          onSucces(videoDataSummary);
        })
        .catch(onError);
    },
    onError,
    onComplete
  );
};

const YoutubeApiUtils = {
  formatVideosData,
  searchVideos,
};

export default YoutubeApiUtils;
