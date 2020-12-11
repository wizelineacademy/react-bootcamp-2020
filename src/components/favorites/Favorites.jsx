import React, { useContext } from "react";
import VideoContext from "../../providers/VideoContext";
import * as Style from "./Favorites.style";
const Favorites = () => {
  const { setFavoritesFlag, changinggSetChangingg, favoriteVideosMapUser, userSession, setFavoritesVideosArrayUser } = useContext(VideoContext);
  
  const onFavorites = () => {
    setFavoritesFlag(true);
    changinggSetChangingg(false);
    const flaglocal = true;
    let favoriteVideos = favoriteVideosMapUser.get(userSession.user); 
    const favoriteVideosArray = [];

    if (favoriteVideos) {
      for (var clave of favoriteVideos.keys()) {
        favoriteVideosArray.push(favoriteVideos.get(clave));
      }
      setFavoritesVideosArrayUser(favoriteVideosArray);
    } 
  };

  return (
    <div>
      <Style.Boton1 onClick={onFavorites} role="favbuton">Favorites</Style.Boton1>
    </div>
  );
  
};
export default Favorites;
