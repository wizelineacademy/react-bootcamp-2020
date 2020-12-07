import React from 'react';

const VideoSearchContext = React.createContext({
  query: 'wizeline',
  queryFn: () => {},
  //   order: 'relevance',
  //   relevanceLanguage: 'ES',
});

export default VideoSearchContext;
