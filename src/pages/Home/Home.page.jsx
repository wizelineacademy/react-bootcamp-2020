/* global gapi */
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import VideoItem from '../../components/VideoItem';

// import { useAuth } from '../../providers/Auth';
import { HomeContainer } from './Home.styled';
// import './Home.styles.css';

const HomePage = () => {

  const [VideoList, setVideoList] = useState([]);
  // const history = useHistory();
  // const { authenticated, logout } = useAuth();

  useEffect(() => {
    gapi.client.setApiKey("AIzaSyDuNIHsx3MbUN3XHfHKgQ0f0FeatIsQtIk");
    gapi.client.load("youtube", "v3", () => {});
  }, [])
  
  const onSearchVideo = (SearchVideo) => {
    let request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: SearchVideo,
        maxResults: 20,
        order: "ViewCount",
        publishedAfter: "2020-01-01T00:00:00Z"
    });
    request.execute((response) => {
      const { result: { items } } = response;
        setVideoList(items);
        console.log(items);
    })
  }

  return (
    <div>
      <Navbar onSearchVideo={(value) => onSearchVideo(value)} />
      <HomeContainer>
        {
          (VideoList) && (
            VideoList.map((video) => 
              <VideoItem 
                key={video.etag} 
                videoInfo={video.snippet} 
                video={video.id} 
              />
            )
          )
        }
      </HomeContainer>
    </div>
  );
}

export default HomePage;
