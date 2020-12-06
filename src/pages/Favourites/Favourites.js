import React, { useContext } from "react";
import VideoList from "../../components/VideoList/VideoList";
import PageContext from "../../providers/Context/PageContext";
import { Route, Redirect } from "react-router-dom";
const Favourites = () => {
  const { favVideos } = useContext(PageContext);
  const { userLogged } = useContext(PageContext);
  return (
    <>
      <h1>Favs</h1>
      <VideoList videos={favVideos} />
      <Route
        render={() =>
          userLogged.userStatus ? (
            
            <Redirect to="/favs" />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </>
  );
};

export default Favourites;
