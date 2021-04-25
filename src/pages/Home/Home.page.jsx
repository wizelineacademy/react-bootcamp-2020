import React, { useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// import Header from '../../components/Header/index';
import ListVideoCard from '../../components/ListVideoCard/index';

// import { useAuth } from '../../providers/Auth';
import useVideoApi from '../../hooks/youtube.hook';

import { useVideosContext } from '../../context/context';

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

  const { state } = useVideosContext();
  useVideoApi(state.searchQuery);
  const { videos } = state;
  if (videos.lenght <= 0) {
    return <div>Loading...</div>;
  }

  return (
    <section ref={sectionRef}>
      <section>
        <ListVideoCard videos={videos} />
      </section>
    </section>
  );
}

export default HomePage;
