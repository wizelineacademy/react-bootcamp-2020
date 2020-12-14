import React, { useContext, useState,useEffect } from "react";
import VideoContext from "../../providers/VideoContext";
import {Boton} from "./ButtonFavorites.style";

const ButtonFavorites = () => {
  const { userSession,favoriteVideosMapUser,videoPropperties } = useContext(VideoContext);
  const [textButton] = useState("Add to favorites");
  const [textButtonR] = useState("Remove");
 
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

 

  const removeFromFavorites = () =>{
    if(favoriteVideosMapUser.get(userSession.user)){
      if(favoriteVideosMapUser.get(userSession.user).get(videoPropperties.videoId)){
        favoriteVideosMapUser.get(userSession.user).delete(videoPropperties.videoId);
      }
    }
    
  };

  return (
    <React.Fragment>
      <React.Fragment>
      <Boton onClick = { addFavorites } role = "boton" >{textButton}</Boton>
    </React.Fragment>
     <React.Fragment>
        <Boton onClick = { removeFromFavorites } role ="botonr" >{textButtonR}</Boton>
     </React.Fragment>

      </React.Fragment>
    
  
  ); 
};
export default ButtonFavorites;
