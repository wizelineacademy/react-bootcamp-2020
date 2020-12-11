import React, { useContext } from "react";
import ListVideos from "../../components/listVideos/ListVideos";
import VideoContainer from "../../components/mainContainer/VideoContainer";
import { Route, Redirect } from "react-router-dom";
import VideoContext from "../../providers/VideoContext";
import "../../components/styles/styleGrids.css";
const ReproductorPlayer = () => {
  const { userSession,changingg } = useContext(VideoContext);
  
  return changingg ? (
    <div className="grid-container2">
      <VideoContainer />
      <ListVideos />
      <Route
        render={() =>
          userSession.loggedIn ? (
            <Redirect to="/reproductorPlayer" />
          ) : (
            <Redirect to="/logIn" />
          )
        }
      />
    </div>
  ) : (
    <React.Fragment>
      <Route
        render={() =>
          userSession.loggedIn ? <Redirect to="/" /> : <Redirect to="/logIn" />
        }
      />
    </React.Fragment>
  );
};

export default ReproductorPlayer;
