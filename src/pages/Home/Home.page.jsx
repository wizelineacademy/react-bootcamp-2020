import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import './Home.styles.css';

function HomePage(props) {
  return (
    <section>
      <div className="content">
        <div>
          <h1>Welcome</h1>
        </div>
        <VideoGrid videos={props.videos}/>
      </div>
    </section>
  );
}

export default HomePage;