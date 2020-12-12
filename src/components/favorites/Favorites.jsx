import React, { useContext } from "react";
import VideoContext from "../../providers/VideoContext";
import {Boton} from "./Favorites.style";
const Favorites = () => {
  const { setFavoritesFlag, changinggSetChangingg, favoriteVideosMapUser, userSession, setFavoritesVideosArrayUser } = useContext(VideoContext);
  
  const showVideoFavorites = () => {
    
    setFavoritesFlag(true);
    changinggSetChangingg(false);

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
      <Boton onClick={showVideoFavorites} role="favbuton">Favorites</Boton>
    </div>
  );
  
};
export default Favorites;
