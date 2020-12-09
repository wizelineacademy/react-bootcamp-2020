import React from 'react';

const VideoSelectedContext = React.createContext({
  video: {},
  setVideoFn: () => {},
});

export default VideoSelectedContext;
