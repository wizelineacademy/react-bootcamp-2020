export function toSingleVideo(rawData) {
  return {
    id: rawData.id,
    descripcion: rawData.snippet.description,
    title: rawData.snippet.title,
    channelTitle: rawData.snippet.channelTitle,
    image: rawData.snippet.thumbnails.default.url,
  };
}
