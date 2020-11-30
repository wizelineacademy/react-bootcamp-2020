import React, { useReducer } from 'react';
import videosReducer, { InitialState } from './videos.reducer';

const VideosContext = React.createContext(null);

function VideosProvider({ children }) {
  const [videosState, dispatch] = useReducer(videosReducer, InitialState);

  return (
    <VideosContext.Provider value={{ videosState, dispatch }}>
      {children}
    </VideosContext.Provider>
  );
}

export { VideosContext };
export default VideosProvider;
