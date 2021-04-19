import React, { useRef, useContext } from 'react';
// import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header/index';
import ListVideoCard from '../../components/ListVideoCard/index';
import VideoDetail from '../../components/VideoDetail/index';

// import { useAuth } from '../../providers/Auth';
import useVideoApi from '../../api/youtube.hook';

import { VideoContext } from '../../context/context';

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  /*
  const { logout } = useAuth();
  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }
  */

  const { state, dispatch } = useContext(VideoContext);
  const { loading, error } = useVideoApi(state.searchQuery);
  console.log(loading, error);
  console.log(state);

  const onTermSubmit = async (term) => {
    console.log(term);
  };

  const onSelectedVideo = (video) => {
    dispatch({ type: '@set/current_video', payload: video });
  };

  return (
    <section ref={sectionRef}>
      <Header placeholder="Search..." mode="light" onTermSubmit={onTermSubmit} />
      {state.currentVideo ? (
        <section className="grid grid-cols-7">
          <VideoDetail video={state.currentVideo} />
          <ListVideoCard
            onSelectedVideo={onSelectedVideo}
            videos={state.videos}
            relatedCard={state.currentVideo}
          />
        </section>
      ) : (
        <section>
          <ListVideoCard onSelectedVideo={onSelectedVideo} videos={state.videos} />
        </section>
      )}
    </section>
  );
}

export default HomePage;
