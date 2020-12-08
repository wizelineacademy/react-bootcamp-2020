import React from 'react';

const VideoSelectedContext = React.createContext({
  videoId: '',
  setVideoFn: () => {},
});

export default VideoSelectedContext;
