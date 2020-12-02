/* global gapi */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import VideoItem from '../../components/VideoItem';
import { HomeContainer } from './Home.styled';
import { StateContext } from '../../utils/State';


const HomePage = () => {

  const { SearchVideo } = useContext(StateContext);
  const [VideoList, setVideoList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    gapi.client.setApiKey("AIzaSyDuNIHsx3MbUN3XHfHKgQ0f0FeatIsQtIk");
    gapi.client.load("youtube", "v3", () => {});

    setTimeout(() => {
      let request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: SearchVideo ? SearchVideo : " ",
        maxResults: 20,
        order: "ViewCount",
        publishedAfter: "2020-01-01T00:00:00Z"
      });
      request.execute((response) => {
        const { result: { items } } = response;
          setVideoList(items);
          console.log(items);
      })
    }, 2000);
  }, [SearchVideo])

  return (
    <div>
      <HomeContainer>
        {
          (VideoList) && (
            VideoList.map((video) => 
              <VideoItem 
                key={video.etag} 
                videoInfo={video.snippet} 
                videoID={video.id} 
                viewVideo={(id) => history.push(`/player/${id}`) }
              />
            )
          )
        }
      </HomeContainer>
    </div>
  );
}

export default HomePage;
