import React, { useContext } from "react";
import VideoContext from "../../providers/VideoContext";
import * as Style from "../styles/styleSheet";
const Favorites = () => {
  const { setFavoritesFlag } = useContext(VideoContext);
  const { changinggSetChangingg } = useContext(VideoContext);
  const { favoriteVideosMapUser } = useContext(VideoContext);
  const { userSession } = useContext(VideoContext);
  const { setFavoritesVideosArrayUser } = useContext(VideoContext);

  const onFavorites = () => {
    let favoriteVideos = favoriteVideosMapUser.get(userSession.user);

    setFavoritesFlag(true);
    changinggSetChangingg(false);
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
      <Style.Boton1 onClick={onFavorites}>Favorites</Style.Boton1>
    </div>
  );
};
export default Favorites;
