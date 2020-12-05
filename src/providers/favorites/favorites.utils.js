export const addVideoToFavorites = (favoriteVideos, videoToAdd) => {
  const { videos, channels } = favoriteVideos;
  const { video, channel } = videoToAdd;
  //    If favorite is already added
  if (videos[video.videoId]) {
    return favoriteVideos;
  }
  if (channels[channel.channelId]) {
    channel.quantity = channels[channel.channelId].quantity + 1;
  } else {
    channel.quantity = 1;
  }
  return {
    videos: { ...videos, [video.videoId]: video },
    channels: { ...channels, [channel.channelId]: channel },
  };
};

export const removeVideoFromFavorites = (favoriteVideos, videoToRemove) => {
  const favoriteVideosCopy = { ...favoriteVideos };
  const { videos, channels } = favoriteVideosCopy;
  const { video, channel } = videoToRemove;

  //  avoiding https://github.com/facebook/react/issues/16295 -- I must find the fix of this
  //  https://github.com/reazen/relude-reason-react/issues/21
  if (videos[video.videoId]) {
    delete videos[video.videoId];

    if (channels[channel.channelId].quantity === 1) {
      delete channels[channel.channelId];
    } else {
      channels[channel.channelId] = channels[channel.channelId].quantity - 1;
    }

    return { videos: { ...videos }, channels: { ...channels } };
  }

  return favoriteVideos;
};
