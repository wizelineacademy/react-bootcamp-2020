/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';

import AuthProvider from './providers/Auth/Auth.provider';
import MenuBar from './components/MenuBar/MenuBar';
import Private from './components/Private/Private';
import HomePage from './pages/HomePage/HomePage';
import PlayerPage from './pages/PlayerPage/PlayerPage';
import LoginPage from './pages/LoginPage/LoginPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

import { fetchYouTubeApi } from './api/utils/fetchYoutubeApi';
import { lightTheme, darkTheme, GlobalStyles, typographyTheme } from './styles/index';
import 'semantic-ui-css/semantic.min.css';

import VideosContext from './context/VideosContext';
import LoginContext from './context/LoginContext';
import ThemeContext from './context/ThemeContext';

import { storage } from './utils/storage';
import { FAVORITES_LIST, FAVORITES_ID, DARK_MODE } from './utils/constants';

const App = () => {
  //Theme Context States
  const [light, setLight] = useState(storage.get(DARK_MODE));
  // Video Context States
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [id, setId] = useState('');
  // Login Context States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleHitEnter = async (event) => {
    if (event.key === 'Enter') {
      const temp = await fetchYouTubeApi(searchTerm);
      const res = temp.data.items.filter((e) => e.id.videoId);

      setVideos(res);
      setSelectedVideo(res[0]);
    }
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    setId(video.id.videoId);
  };
  const handleTheme = () => {
    const isDark = storage.get(DARK_MODE);
    if (isDark) {
      storage.set(DARK_MODE, false);
      setLight(true);
    } else {
      storage.set(DARK_MODE, true);
      setLight(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const temp = await fetchYouTubeApi('Wizeline');
      const res = temp.data.items.filter((e) => e.id.videoId);
      setVideos(res);
      setSelectedVideo(res[0]);
      if (storage.get(FAVORITES_ID) === null) {
        storage.set(FAVORITES_LIST, []);
        storage.set(FAVORITES_ID, {});
      }
      const isDark = storage.get(DARK_MODE);
      setLight(!isDark);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeContext.Provider
          value={{
            light,
            setLight,
            handleTheme,
          }}
        >
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
                id,
                setId,
                onVideoSelect,
                handleHitEnter,
                handleOnChange,
              }}
            >
              <ThemeProvider theme={light ? lightTheme : darkTheme}>
                <MuiThemeProvider theme={typographyTheme}>
                  <GlobalStyles />
                  <Container>
                    <MenuBar />
                    <Switch>
                      <Route exact path="/">
                        <HomePage />
                      </Route>
                      <Route exact path="/player/:vId">
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
                </MuiThemeProvider>
              </ThemeProvider>
            </VideosContext.Provider>
          </LoginContext.Provider>
        </ThemeContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
