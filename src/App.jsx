/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AuthProvider from './providers/Auth/Auth.provider';
import MenuBar from './components/MenuBar/MenuBar';
import Private from './components/Private/Private';
import HomePage from './pages/HomePage/HomePage';
import PlayerPage from './pages/PlayerPage/PlayerPage';
import LoginPage from './pages/LoginPage/LoginPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';

import { fetchYouTubeApi } from './api/utils/fetchYoutubeApi';
import 'semantic-ui-css/semantic.min.css';

import VideosContext from './context/VideosContext';
import LoginContext from './context/LoginContext';
import ThemeContext from './context/ThemeContext';

import { storage } from './utils/storage';

//Component Styling
const lightTheme = {
  bg: '#fff',
  text: '#121212',
};

const darkTheme = {
  bg: '#121212',
  text: '#fff',
};

const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};
    transition: 0.5s;
  }
 `;

const typographyTheme = createMuiTheme({
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});

const App = () => {
  //Theme Context States
  const [light, setLight] = useState(true);

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
  const handleTheme = () => {
    light ? setLight(false) : setLight(true);
    return;
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetchYouTubeApi('Wizeline');
      setVideos(res.data.items);
      setSelectedVideo(res.data.items[1]);
      if (storage.get('favoritesList') === null) {
        storage.set('favoritesList', []);
        storage.set('favoritesId', {});
      }
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
