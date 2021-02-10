export const getVideoId = (video) => {
  if (typeof video.id === 'object') {
    return video.id.videoId;
  }
  return video.id;
};
