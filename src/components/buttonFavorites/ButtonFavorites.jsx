import React, { useContext, useState } from "react";
import VideoContext from "../../providers/VideoContext";
import * as Style from "../styles/styleSheet.js";

const ButtonFavorites = () => {
  const { userSession } = useContext(VideoContext);
  const { favoriteVideosMapUser } = useContext(VideoContext);
  const { videoPropperties } = useContext(VideoContext);
  const [textButton, setTextButton] = useState("Add to favorites");
  const addFavorites = () => {
    let favoriteVideoLocalMap = new Map();
    const currentUserSession = { ...userSession };
    
    if (favoriteVideosMapUser.get(currentUserSession.user)) {
      favoriteVideosMapUser
        .get(currentUserSession.user)
        .set(videoPropperties.videoId, videoPropperties);
    } else {
      favoriteVideoLocalMap.set(videoPropperties.videoId, videoPropperties);
      favoriteVideosMapUser.set(currentUserSession.user, favoriteVideoLocalMap);
    }
    //setTextButton("Added");
  };
  return <Style.Boton1 onClick={addFavorites}>{textButton}</Style.Boton1>;
};
export default ButtonFavorites;
