import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Favorites from '../../pages/Favorites';
import Reproducer from '../../pages/Reproducer';

import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';

import VideoSearchContext from '../../state/VideoSearchContext';
import VideoSelectedContext from '../../state/VideoSelectedContext';
import FavoritesContext from '../../state/FavoritesContext';

function App() {
  const [query, setQuery] = React.useState('');
  const [selectedVideoId, setSelectedVideoId] = React.useState();
  const [favoriteVideoList, setFavoriteVideoList] = React.useState([]);

  const queryFn = (newQuery) => {
    console.log(newQuery);
    setQuery(() => newQuery);
  };

  const selectedVideoFn = (newId) => {
    console.log(newId);
    setSelectedVideoId(() => newId);
  };

  const addFavoritesFn = (newVideo) => {
    console.log(newVideo);
    setFavoriteVideoList((list) => list.concat(newVideo));
    console.log(favoriteVideoList);
  };

  const removeFavoritesFn = (videoRemove) => {
    const indexToRemove = favoriteVideoList.indexOf(videoRemove);
    console.log(indexToRemove);
    console.log(favoriteVideoList);
    setFavoriteVideoList((prev) => prev.splice(indexToRemove, 1));
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideoSearchContext.Provider value={{ query, queryFn }}>
          <VideoSelectedContext.Provider
            value={{ videoId: selectedVideoId, setVideoIdFn: selectedVideoFn }}
          >
            <FavoritesContext.Provider
              value={{ favoriteVideoList, addFavoritesFn, removeFavoritesFn }}
            >
              <Layout>
                <Navbar />
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Private exact path="/favorites">
                    <Favorites />
                  </Private>
                  <Route exact path="/reproducer">
                    <Reproducer />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            </FavoritesContext.Provider>
          </VideoSelectedContext.Provider>
        </VideoSearchContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
