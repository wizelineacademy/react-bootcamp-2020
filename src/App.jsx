import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import AuthProvider from './providers/Auth/Auth.provider';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import MenuBar from './components/MenuBar/MenuBar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';

import { fetchYouTubeApi } from './api/utils/fetchYoutubeApi';
import 'semantic-ui-css/semantic.min.css';

import VideosContext from './context/VideosContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleHitEnter = async (event) => {
    if (event.key === 'Enter') {
      const res = await fetchYouTubeApi(searchTerm);
      setVideos(res.data.items);
      setSelectedVideo(res.data.items[0]);
    }
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(async () => {
    const res = await fetchYouTubeApi('Favorites');
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[1]);
    localStorage.setItem('favoritesList', JSON.stringify([]));
    localStorage.setItem('favoritesId', JSON.stringify({}));
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideosContext.Provider
          value={{
            searchTerm,
            setSearchTerm,
            videos,
            setVideos,

            selectedVideo,
            setSelectedVideo,
            onVideoSelect,
          }}
        >
          <Container>
            <MenuBar handleHitEnter={handleHitEnter} handleOnChange={handleOnChange} />
            <Switch>
              <Route exact path="/">
                <HomePage videos={videos} onVideoSelect={onVideoSelect} />
              </Route>
              <Route exact path="/videoplayer">
                <VideoPlayer />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/favorites">
                <FavoritesPage />
              </Route>
            </Switch>
          </Container>
        </VideosContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
