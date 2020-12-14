import React, { useContext } from "react";
import VideoContext from "../../providers/VideoContext";
import {PlogOut} from "./LogOut.style";
const LogOut = () => {
  const { setUserSession, changinggSetChangingg, setSelectedVideoPropperties, setVideoMetaInfo, setFavoritesFlag, setFavoritesVideosArrayUser, userSession } = useContext(VideoContext);

  const resetValuesLoggedOut = () => {
    changinggSetChangingg(false);
    setFavoritesFlag(false);
    setVideoMetaInfo({});
    setUserSession({});
    setSelectedVideoPropperties({});
    setFavoritesVideosArrayUser([]);
  }; 

  return (
    <div>
      <PlogOut onClick={resetValuesLoggedOut} role = "onClickOut">
        {userSession.user === "noSession" ? "LogIn" : "LogOut"}
      </PlogOut>
    </div>
  );
};
export default LogOut;
