import React, { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import VideoContext from "../../providers/VideoContext";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Login/LogIn";
import ReproductorPlayer from "../../pages/ReproductorPlayer/ReproductorPlayer";

const App = () => {
  const [response, setResponse] = useState({});
  const [videoMetaInfo, setVideoMetaInfo] = useState([]);
  const [changingg, changinggSetChangingg] = useState(false);
  const [favoriteVideosMapUser, setFavoriteVideosMapUser] = useState(new Map());
  const [favoritesFlag, setFavoritesFlag] = useState(false);
  const [favoritesVideosArrayUser, setFavoritesVideosArrayUser] = useState([]);

  const [videoPropperties, setSelectedVideoPropperties] = useState({
    videoName: "",
    videoId: "",
    views: "",
    likes: "",
    dislikes: "",
    published: "",
    imageVideo: "",
    buttonText: "Add to favorites"
  });
  const [userSession, setUserSession] = useState({
    loggedIn: false,
    user: "",
    pass: "",
    email: ""
  });

  return (
    <div className="App">
      <BrowserRouter>
        <VideoContext.Provider
          value={{
            response,
            setResponse,
            videoMetaInfo,
            setVideoMetaInfo,
            videoPropperties,
            setSelectedVideoPropperties,
            userSession,
            setUserSession,
            changingg,
            changinggSetChangingg,
            favoriteVideosMapUser,
            setFavoriteVideosMapUser,
            favoritesFlag,
            setFavoritesFlag,
            favoritesVideosArrayUser,
            setFavoritesVideosArrayUser
          }}
        >
          <NavBar />

          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/logIn" component={LogIn} />
              <Route
                exact
                path="/reproductorPlayer"
                component={ReproductorPlayer}
              />
            </Switch>
          </div>
        </VideoContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
