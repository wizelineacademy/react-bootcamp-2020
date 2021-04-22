import React, { useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header/index';
import ListVideoCard from '../../components/ListVideoCard/index';

// import { useAuth } from '../../providers/Auth';
import useVideoApi from '../../api/youtube.hook';

import { useVideosContext } from '../../context/context';

function HomePage({ toggleDrawer, isOpen }) {
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

  const { state, dispatch } = useVideosContext();
  const { loading, error } = useVideoApi(state.searchQuery);
  const { videos } = state;
  console.log(loading, error);
  if (videos.lenght <= 0) {
    return <div>Loading...</div>;
  }

  const onSelectedVideo = (video) => {
    dispatch({ type: '@set/current_video', payload: video });
  };

  return (
    <section ref={sectionRef}>
      <Header
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
        placeholder="Search..."
        mode="light"
      />
      <section>
        <ListVideoCard onSelectedVideo={onSelectedVideo} videos={videos} />
      </section>
    </section>
  );
}

export default HomePage;
