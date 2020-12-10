import React from 'react';

const VideoSelectedContext = React.createContext({
  videoId: {},
  setVideoIdFn: () => {},
});

export default VideoSelectedContext;
