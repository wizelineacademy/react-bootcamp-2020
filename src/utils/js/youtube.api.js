import { getDateDiff } from './date.utils';

// const YOUTUBE_API_KEY = 'AIzaSyCC1qy6X35HmF8FibL5n6magKdPd4DqaPQ';
// const BASE_YOUTUBE_URI = 'https://youtube.googleapis.com/youtube/v3/';

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

export const getSnippetDataSummary = () => {};

export const createSnippetDataSummary = (
  searchData = [],
  videoData = [],
  channelData = []
) => {
  const snippetDataSummary = [];
  const videoDictionary = {};
  const channelDictionary = {};

  searchData.items.forEach((sdItem) => {
    const newSnippetDataItem = {
      etag: sdItem.etag,
      videoId: sdItem.id.videoId,
      channelId: sdItem.snippet.channelId,
      image: sdItem.snippet.thumbnails.medium.url,
      title: unescape(sdItem.snippet.title),
      channelTitle: sdItem.snippet.channelTitle,
      channelImage: '',
      timestamp: formatDateDifference(getDateDiff(new Date(sdItem.snippet.publishedAt))),
      views: 0,
      channel: {
        id: sdItem.snippet.channelId,
        title: sdItem.snippet.channelTitle,
        image: '',
        description: '',
        suscribers: 0,
      },
    };

    if (!videoDictionary[sdItem.id.videoId]) {
      videoDictionary[sdItem.id.videoId] = videoData.items.find(
        (el) => el.id === sdItem.id.videoId
      );
    }

    if (!channelDictionary[sdItem.snippet.channelId]) {
      channelDictionary[sdItem.snippet.channelId] = channelData.items.find(
        (el) => el.id === sdItem.snippet.channelId
      );
    }

    if (channelDictionary[sdItem.snippet.channelId]) {
      const channel = channelDictionary[sdItem.snippet.channelId];

      newSnippetDataItem.channelImage = channel.snippet.thumbnails.medium.url;
      newSnippetDataItem.channel.description = channel.snippet.localized.description;
      newSnippetDataItem.channel.suscribers = channel.statistics.subscriberCount;
    }
    if (videoDictionary[sdItem.id.videoId]) {
      newSnippetDataItem.views = formatVideoViews(
        videoDictionary[sdItem.id.videoId].statistics.viewCount
      );
    }

    snippetDataSummary.push(newSnippetDataItem);
  });

  return snippetDataSummary;
};

const YoutubeApiUtils = {
  getSnippetDataSummary,
  createSnippetDataSummary,
};

export default YoutubeApiUtils;
