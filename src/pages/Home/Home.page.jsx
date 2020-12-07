import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Home.styles.scss';
import { Navbar, ShowVideos } from '../../components';
import youtube from '../../api/youtube';
import WatchVideo from '../WatchVideo';

const HomePage = () => {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const handleSubmit = async (videoName) => {
    const response = await youtube.get('/search', {
        params: {
            q: videoName
        }
    });
    setVideos(response.data.items);
    console.log(videos)
  }
  
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  useEffect(() => {
    handleSubmit('doggies');
  }, []);

  return (
    <section className="homepage" ref={sectionRef}>

      <Navbar handleSubmit={handleSubmit}/>

      <Link to='/watch'>
        <div>
          <ShowVideos 
            videos={videos} 
            handleVideoSelect={handleVideoSelect}
          />
        </div>
      </Link>
    
      {/* <h1>Hello stranger! :S</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in :D →</Link>
      )} */}
    </section>
  );
}

export default HomePage;
