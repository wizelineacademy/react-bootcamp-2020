import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import AuthProvider from './providers/Auth/Auth.provider';
import PlayerPage from './pages/PlayerPage/PlayerPage';
import MenuBar from './components/MenuBar/MenuBar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import Private from './components/Private/Private';

import { fetchYouTubeApi } from './api/utils/fetchYoutubeApi';
import 'semantic-ui-css/semantic.min.css';

import VideosContext from './context/VideosContext';
import LoginContext from './context/LoginContext';

function App() {
  // Video Context States
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // Login Context States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  useEffect(() => {
    async function fetchData() {
      const res = await fetchYouTubeApi('Favorites');
      setVideos(res.data.items);
      setSelectedVideo(res.data.items[1]);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <LoginContext.Provider
          value={{
            username,
            setUsername,
            password,
            setPassword,
          }}
        >
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
                <Route exact path="/player">
                  <PlayerPage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/favorites">
                  <FavoritesPage />
                </Private>
                <Route path="*" component={() => <h1>404</h1>} />
              </Switch>
            </Container>
          </VideosContext.Provider>
        </LoginContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
