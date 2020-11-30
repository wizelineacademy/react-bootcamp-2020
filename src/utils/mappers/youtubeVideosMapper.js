export function toSimpleYoutubeData(rawData) {
  return {
    id: rawData.id.videoId,
    description: rawData.snippet.description,
    title: rawData.snippet.title,
    channelTitle: rawData.snippet.channelTitle,
    image: rawData.snippet.thumbnails.default.url,
  };
}
