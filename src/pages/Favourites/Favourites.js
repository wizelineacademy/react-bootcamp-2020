import React, { useContext } from "react";
import VideoList from "../../components/VideoList/VideoList";
import PageContext from "../../providers/Context/PageContext";
import { Route, Redirect } from "react-router-dom";
const Favourites = () => {
  const { mapFavs, userLogged } = useContext(PageContext);

  return (
    <>
      <h1>Favs</h1>
      <VideoList videos={mapFavs.get(userLogged.user) ? mapFavs.get(userLogged.user) : [] } />
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
