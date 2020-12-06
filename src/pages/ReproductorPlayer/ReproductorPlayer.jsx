import React, { useContext } from "react";
import ListVideoContainer from "../../components/listVideos/ListVideos";
import VideoContainer from "../../components/mainContainer/VideoContainer";
import { Route, Redirect } from "react-router-dom";
import VideoContext from "../../providers/VideoContext";
import "../../components/styles/styleGrids.css";
const ReproductorPlayer = () => {
  const { userSession } = useContext(VideoContext);
  const { changingg } = useContext(VideoContext);

  return changingg ? (
    <div className="grid-container2">
      <VideoContainer />
      <ListVideoContainer />
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
