import React, { useState } from 'react';
import NavBar from '../../components/NavigationBar/NavigationBar.component';
import conection from '../../providers/Connector/APIConnector.connector';
import SearchResults from '../../components/SearchResultVideos/SearchResultVideos.component';
import Player from '../../components/Player/Player.component';

const KEY = 'AIzaSyBvk50dGexx4FfcJZNVHVlfE7brR6ObUHg';

function MainPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const handleSearch = async (searchBarQuery) => {
    const response = await conection.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        q: searchBarQuery
      }
    });
    setVideos(response.data.items);
  }

  const getRelated = async (video) => {
    const response = await conection.get('/search', {
      params: {
        part: 'snippet',
        relatedToVideoId: video.id.videoId,
        maxResults: 5,
        key: KEY
      }
    });
    setRelatedVideos(response.data.items);
    console.log(relatedVideos);
  }

  const handleSelectedVideo = (video) => {
    setSelectedVideo(video);
    getRelated(video);
    setVideos([]);
  }

  return (
    <>
      <NavBar handleSearch={handleSearch} isSearchEnabled={true} />
      <br />
      <div className="player-wraper">
        <div className="player-container">
          <Player video={selectedVideo}></Player>
        </div>
        <div className="related-videos">
        <SearchResults handleSelectedVideo={handleSelectedVideo} videos={relatedVideos}></SearchResults>
        </div>
      </div>
      <div className="searchResults">
        <SearchResults handleSelectedVideo={handleSelectedVideo} videos={videos}></SearchResults>
      </div>
    <button onClick={()=>{console.log(relatedVideos)}}>clickme</button>
    </>
  );
}

export default MainPage;
