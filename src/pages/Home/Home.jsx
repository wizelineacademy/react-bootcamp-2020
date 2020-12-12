import React, { useContext } from "react";
import { Link, Route, Redirect,Router } from "react-router-dom";
import ListVideos from "../../components/ListVideos/ListVideos";
import VideoContext from "../../providers/VideoContext";


const Home = () => {
  const {userSession } = useContext(VideoContext);
  
  return (
    <div>

      <Link to="/reproductorPlayer">
          <ListVideos />
      </Link>
      <Route
          render={() => userSession.loggedIn ? <Redirect to="/" /> : <Redirect to="/logIn" />}
        role="routerTest"/>
    </div>
  );
};
export default Home;
