import React, { useContext, useState,useEffect } from "react";
import VideoContext from "../../providers/VideoContext";
import {Boton} from "./ButtonFavorites.style";

const ButtonFavorites = () => {
  const { userSession,favoriteVideosMapUser,videoPropperties } = useContext(VideoContext);
  const [textButton] = useState("Add to favorites");
 
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
    
  };
  return <Boton onClick = {addFavorites} role = "boton" >{textButton}</Boton>; 
};
export default ButtonFavorites;
