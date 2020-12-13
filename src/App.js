import React from 'react';

import { GlobalProvider } from './context/GlobalContext';
// import { AuthContext } from './context/AuthContext';
// import { authReducer } from './context/authReducer';
// import { VideoContext } from './context/VideoContext';
// import { videoReducer } from './context/videoReducer';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
  // const [user, userDispatch] = useReducer(authReducer, {
  //   name: '',
  //   logged: false,
  // });
  // const [video, videoDispatch] = useReducer(videoReducer, {
  //   query: '',
  //   channelName: '',
  //   title: '',
  //   videoId: '',
  //   description: '',
  //   img: '',
  // });

  return (
    <GlobalProvider>
      {/* <VideoContext value={{ video, videoDispatch }}> */}
      <AppRouter />
      {/* </VideoContext> */}
    </GlobalProvider>
  );
};
