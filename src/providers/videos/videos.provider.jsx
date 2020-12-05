import React, { useReducer } from 'react';
import videosReducer, { InitialState } from './videos.reducer';

const VideosContext = React.createContext(null);

function VideosProvider({ children }) {
  const [videosState, videosDispatch] = useReducer(videosReducer, InitialState);

  return (
    <VideosContext.Provider value={{ videosState, videosDispatch }}>
      {children}
    </VideosContext.Provider>
  );
}

export { VideosContext };
export default VideosProvider;
